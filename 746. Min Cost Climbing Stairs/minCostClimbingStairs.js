/**
 * @param {number[]} cost
 * @return {number}
 */



/*
1   100 1   1   1   100 1   1   100 1
1   1   2   2   3   4   4   4   5   6
1   100 2   2   3   102 4   4   104 6

*/

var minCostClimbingStairs = function(cost) {
  const dp = [cost[0], cost[1]];
  
  for (let i = 2; i < cost.length; i++) {
    let use = cost[i];
    use += Math.min(dp[i-1], dp[i-2]);    
    dp[i] = use;
  }
  
  return Math.min(dp[dp.length-1], dp[dp.length-2]);
  
};