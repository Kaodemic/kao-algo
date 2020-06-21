import BinarySearchTree from "../binary-search-tree/binary-search-tree";
import BinaryTreeNode from "../BinaryTreeNode";

// Possible color of read-black tree nodes.
const RED_BLACK_TREE_COLORS = {
    red: 'red',
    black: 'black'
}

// Color property name in meta information of the nodes.
const COLOR_PROP_NAME = ' color'

export default class RedBlackTree extends BinarySearchTree {

    constructor(rotateMethod = null) {
        super();
        this.rotateMethodHistory = []
        this.rotateMethod = rotateMethod
    }

    getRotateMethodHistory() {
        return this.rotateMethodHistory;
    }

    setRotateMethodHistory(rotateMethod) {
        this.rotateMethodHistory.push(rotateMethod);
    }


    getRotateMethod() {
        return this.rotateMethod;
    }

    setRotateMethod(rotateMethod) {
        console.info('setRotateMethod', rotateMethod)
        this.setRotateMethodHistory(rotateMethod);
        this.rotateMethod = rotateMethod;
    }

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
        if (this.isNodeBlack(node.parent)) {
            return
        }

        const grandParent = node.parent.parent

        //         [grand]
        // [uncle]:red          [parent]:red
        //                            [Node]

        if (node.uncle && this.isNodeRed(node.uncle)) {
            // If node has red uncle then we need todo RECOLORING

            // Recolor parent and uncle to black
            //                      [grand]
            // [uncle]:red->black             [parent]:red->black
            //                                      [Node]   
            this.makeNodeBlack(node.uncle)
            this.makeNodeBlack(node.parent)

            if (!this.nodeComparator.equal(grandParent, this.root)) {
                // Recolor parent and uncle to black
                //                      [grand] != ROOT => :red
                // [uncle]:red->black             [parent]:red->black
                //  
                this.makeNodeBlack(node.parent)
            } else {
                // if grand-parent is black root don't do anything 
                // Since root already has two black silbling that we've just recolored
                return;
            }

            // Now do further cheking for recolred grand-parent
            this.balance(grandParent)
        } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
            //if node uncle is black or absent then we need to do ROTATIONS

            if (grandParent) {
                // Grand parent that we will revices after rotation
                let newGrandParent;

                if (this.nodeComparator.equal(grandParent.left, node.parent)) {
                    // Left case.
                    if (this.nodeComparator.equal(node.parent.left, node)) {
                        // Left-left case.
                        newGrandParent = this.leftLeftRotation(grandParent)
                    } else {
                        // Lelf right case.
                        newGrandParent = this.leftRightRotation(grandParent)
                    }
                } else {
                    if (this.nodeComparator.equal(node.parent.right, node)) {
                        // Right-right case.
                        newGrandParent = this.rightRightRotation(grandParent)
                    } else {
                        newGrandParent = this.rightLeftRotation(grandParent)
                    }
                }


                // Set newGrandParent as a root if it dosn't have parent.
                if (newGrandParent && newGrandParent.parent == null) {
                    this.root = newGrandParent

                    //Recolor root in black
                    this.makeNodeBlack(newGrandParent)
                }

                // Check if new grand parent don't violate red-black-tree rules.
                this.balance(newGrandParent)
            }
        }
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
        this.setRotateMethod("leftLeftRotation")
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
     * Right Right Case (p is right child of g and x is right child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    rightRightRotation(grandParentNode) {
        this.setRotateMethod("rightRightRotation")
        // Memorize the parent of grand-parent node.
        const grandGrandParent = grandParentNode.parent;

        // Check what type of sibling is our grandParentNode is (left or right).
        let grandParentNodeIsLeft;
        if (grandGrandParent) {
            grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
        }

        // Memorize grandParentNode's right node.
        const parentNode = grandParentNode.right;

        // Memorize parent's left node since we're going to transfer it to
        // grand parent's right subtree.
        const parentLeftNode = parentNode.left;

        // Make grandParentNode to be left child of parentNode.
        parentNode.setLeft(grandParentNode);

        // Transfer all left nodes from parent to right sub-tree of grandparent.
        grandParentNode.setRight(parentLeftNode);

        // Put parentNode node in place of grandParentNode.
        if (grandGrandParent) {
            if (grandParentNodeIsLeft) {
                grandGrandParent.setLeft(parentNode);
            } else {
                grandGrandParent.setRight(parentNode);
            }
        } else {
            // Make parent node a root.
            parentNode.parent = null;
        }

        // Swap colors of granParent and parent nodes.
        this.swapNodeColors(parentNode, grandParentNode);

        // Return new root node.
        return parentNode;
    }

    /**
     * Right Left Case (p is right child of g and x is left child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    rightLeftRotation(grandParentNode) {
        this.setRotateMethod("rightLeftRotation")
        // Memorize right and right-left nodes.
        const parentNode = grandParentNode.right;
        const childNode = parentNode.left;

        // We need to memorize child right node to prevent losing
        // right child subtree. Later it will be re-assigned to
        // parent's left sub-tree.
        const childRightNode = childNode.right;

        // Make parentNode to be a right child of childNode.
        childNode.setRight(parentNode);

        // Move child's right subtree to parent's left subtree.
        parentNode.setLeft(childRightNode);

        // Put childNode node in place of parentNode.
        grandParentNode.setRight(childNode);

        // Now we're ready to do right-right rotation.
        return this.rightRightRotation(grandParentNode);
    }

    /**
     * Left Right Case (p is left child of g and x is right child of p)
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
    * @return {BinarySearchTreeNode}
    */
    leftRightRotation(grandParentNode) {
        //LOG
        this.setRotateMethod("leftRightRotation")
        // Memorize left and left-right nodes.
        const parentNode = grandParentNode.left;
        const childNode = parentNode.right;

        // We need to memorize child left node to prevent losing
        // left child subtree. Later it will be re-assigned to
        // parent's right sub-tree.
        const childLeftNode = childNode.left;

        // Make parentNode to be a left child of childNode node.
        childNode.setLeft(parentNode);

        // Move child's left subtree to parent's right subtree.
        parentNode.setRight(childLeftNode);

        // Put left-right node in place of left node.
        grandParentNode.setLeft(childNode);

        // Now we're ready to do left-left rotation.
        return this.leftLeftRotation(grandParentNode);
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
