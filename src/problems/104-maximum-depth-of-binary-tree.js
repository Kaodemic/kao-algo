/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class Node {
    constructor(prev, value, left, right) {
        this.prev = prev
        this.value = value
        this.left = left
        this.right = right
    }

}
class TreeNode {
    constructor(node) {
        this.root = node;
        this.lastestPointer = undefined;
    }
    add(value) {
        let node = this.root;
        let newNode = new Node(node, value, null);
        if (node.value > value) {
            while (!node.lefl) {
                if (!node.lefl){
                    node.lefl=newNode;
                    node=node.lefl
                }else{
                    node=node.lefl
                }
            }
        }

    }

    print() {
        let node = this.root;
        while (node.right != null) {
            console.log(node)
            node = node.right;
        }

        while (node.lefl != null) {
            console.log(node)
            node = node.lefl;
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


treeNode.add(1)
treeNode.add(2)
treeNode.add(2)
treeNode.add(4)

treeNode.print()