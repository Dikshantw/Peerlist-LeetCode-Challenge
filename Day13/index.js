//Problem = https://leetcode.com/problems/min-stack/description/


var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if(this.minStack.length === 0){
        this.minStack.push(val)
    }else{
        let min = Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[ this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[ this.stack.length - 1];
};