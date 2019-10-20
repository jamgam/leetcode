/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// dynamic programming using tabulation

var minDistance = function(word1, word2) {
  
  let memo = [];
  for(let char of word1) {
    memo.push([]);
  }
  memo.push([]);
  
  for(let r = 0; r <= word1.length; r++) {
    for(let c = 0; c <= word2.length; c++) {
      if(c === 0) {
        memo[r][c] = r;
      } else if(r === 0) {
        memo[r][c] = c;
      } else if(word1[r-1] === word2[c-1]) {
        memo[r][c] = memo[r-1][c-1];
      } else {
        memo[r][c] = 1 + Math.min(memo[r-1][c], memo[r-1][c-1], memo[r][c-1]);
      }
      
    }
  }
  return memo[word1.length][word2.length];
};