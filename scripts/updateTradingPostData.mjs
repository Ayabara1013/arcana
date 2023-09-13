import { count } from 'console';
import fs from 'fs';

// const filename = 'tradingPostScraperResults.json';
const filename = '../src/assets/data/tradingPostScraperResults.json';
const itemRecords = '../src/assets/data/itemRecords.json';
const scanResults = '../src/assets/data/scanResults.json';
const testFile = '../src/assets/data/testFile.json';
const backup = '../src/assets/data/scraperResultsBackup.json';

// create an object to manipulate the data inside
let existingData = {};
let existingItems = {};
let resultsFromScan = {};

// Read the existing data from the JSON file
if (fs.existsSync(filename)) {
  const fileContents = fs.readFileSync(filename, 'utf8');
  existingData = JSON.parse(fileContents);
}

function printExistingData() {
  // console.log(existingData);
  for (const year in existingData) {
    for (const month in existingData[year]) {
      console.log(existingData[year][month]);
      // for (const item in existingData[year][month]) {
      //   console.log(item);
      // }
    }
  }
}

function fixedJSONString(string) {
  let newString = string.replace(/\u2019/g, "'").replace(/\u2013/g, "-");
  // if (newString !== string) console.log(`replaced ${string} with ${newString}`);
  // return string.replace(/\u2019/g, "'").replace(/\u2013/g, "-");
  return newString;
}

function getTypeOf(data) {
  let type = typeof data;
  if (type === 'object') {
    if (Array.isArray(data)) {
      type = 'array';
      if (data.length > 1) {
        type = 'array, nested';
      }
    }
  }
  return type;
}

function scanTpResuts() {
  for (const year in existingData) {
    resultsFromScan[year] = {};
    for (const month in existingData[year]) {
      resultsFromScan[year][month] = {};
      for (const item in existingData[year][month]) {
        resultsFromScan[year][month][item] = {};

        for (const property in existingData[year][month][item]) {
          let propertyData = existingData[year][month][item][property];
          console.log(`------`);
          console.log(property);

          let type = typeof propertyData;
          if (type === 'object') {
            if (Array.isArray(propertyData)) {
              type = 'array';
              if (propertyData.length > 1) {
                type = 'array, nested';
              }
            }
          }

          resultsFromScan[year][month][item][property] = type;
          console.log(resultsFromScan[year][month][item][property]);
        }
      }
    }
  }
  // I want this to write a new file with the results of the scan
  fs.writeFileSync(scanResults, JSON.stringify(resultsFromScan, null, 2));
}

function fixTradingPostStrings() {
  let tnew = 'new item ->';
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        console.log('---------------------------------------------------------')
        
        if (item.includes('’') || item.includes('–')) {
          console.log(`WRONG! ${item}`);
        }

        // diplay the original item
        console.log(item, existingData[year][month][item]);

        let newItemName = fixedJSONString(item);
        existingData[year][month][newItemName] = existingData[year][month][item];

        // new item now has the fixed name
        let newItem = existingData[year][month][newItemName];
        console.log(`new item -> ${newItemName}`, newItem);

        for (const property in newItem) {
          // item prints the values correctly, now I need to change them
          if (getTypeOf(newItem[property]) === 'string') {
            let newString = fixedJSONString(newItem[property]);
            // console.log(`new string -> ${newString}`);
            newItem[property] = newString;
          }
        }

        console.log(`new item -> ${newItemName}`, newItem);
        // console.log(`old item -> ${item}`, existingData[year][month][item]);
      }
      console.log(existingData[year][month])
    }
  }
  fs.writeFileSync(testFile, JSON.stringify(existingData, null, 2));
}

function countEntries(data) {
  let count = 0;
  for (const year in data) {
    for (const month in data[year]) {
      for (const item in data[year][month]) {
        count++;
      }
    }
  }
  console.log(count);
}

