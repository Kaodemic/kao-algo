class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (current) {
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    // In-order traversal (left-root-right)
    inOrderTraversal(root = this.root) {
        if (root) {
            this.inOrderTraversal(root.left);
            console.log(root.val);
            this.inOrderTraversal(root.right);
        }
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst)
console.log("In-order traversal:");
bst.inOrderTraversal(); // Output: 2 3 4 5 6 7 8
