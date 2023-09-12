import fs from 'fs';

// import tradingPostData from '../src/assets/data/tradingPostScraperResults.json'

const filename = '../src/assets/data/tradingPostScraperResults.json'

function updateData(filePath, jsonData) {
  const jsonString = JSON.stringify(jsonData, null, 2);
}

if (fs.existsSync(filename)) {

}
