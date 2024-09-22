//Problem = https://leetcode.com/problems/binary-tree-level-order-traversal

var levelOrder = function(root) {
    if(root === null) return [];
 
    let res = [];
    let queue = [root];
 
    while(queue.length){
     let level = [];
     let levelsize = queue.length;
     while(levelsize){
         let current = queue.shift();
         if(current.left) queue.push(current.left);
         if(current.right) queue.push(current.right);
 
         level.push(current.val);
         levelsize--;
     }
     res.push(level)
    }
    return res
 };