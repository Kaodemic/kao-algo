# Tree

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),

- [AVL Tree](avl-tree)
- [Red-Black Tree](red-black-tree)
- [Segment Tree](segment-tree) - with min/max/sum range queries examples
- [Fenwick Tree](fenwick-tree) (Binary Indexed Tree)

In computer science, a **tree** is a widely used abstract data
type (ADT) — or data structure implementing this ADT—that
simulates a hierarchical tree structure, with a root value
and subtrees of children with a parent node, represented as
a set of linked nodes.

A tree data structure can be defined recursively (locally)
as a collection of nodes (starting at a root node), where
each node is a data structure consisting of a value,
together with a list of references to nodes (the "children"),
with the constraints that no reference is duplicated, and none
points to the root.

A simple unordered tree; in this diagram, the node labeled 7 has
two children, labeled 2 and 6, and one parent, labeled 2. The
root node, at the top, has no parent.

![Tree](https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg)

## Pseudocode for Basic Operations

### set Right/Left

```text
set(node) 
  Pre: node is the leaf of the tree (it can be the left or right)
  Post: the node is attached to the right or left
  if right != null
    rightParent <- null
  endIf
  right = node
  if node
    rightParent = this.
  endif
endSet
```

### removeChild

```text
removeChild(node)
  Pre:  node is the leaf to remove of the tree
  Post: node is removed from the tree, true; otherwise false
  if left && left == node
  left <- null
  return true
  endIf
  if right && right == node
  right <- null
  return true
  endIf
  return false 
endRemoveChild
```

### ReplaceChild

```text
replaceChild(nodeToReplace, replacementNode)
  Pre: nodeToReplace is the node will be replaced
       replacementNode  is the new node replace nodeToReplace
  Post: nodeToReplace will be replaced by replacementNode
  if left && left == nodeToReplace
    left <- replacementNode
  endIf
  if right && right == nodeToReplace
    right <- replacementNode
  endIf
endReplaceChild
```

### get Uncle

```text
getUncle
  Post: return the uncle is either in the tree, the uncle node; otherwise null
  if parent == null
    return null
  endIf
  if grandParent == null (parent.parent)
  return null
  endIf
  if !grandParent.left || !grandParent.right
  return null
  endIf
  if parent == grandParent.left
    return grandParent.right
  else
    return grandParent.left
  endIf
endGetUncle
```

### traverse

```text
traverse
  Pre: the binary tree 
  Post: the tree has been traversed in order
  traverse <- []
  if left
    traverse = [traverse, ...left.traverse()]
  endIf
  traverse = [traverse, value]
  if right
    traverse = [traverse, ... right.traverse()]
  endIf
endTraverse
```

## References

- [Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
- [YouTube](https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=8)
