class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function* inOrderTraversal(root) {
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        yield current.val;
        current = current.right;
    }
}

// Example usage:
const bst = new TreeNode(5);
bst.left = new TreeNode(3);
bst.right = new TreeNode(7);
bst.left.left = new TreeNode(2);
bst.left.right = new TreeNode(4);
bst.right.left = new TreeNode(6);
bst.right.right = new TreeNode(8);

console.log("In-order traversal without recursion:");
console.log(...inOrderTraversal(bst)); // Output: 2 3 4 5 6 7 8
