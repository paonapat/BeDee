const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return "";

  // Iterate through the characters of the first string
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    // Check if the character matches in all other strings
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i); // Return the prefix found so far
      }
    }
  }

  return strs[0]; // If all strings are the same, return any string
};

const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));
