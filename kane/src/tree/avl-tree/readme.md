In computer science, an AVL tree (named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree. It was the first such data structure to be invented. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property. Lookup, insertion, and deletion all take O(log n) time in both the average and worst cases, where n is the number of nodes in the tree prior to the operation. Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.

Animation showing the insertion of several elements into an AVL tree. It includes left, right, left-right and right-left rotations.


AVL tree are itended for in-memory use, where random access is relatively cheap. B-trees are better suited for disk-backed storage, because they group a larger number of keys into each node to minimize the number of seeks required by a read or write operation This is why B-trees are often used in file systems and databases, such as SQLite.

Both the AVL tree and the B-tree are similar in that they are data structures that, through their requirements, cause the height of their respective trees to be minimized. This "shortness" allows searching to be performed in O(log n) time, because the largest possible number of reads corresponds to the height of the tree.
```

    5
   / \
  3   7
 /   / \
1   6   9
```
This is an AVL tree, and is a binary search tree at its core. However, it is self-balancing, which means that as you add elements to the tree, it will restructure itself to maintain as uniform of a height as it can. Basically, it will not allow long branches.

A B-tree also does this, but through a different re-balancing scheme. It's a little too complicated to write out, but if you Google search "B-tree animation" there are some really good applets out there that explain a B-tree pretty well.

They are different in that an AVL tree is implemented with memory-based solutions in mind, while a B-tree is implemented with disk-based solutions in mind. AVL trees are not designed to hold massive collections of data, as they use dynamic memory allocation and pointers to the next block of memory. Obviously, we could replicate the AVL tree's functionality with disk locations and disk pointers, but it would be much slower because we would still have a significant number of reads to read a tree of a very large size.

When the data collection is so large that it doesn't fit in memory, the solution is a B-tree (interesting factoid: there is no consensus on what the "B" actually stands for). A B-tree holds many children at one node and many pointers to children node. This way, during a disk read (which can take around 10 ms to read a single disk block), the maximum amount of relevant node data is returned, as well as pointers to "leaf node" disk blocks. This allows retrieval time of data to be amortized to log(n) time, making the B-tree especially useful for database and large dataset retrieval implementations.
