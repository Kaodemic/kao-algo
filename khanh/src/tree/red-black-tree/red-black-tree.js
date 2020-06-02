import BinarySearchTree from "../binary-search-tree/binary-search-tree";
import BinaryTreeNode from "../BinaryTreeNode";

// Possible color of read-black tree nodes.
const RED_BLACK_TREE_COLORS = {
    red: 'red',
    black: 'black'
}

// Color property name in meta information of the nodes.
const COLOR_PROP_NAME = ' color'

export default class RedBlackTree extends BinaryTreeNode {

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    insert(value) {
        const insertedNode = super.insert(value);

        if (this.nodeComparator.equal(insertedNode, this.root)) {
            // Make root alway be black
            this.makeNodeBlack(insertedNode)
        } else {
            // make all newly inserted nodes to be red
            this.makeNodeRed(insertedNode)
        }

        this.balance(insertedNode)

        return insertedNode
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    remove(value) {
        throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
    }

    /** 
     * @param {BinarySearchTreeNode} node
     */
    balance(node) {
        // If it is a root node then nothing to blance here
        if (this.nodeComparator.equal(node, this.root)) {
            return;
        }

        // if the parent is black then done, nothing to balance here.
        if (this.isNodeBlack(node.parent)) { }
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */
    makeNodeRed(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

        return node;
    }


    /**
      * Left Left Case (p is left child of g and x is left child of p)
      * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
      * @return {BinarySearchTreeNode}
      */
    leftLeftRotation(grandParentNode) {
        // Memorize the parent of grand-parent node.
        const grandGrandParent = grandParentNode.parent

        // Check what type of sibling is our grandParentNode is (left or right)
        let grandParentNodeIsLeft;
        if (grandGrandParent) {
            grandParentNodeIsLeft = this.nodeComparator.equal(grandParentNode.left, grandParentNode)
        }

        // Memorize grandParentNode's left node
        const parentNode = grandParentNode.left

        // Memorize parent's right node since we're going to transfer it to
        // grand parent's left subtree.
        const parentRightNode = parentNode.right;

        // Make grandParentNode to be right child of parentNode.
        parentNode.setRight(grandParentNode);

        // Move child's right subtreee to grandParentNode's left substree
        grandParentNode.setLeft(parentRightNode);

        // Put parentNode node in place of grandParentNode
        if (grandGrandParent) {
            if (grandParentNodeIsLeft) {
                grandGrandParent.setLeft(parentNode);
            } else {
                grandGrandParent.setRight(parentNode);
            }
        } else {
            // Make parent node a root
            parentNode.parent = null;
        }
        // Swap colors of granParent and parent nodes.
        this.swapNodeColors(parentNode, grandParentNode);

        // Return new root node.
        return parentNode;
    }


    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */
    makeNodeBlack(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

        return node;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeColored(node) {
        return this.isNodeRed(node) || this.isNodeBlack(node);
    }
    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeBlack(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeRed(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} firstNode
     * @param {BinarySearchTreeNode|BinaryTreeNode} secondNode
     */
    swapNodeColors(firstNode, secondNode) {
        const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
        const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

        firstNode.meta.set(COLOR_PROP_NAME, secondColor);
        secondNode.meta.set(COLOR_PROP_NAME, firstColor);
    }

}
