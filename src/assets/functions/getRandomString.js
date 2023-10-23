


export default function getRandomString() {
  // let randomString = "";
  // const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // for (let i = 0; i < 10; i++) {
  //   randomString += possible.charAt(Math.floor(Math.random() * possible.length));
  // }
  const options = ["notes", "ale", "pot", "written", "including", "joined", "passage", "plural", "enemy", "become", "whale", "cover", "statement", "within", "suit", "grabbed", "setting", "real", "riding", "bread", "labor", "everywhere", "pizza", "film"];

  return options[Math.floor(Math.random() * options.length)];
}