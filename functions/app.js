function grumps() {
  console.log("Hello World!");
}
function rollDie() {
  let roll = Math.floor(Math.random() * 6);
  console.log(`Rolled: ${roll}`);
}
// rollDie();
// rollDie();
// rollDie();
// rollDie();
function greet(nickname) {
  console.log(`Hi ${nickname}`);
}
// greet("Yash");
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}
function add(x, y) {
  return x + y;
}
// console.log(add(4, 6));

// function isValidPassword(username, password) {
//   if (password.length < 8) {
//     return "Password ust be of at least 8 characters";
//   }
//   if (password.indexOf(" ") != -1) {
//     return "Password can not contain spaces";
//   }
//   if (password.indexOf(username) != -1) {
//     return "Password can not contain username";
//   }
//   return "";
// }

// function isValidPassword(username, password) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") != -1 ||
//     password.indexOf(username) != -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(username, password) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") != -1;
//   const tooSimilar = password.indexOf(username) != -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

function isValidPassword(username, password) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") != -1;
  const tooSimilar = password.indexOf(username) != -1;
  return !tooShort && !hasSpace && !tooSimilar;
}

const arr = [10, 20, 30, 40];
function calculateAverage(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

function isPangram(str) {
  const sentence = str.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (sentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

function isPangram(str) {
  const sentence = str.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!sentence.includes(char)) {
      return false;
    }
  }
  return true;
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}

function pick(arr) {
  const valueIndex = Math.floor(Math.random() * arr.length);
  return arr[valueIndex];
}
