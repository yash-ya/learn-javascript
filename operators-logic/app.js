const message = "hell";
if (message === "hello") {
  console.log("Hello World!");
} else if (message === "world") {
  console.log("Hello to World!");
} else {
  console.log("Do Something");
}

const num = 9;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let password = "yash";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Nested Loops");
  }
} else {
  console.log("Password must be longer.");
}
