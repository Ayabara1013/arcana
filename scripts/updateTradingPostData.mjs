import fs from 'fs';

// const filename = 'tradingPostScraperResults.json';
const filename = '../src/assets/data/tradingPostScraperResults.json';
const itemRecords = '../src/assets/data/itemRecords.json';

// create an object to manipulate the data inside
let existingData = {};
let existingItems = [];

// Read the existing data from the JSON file
if (fs.existsSync(filename)) {
  const fileContents = fs.readFileSync(filename, 'utf8');
  existingData = JSON.parse(fileContents);
  console.log(existingData);
  console.log(`scraper data file exists`)
}

if (fs.existsSync(itemRecords)) {
  const fileContents = fs.readFileSync(filename, 'utf8');
  existingData = JSON.parse(fileContents);
  console.log(existingData);
  console.log(`item records exists`)
}

async function updateTradingPostData() {
  // create an object to manipulate the data inside
  // let existingData = {};

  // // Read the existing data from the JSON file
  // if (fs.existsSync(filename)) {
  //   const fileContents = fs.readFileSync(filename, 'utf8');
  //   existingData = JSON.parse(fileContents);
  //   // console.log(existingData);
  //   console.log(`file exists`)
  // }

  // does the item have a last available value?
  // iterate over each year
  for (const year in existingData) {
    // iterate over each month in the year
    for (const month in existingData[year]) {
      // iterate over each item in the month
      for (const item in existingData[year][month]) {
        if (!existingData[year][month][item].lastAvailable) {
          console.log(`adding lastAvailable array property to ${item} with [${year}, ${month}]`);
          existingData[year][month][item].lastAvailable = [[year, month]];
        }
        else {
          if (!existingData[year][month][item].lastAvailable.some(([yearToCheck, monthToCheck]) => year === yearToCheck && month === monthToCheck)) {
            existingData[year][month][item].lastAvailable.unshift([year, month]);
          }
        }
      }
    }
  }

  const updatedData = JSON.stringify(existingData, null, 2);

  // fs.writeFileSync(filename, updatedData, { flag: 'a' });
  /**
   * ^ this line seemed to add an entire new entry into the json, of the entire data pool. luckily I am just doing this locally, but I may want to optimize this in the future to not rewrite the entire json
   */

  fs.writeFileSync(filename, updatedData);
}


function recordItems() {
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        if (!existingItems.some(({ name }) => name === item)) {
          existingItems.push({[item]: [year, month]});
        }
        else console.log(`item ${item} already exists in itemRecords`);
      }
    }
  }

  const updatedItems = JSON.stringify(existingItems, null, 2);
  fs.writeFileSync(itemRecords, updatedItems);
}

updateTradingPostData();
recordItems();