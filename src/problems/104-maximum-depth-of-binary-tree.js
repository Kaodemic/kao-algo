
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
        const newNode = new Node(data)
        if (this.root === null) {
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
                this.insertNode(node.left, newNode)
            }
        }
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

};

var root = new Node(null, 2, null, null)
var treeNode = new TreeNode(root)


treeNode.insert(1)
treeNode.insert(2)
treeNode.insert(2)
treeNode.insert(4)

treeNode.print()