/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.mins = [];
  this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const {mins, storage} = this;
  if (mins[mins.length-1] === undefined || mins[mins.length-1] >= x) {
    mins.push(x);
    console.log('here')
  }
  storage.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const {mins, storage} = this;
  let popped = storage.pop();
  if (popped === mins[mins.length-1]) {
    mins.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */