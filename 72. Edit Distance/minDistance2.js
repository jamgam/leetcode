/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// dynamic programming using memoization

var minDistance = function(word1, word2) {
  var dp = [];
  
  for (let i = 0; i <= word1.length; i++) {
    dp.push([]);
  }
  
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }
  
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }
  
  var inner = (i, j) => {
    let char1 = word1[i-1];
    let char2 = word2[j-1];
    
    if (dp[i][j] !== undefined) {
      return dp[i][j]
    } else if (char1 === char2) {
      dp[i][j] = inner(i-1,j-1);
    } else {
      dp[i][j] = Math.min(
        inner(i-1, j-1), 
        inner(i,j-1), 
        inner(i-1, j)
      ) + 1
    }
    return dp[i][j];
  }
  inner(dp.length-1, dp[0].length -1);

  return dp[dp.length-1][dp[0].length-1];
};