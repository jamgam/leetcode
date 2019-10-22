/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
  var cur1 = l1.next;
  var cur2 = l2.next;
  var cur3 = new ListNode(l1.val + l2.val);
  var head = cur3;
  var remainder = 0;
  
  if(cur3.val >= 10) {
      remainder = 1;
      cur3.val -= 10;
  }
  
  while(cur1 || cur2) {
      
      var cur1Val = cur1 ? cur1.val : 0;
      var cur2Val = cur2 ? cur2.val : 0;
      var newNode = new ListNode(cur1Val + cur2Val);
      if(remainder){
          newNode.val += remainder;
          remainder = 0;
      }
      
      if(newNode.val >= 10) {
          remainder = 1;
          newNode.val -= 10;
      }
      
      cur3.next = newNode;
      cur3 = cur3.next;
      
      if(cur1) {
          cur1 = cur1.next  
      } 
      if(cur2) {
          cur2 = cur2.next
      }
  }
  
  if(remainder){
      cur3.next = new ListNode(1);
  }
        
  return head;
};