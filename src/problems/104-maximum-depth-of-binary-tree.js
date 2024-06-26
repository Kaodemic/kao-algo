
class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data)
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // Convert BST to JSON object
    toJSON() {
        return JSON.stringify(this.root, null, 2);
    }
}

var bst = new BinarySearchTree()


bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log("BST as JSON:");
console.log(bst.toJSON());