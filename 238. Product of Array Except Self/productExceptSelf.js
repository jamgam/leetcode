/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  
  var n = nums.length
  var left = [1];
  var right = [];
  right[n-1] = 1;
  var result = [];
  
  for (let i = 1; i < n; i++) {
    left[i] = left[i-1] * nums[i-1];
  }
  
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i+1] * nums[i+1];
  }
  
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i]
  }

  return result;
};