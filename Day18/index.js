//Problem = https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

var bstFromPreorder = function(preorder) {
    let i = 0;
    const solve = function(limit){
        if(i === preorder.length || preorder[i] > limit){
            return null;
        }

        const curr = preorder[i];
        const node = new TreeNode(curr);
        i++;

        node.left = solve(curr);
        node.right = solve(limit);

        return node;
    }
    const root = solve(Number.MAX_SAFE_INTEGER);
    return root;
};