// import { each } from 'cheerio/lib/api/traversing';
import fs from 'fs';

// const filename = 'tradingPostScraperResults.json';
const filename = '../src/assets/data/tradingPostScraperResults.json';
const itemRecords = '../src/assets/data/itemRecords.json';

// create an object to manipulate the data inside
let existingData = {};
let existingItems = {};

// Read the existing data from the JSON file
if (fs.existsSync(filename)) {
  const fileContents = fs.readFileSync(filename, 'utf8');
  existingData = JSON.parse(fileContents);
  // console.log(existingData);
  // console.log(`scraper data file exists`)

  fixTradingPostStrings();
  printExistingData();
}
// // not really needed! i think lol
// if (fs.existsSync(itemRecords)) {
//   const fileContents = fs.readFileSync(filename, 'utf8');
//   existingData = JSON.parse(fileContents);
// }

function printExistingData() {
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        console.log(existingData[year][month][item]);
      }
    }
  }
}

function fixedJSONString(string) {
  let newString = string.replace(/\u2019/g, "'").replace(/\u2013/g, "-");
  // if (newString !== string) console.log(`replaced ${string} with ${newString}`);
  // return string.replace(/\u2019/g, "'").replace(/\u2013/g, "-");
  return newString;
}

function fixTradingPostStrings() {
  for (const year in existingData) {
    for (const month in existingData[year]) {
      for (const item in existingData[year][month]) {
        console.log('-------------------')
        // let newItemName = fixedJSONString(item);
        // if (item !== newItemName) {
        //   console.log(`${item} does not match ${newItemName}`);

        //   // add a new item with the new data
        //   // existingData[year][month][newItemName] = existingData[year][month][item];

          
        //   // delete existingData[year][month][item];
        //   // console.log(existingData[year][month]);
        // }

        // for (const property in existingData[year][month][item]) { 
        //   // existingData[year][month][newItemName][property] = existingData[year][month][item][property];
        //   console.log(existingData[year][month][newItemName][property]);
        //   console.log(existingData[year][month][item][property]);
        // }
        
        // console.log(`WRONG! ${item}`);
        
        if (item.includes('’') || item.includes('–')) {
          console.log(`WRONG! ${item}`);
        }

        let newItemName = fixedJSONString(item);

        // console.log(existingData[year][month][item]);

        console.log(newItemName);

        let newItem = existingData[year][month][newItemName];

        console.log(newItem);

        for (const property in existingData[year][month][item]) {
          existingData[year][month][newItemName][property] = existingData[year][month][item][property];
        }

        delete existingData[year][month][item];

        // console.log(existingData[year][month][newItemName]);

        // console.log(existingData[year][month][newItemName]);

        // for (const property in existingData[year][month][item]) {
        //   // existingData[year][month][item][property] = fixedJSONString(existingData[year][month][item][property]);
        //   if (property === "name" || property === "caption") {
        //     if (existingData[year][month][item][property].includes('’')) {
        //       // console.log(`${item} ${property} includes bad character`);
        //       // existingData[year][month][item][property] = fixedJSONString(existingData[year][month][item][property]);
        //     }
        //   }
        // }
      }
    }
  }
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
  // console.log(existingData["2023"]["february"]);
// console.log(existingItems);
}

// updateTradingPostData();
// fixTradingPostStrings();
// recordItems();
// updateScraperResults();
finalChecks();