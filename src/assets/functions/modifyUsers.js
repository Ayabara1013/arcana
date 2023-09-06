// import * as fs from 'fs';

import { usersTest } from '../data/usersTest.json'

// // const filename = 'tradingPostScraperResults.json';
const filename = './src/assets/data/usersTest.json';

// // add a new user to the data
// export async function addNewUser(userData) {
//   let newUser = {
//     name: userData.name,
//     password: userData.password,
//     rewards: {
//       tracked: {},
//       collected: {},
//     },
//   };

//   // read the existing data from the file
//   let existingData = [];
//   if (fs.existsSync(filename)) {
//     const fileContents = fs.readFileSync(filename, 'utf8');
//     existingData = JSON.parse(fileContents);
//   }

//   // add the new user to the existing data
//   existingData.push(newUser);

//   // write the updated data back to the file
//   fs.writeFileSync('usersTest.json', JSON.stringify(existingData));
// }

// // update user
// export async function updateUser(name, updatedUser) {

//   let existingData = [];

//   if (fs.existsSync('usersTest.json')) {
//     const fileContents = fs.readFileSync('usersTest.json', 'utf8');
//     existingData = JSON.parse(fileContents);
//   }

//   const userIndex = existingData.findIndex((user) => user.name === name);

//   if (userIndex === -1) {
//     existingData.push(updatedUser);
//   }
//   else {
//     existingData[userIndex] = { ...existingData[userIndex], ...updatedUser }
//   }

//   fs.writeFileSync('usersTest.json', JSON.stringify(existingData));

// }

// export async function retrieveUsers() {
//   let existingData = [];
//   if (fs.existsSync('usersTest.json')) {
//     const fileContents = fs.readFileSync('usersTest.json', 'utf8');
//     existingData = JSON.parse(fileContents);
//   }

//   return existingData;
// }

export function updateUser(userData, userList) {
  
}

// // track item

// // untrack item

// // collect item

// // un-collect item

