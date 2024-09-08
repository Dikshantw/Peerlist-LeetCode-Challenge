//Problem = https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let n = prices.length;
  maximum = 0;
  ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (prices[i] > maximum) {
      maximum = prices[i];
    }
    profit = maximum - prices[i];
    if (profit > ans) {
      ans = profit;
    }
  }
  return ans;
};
