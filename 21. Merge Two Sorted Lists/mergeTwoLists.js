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
var mergeTwoLists = function(l1, l2) {
  
  if (!l1) {
    if(!l2) {
      return null
    } else {
      return l2;
    }
  }  else if (!l2) {
    if(!l1) {
      return null
    } else {
      return l1;
    }
  }
  
  
  
  var head;
  var cur;
  var cur1 = l1;
  var cur2 = l2;
  if (l1.val < l2.val) {
    head = l1;
    cur1 = l1.next;
  } else {
    head = l2
    cur2 = l2.next;
  }
  cur = head
  
  while(cur1 || cur2) {
    if (!cur1) {
      cur.next = cur2
      break;
    }
    
    if (!cur2) {
      cur.next = cur1
      break;
    }
    
    if (cur1.val < cur2.val) {
      cur.next = cur1;
      cur = cur.next;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur = cur.next;
      cur2 = cur2.next;
    }
  }
  
  return head;
};