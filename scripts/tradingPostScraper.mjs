// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');
// const cheerio = require('cheerio');

// DO NOT INCLUDE THIS ANYWHERE IN THE ACTUAL CODE SO .MJS DOESNT CAUSE ISSUES WHEN BUILDING!

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

import inquirer from 'inquirer';

async function scrapeTradingPost() {
  const { url, year, month, outputFile } = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to scrape: '
    },
    {
      type: 'input',
      name: 'year',
      message: 'Enter the year: '
    },
    {
      type: 'input',
      name: 'month',
      message: 'Enter the month: '
    },
    {
      type: 'input',
      name: 'outputFile',
      message: 'Enter the output file name: ',
      default: 'tradingPostScraperResults.json'
    }
  ]);

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = [];

      // Assuming each <figure> element contains an image and caption
      $('aside.gallery figure').each((index, element) => {
        const imgSrc = $(element).find('img').attr('src');
        const caption = $(element).find('figcaption').text();

        items.push({ imgSrc, caption });
      });

      // Now you have the scraped data in the 'items' array
      // You can do further processing or save it to your object

      console.log(items); // Just for demonstration

      // Save the data to a file
      const data = JSON.stringify(items, null, 2);
      const filePath = path.resolve(outputFile);
      fs.writeFileSync(filePath, data);
      console.log(`Data saved to ${filePath}`);
    })
    .catch(error => {
      console.error('Error fetching or parsing HTML:', error);
    });
}

scrapeTradingPost();
