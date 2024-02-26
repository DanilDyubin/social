const getUniqueKey = () => {
  const keys = [];
  while (keys.length < 10) {
    let randomNumber = Math.ceil(Math.random() * 1000);
    let found = false;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === randomNumber) {
        found = true;
      }
    }
  }
  if (!found) {
    keys.push(randomNumber);
  }
  console.log(keys);
};
const pipa = getUniqueKey();
console.log(pipa);

console.log('sfsfsf');