const arr = [10, 20, 30, 40, 50];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
const word = "stressed";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
console.log(reversedWord);

for (let item of arr) {
  console.log(item);
}

for (let x in arr) {
  console.log(x);
}
