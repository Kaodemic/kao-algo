import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../utils/comparator/Comparator';


export default class BinarySearchTreeNode extends BinaryTreeNode {
    /**
     * @param {*} [value] - node value.
     * @param {function} [compareFunction] - comparator function for node values.
     */

    constructor(value = null, compareFunction = undefined) {
        super(value)

        // This comparator is used to compare node values with each other
        this.compareFunction = compareFunction
        this.nodevalueComparator = new Comparator(compareFunction)
    }


    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    insert(value) {
        if (this.nodevalueComparator.equal(this.value, null)) {
            this.value = value
            return this
        }

        if (this.nodevalueComparator.lessThan(value, this.value)) {
            if (this.left) {
                return this.left.insert(value)
            }

            const newNode = new BinarySearchTreeNode(value, this.compareFunction)
            this.setLeft(newNode)

            return newNode
        }

        if (this.nodevalueComparator.greaterThan(value, this, value)) {
            if (this.right) {
                return this.right.insert(value)
            }

            const newNode = new BinarySearchTreeNode(value, this.compareFunction)
            this.right.insert(newNode)

            return newNode
        }

        return this
    }

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */

    find(value) {
        // check the root
        if (this.nodevalueComparator.equal(this.value, value)) {
            return this
        }

        if (this.nodevalueComparator.lessThan(value, this.value) && this.left) {

            // Check if left Nodes.
            return this.left.find(value)
        }

        if (this.nodevalueComparator.greaterThan(value, this.value) && this.right) {
            return this.right.find(value)
        }

        return null
    }

    /**
     * @param {*} value
     * @return {boolean}
     */

    contains(value) {
        return !!this.find(value)
    }

    /**
     * 
     * @return {BinanrySearchTreeNode}  
     */
    findMin() {
        if (!this.left) {
            return this
        }
        return this.left.findMin()
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    remove(value) {
        const nodeToRemove = this.find(value);

        if (!nodeToRemove) {
            throw new Error("Item not found in the tree")
        }

        const { parent } = nodeToRemove;

        if (!nodeToRemove.left && !nodeToRemove.right) {
            // Node is a leaf an thus has no children
            if (parent) {
                // Node has parent. Just remove the pointer to this node from the parent
                parent.removeChild(nodeToRemove)
            } else {
                nodeToRemove.setValue(undefined)
            }
        } else if (nodeToRemove.left && nodeToRemove.right) {
            // Node has two children
            // Find the next biggest value (minimum value in the right branch)
            // and replace current value node with that next biggest value.
            const nextBiggerNode = nodeToRemove.right.findMin()
            if (!this.nodevalueComparator.equal(nextBiggerNode, nodeToRemove.right)) {
                this.remove(nextBiggerNode.value)
                nodeToRemove.setValue(nextBiggerNode.value)
            } else {
                // In case if next right value is the next bigger one and it doesn't have left child
                // then just replace node that is going to be deleted with the right node.
                nodeToRemove.setValue(nodeToRemove.right.value);
                nodeToRemove.setRight(nodeToRemove.right.right);
            }
        } else {
            // Node has only one child.
            // Make this child to be a direct child of current node's parent.
            /** @var BinarySearchTreeNode */
            const childNode = nodeToRemove.left || nodeToRemove.right;

            if (parent) {
                parent.replaceChild(nodeToRemove, childNode);
            } else {
                BinaryTreeNode.copyNode(childNode, nodeToRemove);
            }
        }

        // Clear the parent of removed node.
        nodeToRemove.parent = null

        return true
    }

}



