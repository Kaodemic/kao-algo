# Binary search tree 


In computer scientce BST somtimes called ordered or sorted binary trees, are a particular type of container: data structure that store "items" (such as numbers, names etc) in memory. they allow fast lookup, addition and removal of items, cand can be used to implement either dynamic sets of item, or lookup tables that allow finding an item by its keys(e.g..) finding the phone number of person by name).

Binary search trees keep their keys in stored order, so that lookup an other operations can use the principple of binary search: when looking for a key in a tree(or a place to insert a new key), they travese the tree from root to leaf, making ocmparations to keys stored in the nodes of tree and deciding, on the basis of comparision, to continue searching in the left to right sub-tree. On average this means that each comparison allow the operations skip about half of the tree, so that each lookup insertion or delete takes time propotional to the logarithm of the number of items stored in the tree. This is much better the linear time required to find items by key in an (unsorted) array, bu slower than the corresponding on hash tables.

A binary search tree of size 9 and depth 3, with 8 at the root. The leaves are not drawn.

Binary Search Tree

Pesudocode fo basic Operation
======================

### Insertion
```
insert(value)  
    Pre: value has passed custom type checks for type T
    Post: value has been placed in the correct location in the tree

    if root =  ø
        root ← node(value)
    else
        insertNode(root, value)
    endif
end insert
```
```
insertNode(current, value)
    Pre: current is the node to start from
    Post: value has been placed in the correct location in the tree
    if value < current.value
        if current.left =  ø
            current.left ← node(value)
        else
            InsertNode(current.left, value)
        end if
    else 
        if current.right = ø
            current.right ← node(value)
        else
            InsertNode(current.right, value)
        end if
    end if
end insertNode
````
### Searching 
```
    contains(root, value)
        Pre: root it the root of the tree, value is what we would like to locate
        Post: value is either located or not
        if root = null
            return false
        end if
        if root.value = value
            return true
        else if value < root.value
            return contains(root.left, value)
        else 
            return contains(root.right, value)
        end if
    end contains
```

### Deletion
```
remove(value)
    Pre: value is the value of the node to remove, root is the node of BST ocut is the number of items in the BST
    Post: node with value is removed if found in which case yield true, otherwise false nodeToRemove <- findNode(value)

    if nodeToRemove = NULL
        return false
    end if
    parent <- findParent(value)
    if count = 1
    else if nodeToremove.lelf = NULL and nodeToRemove.right = NULL
```

### Find parent node Node
```
findParent(value, root)
    Pre: value is the value of the node we want to find the parent of root is the root node of the BST is !=null
    Post: a reference to the parent node of value if found; otherwise != null

    if value = root.value
        return null
    end if
    if value < root.value
        return null
    else if root.left.value = value
        return root
        else 
            return findParent(value, root.left)
        end if
    else 
        if root.right = null
            return null
        else if root.right.value = value
            return root
        else 
            return findParent(value, root.right)
        end if 
    end if
end findParent        
```

### Find node
```
findNode(root, value)
      Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
      Post: a reference to the node of value if found; otherwise ø
    
    if root = null
     reutnr null
    end if 
        if root.value = value
        return root
    else if value < root.value
        return findNode(root.left, value)
      else
    return findNode(root.right, value)
  end if
end findNode
```

### Find minimum 
```
findMin(root)
    Pre: root is the root node of the BST
    root = ø
    Post: the smallest value in the BST is located

    if root.left = null
        return root.value
    end if
        findMin(root.left)
end findMin
```

### Find max
```
findMax(root)
    if root.right = null
        return root.value
    end if 
        findMax(root.right)
end findMax
```

### Traversal 
#### In Order Traversal
```
inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root = ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

```
preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root = ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

```
postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root = ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```
    


