//Problem = https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = {}; // value:index
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.hasOwnProperty(diff)) {
      return [i, map[diff]];
    }
    map[nums[i]] = i;
  }
};
