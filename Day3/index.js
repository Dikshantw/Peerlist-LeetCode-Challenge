//Problem = https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let maxSub = nums[0];
  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    maxSub = Math.max(maxSub, sum);
  }
  return maxSub;
};

//////// Another Good Approach ////////

var maxSubArray = function (nums) {
  let sum = nums[0];
  let maxSub = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSub = Math.max(sum, maxSub);
  }
  return sum;
};
