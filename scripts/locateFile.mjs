import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import inquirer from 'inquirer';

// const filename = 'tradingPostScraperResults.json';
const filename = './src/assets/data/tradingPostScraperResults.json';

if (fs.existsSync(filename)) { 
  console.log(`no file found`)
}