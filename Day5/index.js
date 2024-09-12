//Problem = https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

////////// Brute Force /////////////

var findAnagrams = function (s, p) {
  let ans = [];
  if (p.length > s.length) return ans;
  let r = "";
  for (let i = 0; i < s.length; i++) {
    r = s.slice(i, i + p.length);
    if (areAnagrams(p, r)) {
      ans.push(i);
    }
  }
  return ans;
};

function areAnagrams(str1, str2) {
  // Remove any non-alphabetic characters and convert strings to lowercase
  const formatString = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  // Format and sort the strings
  const sortedStr1 = formatString(str1).split("").sort().join("");
  const sortedStr2 = formatString(str2).split("").sort().join("");

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

/////////  Optimised //////////

var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];
  let ans = [];
  pHash = {};
  sHash = {};

  for (let i = 0; i < p.length; i++) {
    pHash[p[i]] = (pHash[p[i]] || 0) + 1;
    sHash[s[i]] = (sHash[s[i]] || 0) + 1;
  }

  const compareHashes = (hash1, hash2) => {
    if (Object.keys(hash1).length !== Object.keys(hash2).length) return false;
    for (let key in hash1) {
      if (hash1[key] !== hash2[key]) return false;
    }
    return true;
  };

  if (compareHashes(sHash, pHash)) ans.push(0);
  let left = 0;
  for (let right = p.length; right < s.length; right++) {
    sHash[s[right]] = (sHash[s[right]] || 0) + 1;

    sHash[s[left]] -= 1;

    if (sHash[s[left]] == 0) {
      delete sHash[s[left]];
    }
    left++;
    if (compareHashes(sHash, pHash)) ans.push(left);
  }
  return ans;
};
