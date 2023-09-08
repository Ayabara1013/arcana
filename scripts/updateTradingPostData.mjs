import fs from 'fs';

// const filename = 'tradingPostScraperResults.json';
const filename = './src/assets/data/tradingPostScraperResults.json';


async function updateTradingPostData() {

  // create an object to manipulate the data inside
  let existingData = {};

  // pull the contents of the file to the existingData object 
  if (fs.existsSync(filename)) {
    const fileContents = fs.readFileSync(filename, 'utf8');
    existingData = JSON.parse(fileContents);
  }

  // does the item have a last available value?
  // iterate over each year
  for (const year in existingData) {
    // iterate over each month in the year
    for (const month in existingData[year]) {
      // iterate over each item in the month
      for (const item in existingData[year][month]) {
        if (!existingData[year][month][item].lastAvailable) {
          // console.log(`adding lastAvailable array property to ${item} with [${year}, ${month}]`);
          existingData[year][month][item].lastAvailable = [[year, month]];
          // console.log(JSON.stringify(existingData[year][month][item].lastAvailable, null, 2));
        }
      }
    }
  }

  // const updatedData = JSON.stringify(existingData, null, 2);
  const updatedData = JSON.stringify(existingData, (key, value) => {
    if (key === 'lastAvailable') {
      return value ? JSON.stringify(value.map(([year, month]) => [year, month])) : '[]';
    }
    return value;
  }, 2);

  // fs.writeFileSync(filename, updatedData, { flag: 'a' });
  /**
   * ^ this line seemed to add an entire new entry into the json, of the entire data pool. luckily I am just doing this locally, but I may want to optimize this in the future to not rewrite the entire json
   */

  fs.writeFileSync(filename, updatedData);
}

updateTradingPostData();