/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let storage = {};
  let start = 0;
  let max = 0;
  
  for(let i = 0; i < s.length; i++) {
    let char = s[i];
    if(storage[char] !== undefined) {
      for(let j = start; j < storage[char]; j++) {
        delete storage[s[j]] 
      }
      start = storage[char] + 1;
    } 
    storage[char] = i;
    max = Math.max(max, Object.keys(storage).length);
  }
  
  return max;
};