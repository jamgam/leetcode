/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let paren = s[i];
    if (paren === ')') {
      if (stack[stack.length-1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    } else if (paren === ']') {
      if (stack[stack.length-1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    } else if (paren === '}') {
      if (stack[stack.length-1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(paren);
    }
          
  }

return !stack.length;
};