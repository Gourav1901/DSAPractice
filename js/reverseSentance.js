function reverseWords(sentence) {
  let result = "";
  let currentWord = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === " ") {
      // When a space is found, reverse the current word and add + space
      result += currentWord.split("").reverse().join("");
      result += " ";
      currentWord = "";
    } else {
      currentWord += char;
    }
  }

  // Add the last word (it won't be followed by a space)
  result += currentWord.split("").reverse().join("");
  return result;
}

console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"
