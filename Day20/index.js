//Problem = https://leetcode.com/problems/diameter-of-binary-tree/description/

var diameterOfBinaryTree = function(root) {
    this.diameter = 0;
    function getHeight(currentNode){
        if(!currentNode) return 0;

        let left = getHeight(currentNode.left);
        let right = getHeight(currentNode.right);

        this.diameter = Math.max(this.diameter, left+right);
        return 1 + Math.max(left,right)
    }
    getHeight(root);
    return this.diameter;
};