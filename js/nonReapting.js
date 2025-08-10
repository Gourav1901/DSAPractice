var firstUniqChar = function (s) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] == 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("abacddbec"));
