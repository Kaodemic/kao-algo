import RedBlackTree from "../red-black-tree";

describe('RedBlackTree', () => {
    it('shoud always color first insert node as black', () => {
        const tree = new RedBlackTree();

        const firstInsertdNode = tree.insert(10);

        expect(tree.isNodeColored(firstInsertdNode)).toBe(true);
        expect(tree.isNodeBlack(firstInsertdNode)).toBe(true);
        expect(tree.isNodeRed(firstInsertdNode)).toBe(false)

        expect(tree.toString()).toBe('10')
        expect(tree.root.height).toBe(0)
    })

    it('should always color new left node as red', () => {
        const tree = new RedBlackTree();

        const _1stInsertNode = tree.insert(10)
        const _2ndInsertNode = tree.insert(15)
        const _3rdInsertNode = tree.insert(5)

        expect(tree.isNodeBlack(_1stInsertNode)).toBe(true)
        expect(tree.isNodeRed(_2ndInsertNode) && tree.isNodeRed(_3rdInsertNode)).toBe(true)

        expect(tree.toString()).toBe('5,10,15')
        expect(tree.root.height).toBe(1)
    })

    it('it should balance itself when parent is black', () => {
        const tree = new RedBlackTree();

        const node1 = tree.insert(10)

        expect(tree.isNodeBlack(node1)).toBe(true)

        const node2 = tree.insert(-10)
        expect(tree.isNodeRed(node2)).toBe(true)
        expect(tree.isNodeBlack(node1)).toBe(true)

        const node3 = tree.insert(20)
        expect(tree.isNodeRed(node2)).toBe(true)
        expect(tree.isNodeRed(node3)).toBe(true)
        expect(tree.isNodeBlack(node1)).toBe(true)

        console.log('getRotateMethodHistory', tree.getRotateMethodHistory())

        const node4 = tree.insert(-20)
        expect(tree.isNodeRed(node2)).toBe(true)
        expect(tree.isNodeRed(node3)).toBe(true)
        expect(tree.isNodeBlack(node1)).toBe(true)
        expect(tree.isNodeRed(node4)).toBe(true);
        console.log('getRotateMethodHistory', tree.getRotateMethodHistory())


    })
})
