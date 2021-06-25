// Lowest Common Ancestor Of A Binary Tree | Javascript Solution

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

const LCA = (root,p,q) => {
    if (!root || root ===p || root ===q){
        return root;
    }

    const left = LCA(root.left,p,q);
    const right = LCA(root.right,p,q);

    if (left && right){
        return root;
    }
    return left ? left : right;
}