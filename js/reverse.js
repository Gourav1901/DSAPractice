// reverse a string

let str = "Hello";

let ans = "";

for (let i = str.length - 1; i >= 0; i--) {
  ans += str[i];
}

console.log("ans", ans);

//reverse a string without using any loops

let ans2 = str.split("").reverse().join("");

console.log("ans2", ans2);