function fixAll() {
  let newData = {}; // this is the new data that will be written to the file
  let arrow = '->';
  let tNew = 'new item';
  let tOld = 'old item';

  // proof that some items dont have the data
  console.log(existingData['2023']['september']['Ensemble: Swashbuckling Bucaneer’s Slops']);

  for (const year in existingData) {
    newData[year] = {};
    for (const month in existingData[year]) {
      newData[year][month] = {};
      for (const item in existingData[year][month]) {
        let newName = fixedJSONString(item);
        let newItem = newData[year][month][newName] = {};
        Object.assign(newItem, existingData[year][month][item]);

         // check if lastAvailable exists
         if (!newItem.lastAvailable) {
          console.log(newName);
          console.log('missing! >>>');
          newItem.lastAvailable = [[year, month]];
          console.log(newName, newItem.lastAvailable);
        }
        
        // replace the old strings with the new fixed strings
        for (const property in newItem) {
          if (getTypeOf(newItem[property]) === 'string') {
            let newString = fixedJSONString(newItem[property]);
            newItem[property] = newString;
          }
        }

        console.log(`---------------------------------------------------------`);
        console.log(`old item ::`);
        console.log(item, arrow, existingData[year][month][item]); // ok so the item is still there

        console.log(`new item ::`);
        console.log(newName, arrow, newItem);
      } // item
    } // month
  } // year

  // // proof that the items now have the data
  // console.log(newData['2023']['september']);
  countEntries(existingData);
  countEntries(newData);
  fs.writeFileSync(backup, JSON.stringify(newData, null, 2));
  fs.writeFileSync(testFile, JSON.stringify(newData, null, 2));
  fs.writeFileSync(filename, JSON.stringify(newData, null, 2));
}


/**
 * example object/ property
 *     },
      "Filigreed Lion’s Maw": {
        "name": "Filigreed Lion’s Maw",
        "price": 250,
        "image": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/GH711YMJ3I5S1677619808477.png",
        "tags": [
          "Shield"
        ],
        "caption": "Filigreed Lion’s Maw\nItem Type: Shield\nCost: 250 Trader's Tender"
      },
      "Frozen Shadow": {
        "name": "Frozen Shadow",
        "price": 400,
        "image": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/BS85UIJ3JNEZ1677479004668.jpg",
        "tags": [
          "One-Hand Sword"
        ],
        "caption": "Frozen Shadow\nItem Type: One-Hand Sword\nCost: 400 Trader's Tender",
        "lastAvailable": [
          [
            "2023",
            "march"
          ]
        ]
      },
 */

// I thin this is unneccesary too?
// I could make it into a function to replace the bad character?
// async function updateTradingPostData() {
//   // does the item have a last available value?
//   // iterate over each year
//   for (const year in existingData) {
//     // iterate over each month in the year
//     for (const month in existingData[year]) {
//       // iterate over each item in the month
//       for (const item in existingData[year][month]) {
//         if (!existingData[year][month][item].lastAvailable) {
//           console.log(`adding lastAvailable array property to ${item} with [${year}, ${month}]`);
//           existingData[year][month][item].lastAvailable = [[year, month]];
//         }
//         else {
//           if (!existingData[year][month][item].lastAvailable.some(([yearToCheck, monthToCheck]) => year === yearToCheck && month === monthToCheck)) {
//             existingData[year][month][item].lastAvailable.unshift([year, month]);
//           }
//         }
//       }
//     }
//   }

//   const updatedData = JSON.stringify(existingData, null, 2);

//   // fs.writeFileSync(filename, updatedData, { flag: 'a' });
//   /**
//    * ^ this line seemed to add an entire new entry into the json, of the entire data pool. luckily I am just doing this locally, but I may want to optimize this in the future to not rewrite the entire json
//    */

//   fs.writeFileSync(filename, updatedData);
// }

function recordItems() {
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        let newName = fixedJSONString(existingData[year][month][item].name);

        if (!existingItems[newName]) {
          existingItems[newName] = [];
        }
        else {
          console.log(`item ${existingData[year][month][item].name} already exists in itemRecords.json`);
        }

        existingItems[newName].unshift([year, month]);
      }
    }

    const updatedItems = JSON.stringify(existingItems, null, 2);
    fs.writeFileSync(itemRecords, updatedItems);
  }

  console.log(existingItems)

  const updatedItems = JSON.stringify(existingItems, null, 2);
  fs.writeFileSync(itemRecords, updatedItems);
}

function updateScraperResults() {
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        let itemName = fixedJSONString(existingData[year][month][item].name);
        existingData[year][month][item].lastAvailable = existingItems[item];
      }
    }
  }
  const updatedData = JSON.stringify(existingData, null, 2);
  fs.writeFileSync(filename, updatedData);
}

function finalChecks() {
  for (const item in existingItems) {
    if (item.length > 1) console.log(item)
  }
}

// updateTradingPostData();
// fixTradingPostStrings();
// recordItems();
// updateScraperResults();
fixAll();
countEntries(existingData);
finalChecks();