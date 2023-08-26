import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';
import inquirer from 'inquirer';

const filename = 'tradingPostScraperResults.json';

async function scrapeTradingPost() {
  const { url, year, month, outputFile } = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to scrape: ',
      default: 'https://worldofwarcraft.blizzard.com/en-us/news/23985778/wrap-up-the-summer-with-the-august-trading-post'
    },
    {
      type: 'input',
      name: 'year',
      message: 'Enter the year: ',
      default: '2023'
    },
    {
      type: 'input',
      name: 'month',
      message: 'Enter the month: ',
      default: 'august'
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

      const items = {};
      

      // Assuming each <figure> element contains an image and caption
      $('figure').each((index, element) => {
        // check for image
        const img = $(element).find('img');
        if (!img.length) {
          return; // Skip this element if there is no img
        }
        const imgSrc = img.attr('src');

        // check for figcaption
        const figcaption = $(element).find('figcaption');
        if (!figcaption) {
          return; // Skip this element if there is no figcaption
        }

        // pull the caption text & replace non-breaking spaces with regular spaces
        const caption = figcaption.text().trim().replace(/\u00A0/g, ' ');;



        // get the name
        const name = caption.split('\n')[0].trim();

        // get the tags
        const tags = caption.includes('Item Type: ')
          ? caption.split('Item Type: ')[1].split('\n')[0] // .split('\n')[0]
          : null;

        // get the price
        const price = caption.includes("Cost: ")
          ? parseInt(caption.split('Cost: ')[1].split(' ')) //.replace(/\D/g, ''))
          : null;
        
      
        const item = {
          "name": name,
          "price": price,
          "image": imgSrc,
          "tags": [tags],
          // "currentAvailability": true,
          // "pastAvailability": [null]
          "caption": caption,
        };

        items[name] = item;
      
        console.log(`Item ${index}:`, item.name);
      });

      // Now you have the scraped data in the 'items' object
      // You can do further processing or save it to your object

      console.log(items); // Just for demonstration

      // Read the existing data from the JSON file
      let existingData = {};
      if (fs.existsSync(filename)) {
        const fileContents = fs.readFileSync(filename, 'utf8');
        existingData = JSON.parse(fileContents);
      }

      // Check if the year and month exist in the existing data
      if (!existingData[year]) {
        existingData[year] = {};
      }
      if (!existingData[year][month]) {
        existingData[year][month] = {};
      }

      // Add new items to the existing data
      for (const itemName in items) {
        if (existingData[year][month][itemName]) {
          console.log(`Item ${itemName} already exists in year ${year}, month ${month}`);
          continue;
        }
        existingData[year][month][itemName] = items[itemName];
        console.log(`Added item ${itemName} to year ${year}, month ${month}`);
      }

      // Write the updated data to the JSON file
      const data = JSON.stringify(existingData, null, 2);
      fs.writeFileSync(filename, data);
      console.log(`Data saved to ${filename}`);
    })
    .catch(error => {
      console.error('Error fetching or parsing HTML:', error);
    });
}

scrapeTradingPost();


/**
 * example html
 * 
 * <aside class="gallery">
<figure><img alt="" src="https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/39N6E7K1HH2X1690524390194.png">
<figcaption>
<p style="text-align: center;"><u><strong>City Guard Heater Shield</strong></u><br>
<strong>Item Type:</strong>&nbsp;Shield<br>
<strong>Cost:</strong>&nbsp;50 Trader's Tender</p>

<p align="center" style="text-align:center"></p>
</figcaption>
</figure>

<figure><img alt="" src="https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/BTG222U1JGJQ1690524392863.png">
<figcaption>
<p style="text-align: center;"><u><strong>Grunt’s Buckler</strong></u><br>
<strong>Item Type:</strong>&nbsp;Sheild<br>
<strong>Cost:</strong>&nbsp;50 Trader's Tender</p>

<p align="center" style="text-align:center"></p>
</figcaption>
</figure>
</aside>
 */