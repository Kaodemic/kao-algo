# Red–Black Tree

_Read this in other languages:_
[_Português_](README.pt-BR.md)

A **red–black tree** is a kind of self-balancing binary search
tree in computer science. Each node of the binary tree has
an extra bit, and that bit is often interpreted as the
color (red or black) of the node. These color bits are used
to ensure the tree remains approximately balanced during
insertions and deletions.

Balance is preserved by painting each node of the tree with
one of two colors in a way that satisfies certain properties,
which collectively constrain how unbalanced the tree can
become in the worst case. When the tree is modified, the
new tree is subsequently rearranged and repainted to
restore the coloring properties. The properties are
designed in such a way that this rearranging and recoloring
can be performed efficiently.

The balancing of the tree is not perfect, but it is good
enough to allow it to guarantee searching in `O(log n)` time,
where `n` is the total number of elements in the tree.
The insertion and deletion operations, along with the tree
rearrangement and recoloring, are also performed
in `O(log n)` time.

An example of a red–black tree:

![red-black tree](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

## Properties

In addition to the requirements imposed on a binary search
tree the following must be satisfied by a red–black tree:

- Each node is either red or black.
- The root is black. This rule is sometimes omitted.
  Since the root can always be changed from red to black,
  but not necessarily vice versa, this rule has little
  effect on analysis.
- All leaves (NIL) are black.
- If a node is red, then both its children are black.
- Every path from a given node to any of its descendant
  NIL nodes contains the same number of black nodes.

Some definitions: the number of black nodes from the root
to a node is the node's **black depth**; the uniform
number of black nodes in all paths from root to the leaves
is called the **black-height** of the red–black tree.

These constraints enforce a critical property of red–black
trees: _the path from the root to the farthest leaf is no more than twice as long as the path from the root to the nearest leaf_.
The result is that the tree is roughly height-balanced.
Since operations such as inserting, deleting, and finding
values require worst-case time proportional to the height
of the tree, this theoretical upper bound on the height
allows red–black trees to be efficient in the worst case,
unlike ordinary binary search trees.

## Pseudocode for Basic Operations

### ColoringNode

```text
makeNodeColor(n, color)
  Pre: n is the node of the tree
  Post: the node has been colored by color
  return node.set(color)
endMakeNodColor
```

### isNodeColor

```text
isNodeColor(n, color)
  Pre: n is the node of the tree
  Post: return whether the node has right color true; false
  return node.get(color)
endIsNodColor
```

### Insert

```text
insert(value)
 Pre: Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree, and the tree is balanced with the node colored
  
  insertedNode <- super.insert(value)

  if insertedNode = root
    makeNodeBlack(insertedNode)
  else
    makeNodeRed(insertedNode)
  endIf
  balance(insertedNode)
endInsert
```

### balance

```text
balance(n)
  Pre: n is the node of the tree
  Post: the node has been colored and balanced
  
  if n = root
    return
  endIf

  if isNodeBlack(n.parent)
    return
  endIf

  grandParent <- n.parent.parent
  
  if n.uncle && isNodeRed(n.uncle)
    makeNodeBlack(n.uncle)
    makeNodeBlack(n.parent)
    if grandParent = root
      makeNodeRed(grandParent)
    else
      return
    endIf
    balance(grandParent)
  
  elseIf !node.uncle || isNodeBlack(uncle)
    if grantParent
      newGrandParent <- null
      if grandParent.left = n.parent
        if n.parent.left = n
          newGrantParent <- rightRightRotation(grandParent)
        else 
          newGrandParent <- leftRightRotation(grandParent)
      else
        if n.parent.right = n
          newGrandParent <- leftLeftRotation(grandParent)
        else
          newGrandParent <- rightLeftRotation(grandParent)
      endIf

      if newGrandParent && newGrandParent.parent === null
        this.root <- newGrandParent
        makeNodeBlack(this.root)
      endIf
      balance(newGrandParent)
    endIf
  endIf



endBalance
```


## Balancing during insertion

### If uncle is RED

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### If uncle is BLACK

- Left Left Case (`p` is left child of `g` and `x` is left child of `p`)
- Left Right Case (`p` is left child of `g` and `x` is right child of `p`)
- Right Right Case (`p` is right child of `g` and `x` is right child of `p`)
- Right Left Case (`p` is right child of `g` and `x` is left child of `p`)

#### Left Left Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

##### RightRightRotation
Left Left Case (p is left child of g and x is left child of p)
```text
rightRightRotation(grandParentNode)
  Pre: grandParentNode is the grand parent of the node
  Post:  the node has been rotated right to right

  grandGrandParent <- grandParent.parent
  grandParentNodeIsLeft <- grandGrandParent.left = grandParent
  parentNode <- grandParentNode.left
  parentRightNode <- parentNode.right
  
  parentNode.setRight(grandParentNode)
  grandParentNode.setLeft(parentRightNode)
  if grandGrandParent
    if grandParentNodeIsLeft
      grandGrandParent.setLeft(parentNode)
    else
      grandGrandParent.setRight(parentNode);
    endIf
  else
    parentNode.parent = null;
  endIf
  swapNodeColors(parentNode, grandParentNode);
endRightRightRotation
```

#### Left Right Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png)

##### leftRightRotation
Left Right Case (p is left child of g and x is right child of p)
```text
rightLeftRotation(grandParentNode)
  Pre: grandParentNode is the grand parent of the node
  Post:  the node has been rotated right to left

  parentNode <- grandParentNode.left
  childNode <- parentNode.right
  childLeftNode <- parentNode.left
  
  childNode.setLeft(parentNode)
  parentNode.setRight(childLeftNode)
  grandParentNode.setLeft(childNode)
  return rightRightRotation(grandParentNode)
endRightRightRotation
```

#### Right Right Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)


##### LeftLeftRotation
Right Right Case (p is right child of g and x is right child of p)
```text
leftLeftRotation(grandParentNode)
  Pre: grandParentNode is the grand parent of the node
  Post:  the node has been rotated left to left

  grandGrandParent <- grandParentNode.parent
  grandParentNodeIsLeft <- grandGrandParent.left = grandParentNode

  parentNode <- grandParentNode.right
  parentLeftNode <- parentNode.left

  parentNode.setLeft(grandParentNode)
  grandParentNode.setRight(parentLeftNode)
  
  if grandGrandParent
    if grandParentNodeIsLeft
      grandGrandParent.setLeft(parentNode)
    else
      grandGrandParent.setRight(parentNode)
  else
  parentNode.parent <- null
  endIf
  swapNodeColors(parentNode, grandParentNode);
endLeftLeftRotation
```

#### Right Left Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)

##### LeftRightRotation
Right Left Case (p is right child of g and x is left child of p)

```text
leftRightRotation(grandParentNode)
  Pre: grandParentNode is the grand parent of the node
  Post:  the node has been rotated left to right

  parentNode <- grandParentNode.right
  childNode <- parentNode.left
  childRightNode <- childNode.right

  childNode.setRight(parentNode)
  parentNode.setLeft(childRightNode)
  grandParentNode.setRight(childNode)
  return leftLeftRotation
endLeftRightRotation

```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Red Black Tree Insertion by Tushar Roy (YouTube)](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
- [Red Black Tree Deletion by Tushar Roy (YouTube)](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)
- [Red Black Tree Insertion on GeeksForGeeks](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
- [Red Black Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)

update
