# AVL Tree

_Read this in other languages:_
[_Português_](README.pt-BR.md)

In computer science, an **AVL tree** (named after inventors 
Adelson-Velsky and Landis) is a self-balancing binary search 
tree. It was the first such data structure to be invented. 
In an AVL tree, the heights of the two child subtrees of any
node differ by at most one; if at any time they differ by 
more than one, rebalancing is done to restore this property.
Lookup, insertion, and deletion all take `O(log n)` time in 
both the average and worst cases, where n is the number of 
nodes in the tree prior to the operation. Insertions and 
deletions may require the tree to be rebalanced by one or 
more tree rotations.

Animation showing the insertion of several elements into an AVL 
tree. It includes left, right, left-right and right-left rotations.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

AVL tree with balance factors (green)

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)



## Pseudocode for Basic Operations

### Insert

```text
insert(value)
 Pre: Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree, and the tree is balanced
  super.insert(value)
  n <- find(value)
  while(n)
  balance(n)
  n <- n.parent
  endWhile  
endInsert
```

### balance

```text
balance(n)
  Pre: n is the node of the tree
  Post: the node has been balanced
  if n.balanceFactor > 1 

    if n.left.balanceFactor > 0
      rotateRightRight
    else if  n.left.balanceFactor < 0
      rotateLeftRight
    endIf

  else if n.balanceFactor < -1
  
    if n.right.balanceFactor < 0
      rotateLeftLeft
    else if n.right.balanceFactor > 0
      rotateLeftRight
    endIf

  endIf
endBalance
```


### getSideHeight

```text
sideHeight(n)
  Pre: n is the node of the tree
  Post: return the side height of the node
  if side = null
    return 0
  endIf
  return side.height + 1
endSideHeight
```

### balanceFactor

```text
getBalanceFactor
  Pre: the node of the tree
  Post: return whether the node is balance: > 0 (heavy left), < 0 (heavy right)
  return leftHeight - rightHeight
endGetBalanceFactor
```


### AVL Tree Rotations


**Left-Left Rotation**

![Left-Left Rotation](http://btechsmartclass.com/data_structures/ds_images/LL%20Rotation.png)

```text
rotateLeftLeft(n)
  Pre: n is the node of the tree
  Post: the node has been rotated right to right
  
  rightNode <- n.right
  
  if n.parent
    n.parent.setRight(rightNode)
  elseIf n = root
    root <- rightNode
  endIf
  
  if rightNode.left
    n.setRight(rightNode.left)
  endIf
  rightNode.setLeft(n)
endRotateLeftLeft
```


```

**Right-Right Rotation**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RR%20Rotation.png)


```text
rotateRightRight(n)
  Pre: n is the node of the tree
  Post: the node has been rotated left to left

  leftNode <- n.left
  n.setLeft(null)
  if n.parent
    n.parent.serLeft(leftNode)
  elseIf n = root
    root <- leftNode
  endIf

  if leftNode.right
    n.setLeft(leftNode.right)
  endIf

  leftNode.setRight(n)
endRotateRightRight

**Left-Right Rotation**

![Left-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/LR%20Rotation.png)


```text
rotateLeftRight(n)
  Pre: n is the node of the tree
  Post: the nod has been rotated left to right
  leftNode <- n.left
  n.setLeft(null)
  leftRightNode <- leftNode.right
  
  if leftRightNode.left
    leftNode.setRight(leftRightNode.left)
    leftRightNode.setLeft(null)
  endIf

  n.setLeft(leftRightNode)
  leftRightNode.setLeft(leftNode)
  rotateRightRight(n)
endRotateLeftRight
```

**Right-Left Rotation**

![Right-Left Rotation](http://btechsmartclass.com/data_structures/ds_images/RL%20Rotation.png)


```text
rotateRightLeft(n)
  Pre: n is the node of the tree
  Post: the nod has been rotated right to left
  
  rightNode <- n.right
  n.setRight(null)
  rightLeftNode <- rightNode.left
  rightNode.setLeft(null)

  if(rightLeftNode.right)
    rightNode.setLeft(rightLeftNode.right)
    rightLeftNode.setRight(null)
  endIf

  n.setRight(rightLeftNode)
  rightLeftNode.setRight(rightNode)
  rotateLeftLeft(n)
endRotateRightLeft
```
## References

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
