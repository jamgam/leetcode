/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    let profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit);
  }
  
  return maxProfit;
};