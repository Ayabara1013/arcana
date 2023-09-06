import itemList from './tradingPostScraperResults.json'



const createRewardList = () => {
  let rewardListObject = {};

  for (const year in itemList) {
    for (const month in itemList[year]) {
      for (const item in itemList[year][month]) {
        rewardListObject[item] = {
          tracked: false,
          collected: false, 
          dateCollected: null
        }
      }
    }
  }

  return rewardListObject;
}

export const defaultUser = {
  name: 'DEFAULT-NAME-TEST-ONLY',
  username: 'default.username',
  email: 'default-email@email.com', 
  password: 'password1',
  rewards: createRewardList(),
  settings: {}
}