/**
 * @param {number} n
 * @return {boolean}
 */

/* notes

I: Int
O: Bool
C: n/a
E: 

ex: 19

1 + 81 = 82
64 + 4 = 68
36 + 64 = 100
1 + 0 + 0 = 1

ex: 20
4 + 0 = 4
16    = 16
1 + 36 = 37
9 + 49 = 58 
25 + 64 = 89
64 + 81 = 145
1 + 16 +25 = 42
16 + 4 = 20

*/

var isHappy = function(n) {
  
  var seen = {};
  var result = false;
  
  var recurse = (num) => {
    // base cases
    if (seen[num] !== undefined) {
      return;
    }
    
    if (num === 1) {
      result = true;
      return;
    }
    
    seen[num] = true;
    // recurse
    var digits = [];
    var sumOfSqures = 0;
    var numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      sumOfSqures += (parseInt(numStr[i]))**2;
    }
    
    recurse(sumOfSqures);
  }
  
  recurse(n);
  return result
};