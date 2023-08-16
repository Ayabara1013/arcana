


class Account {
  constructor(username, accountName, email, password, patreonId, patreonTier, activeSessions) {
    this.user = {
      username,
      accountName,
      email
    };
    this.security = {
      password
    };
    this.patreon = {
      id: patreonId,
      tier: patreonTier
    };
    this.tokens = {
      activeSessions
    };
  }
}

const account1 = new Account(
  'xX.starkiller69.Xx',
  'John Smith',
  'johnSmith69@yahoo.com',
  'totallyEncryptedPassword',
  1234567890,
  'tier-1',
  ['1234', '4231', 'asdf', 'fdsa']
);

const account2 = new Account(
  'user2',
  'User Two',
  'user2@example.com',
  'strongPassword',
  9876543210,
  'tier-2',
  ['abcd', 'efgh']
);

let accountsDB = [account1, account2];



export { Account, accountsDB };