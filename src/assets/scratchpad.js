


const exampleUser = {
  uid: '12345',
  userName: 'John Smith',
  email: 'johnsmith@gmail.com',
  records: {
    tradingPost: {
      currentTendies: 123,
      rewards: {
        tracked: [ '001', '002' ],
        collected: [ '003', '004' ],
      }
    }
  }
}

for (const item in user.records.tradingPost.rewards.tracked) {
  if (Object.hasOwnProperty.call(object, item)) {
    const element = object[item];
    console.log(element);
  }
}

const updatedData = {
  email: 'newemail@gmail.com',
  records: {
    tradingPost: {
      rewards: {
        collected: ['005']
      }
    }
  }
}
// adjusted for firebase

const user = firebase.getdocument(users, userId);

// Assuming 'user' is the Firebase user object obtained after Google Sign-In
const userDocRef = firebase.firestore().collection('users').doc(user.uid);


function storeUserdata(userData) {
  if (userData) {
    userDocRef.update({
      
    })
  }
}

// Items you want to remove
const itemsToRemove = ['003', '005'];

// Update the 'collected' array by removing specified items
userDocRef.update({
  'records.tradingPost.rewards.collected': firebase.firestore.FieldValue.arrayRemove(...itemsToRemove)
})
.then(() => {
  console.log('Items removed from the collected array in Firestore');
})
.catch((error) => {
  console.error('Error removing items from Firestore: ', error);
});
