# Heap (data-structure)

In computer science, a **heap** is a specialized tree-based 
data structure that satisfies the heap property described
below.

In a *min heap*, if `P` is a parent node of `C`, then the
key (the value) of `P` is less than or equal to the
key of `C`.

![MinHeap](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

In a *max heap*, the key of `P` is greater than or equal
to the key of `C`

![Heap](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

The node at the "top" of the heap with no parents is 
called the root node.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [YouTube](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


## Pseudocode for Basic Operations

### getLeftChildIndex

```text
getLeftChildIndex(parentIndex)
  Pre: parentIndex is the index of parent node
  Post: return the index of the left child node

  return (2 *parentIndex) + 1
endGetLeftChildIndex
```

### getRightChildIndex

```text
getRightChildIndex(parentIndex)
  Pre: parentIndex is the index of parent node
  Post: return the index of the right child node

  return (2 *parentIndex) + 2
endGetRightChildIndex
```

### getParentIndex

```text
getParentIndex(childIndex)
  Pre: childIndex is the index of the child node
  Post: return the index of the parent node

  return floor((childIndex - 1)/2)

endGetParentIndex
```

### swap

```
swap(indexOne, indexTwo)
  Pre: indexOne, indexTwo are the index must be swapped
  Post: indexOne, indexTwo are the index has been swapped

  [indexOne, indexTwo] = [indexTwo, indexOne]
endSwap
```
### Add

```text
add(item)
  Pre: item is the item to add to the heap
  Post: the has been added to the end of the heap and corrected by lift it up until it is in the correct order with respect to its parent element.

  heapContainer.push
  heapifyUp
endAdd
```

### heapifyUp

```text
heapifyUp(customStartIndex)
  Pre: customStartIndex is the index of the node from lift up by default is the bottom left of the tree
  Post: the heap will be corrected order
  currentIndex <- customStartIndex || heapContainer.length - 1
  while hasParent(currentIndex) && pairIsInCorrectOrder(parent(currentIndex), heapContainer(currentIndex))
    parentIndex <- getParentIndex(currentIndex)
    swap(parentIndex, currentIndex)
    currentIndex <- parentIndex
  endWhile
```

### heapifyDown

```text
heapifyDown(customStartIndex)
  Pre: customStartIndex is the index of the node to lifting down by default is the root of the tree
  Post: the heap will be corrected order
  currentIndex <- customStartIndex || 0
  while hasLeftChild(currentIndex)
    if hasRightChild(currentIndex) && pairIsInCorrectOrder(rightChild, leftChild)
      nextIndex <- rightChildIndex
    else
      nextIndex <- leftChildIndex
    endIf

    if(!pairIsInCorrectOrder(currentIndex, nextIndex))
      break
    endIf
    swap(currentIndex, nextIndex)
    currentIndex <- nextIndex
  endWhile
endHeapifyDown
```

### Remove

```text
remove(item)
  Pre: item is the item have to deleted
  Post: the item has been removed from the heap

  numberOfItemsToRemove <- findIndex(item).length
  for(let iteration =0; iteration < numberOfItemsToRemove; iteration++) 
    indexToRemove <- findIndex(item).pop()
    if indexToRemove = heapContainer.length -1
      heapContainer.pop()
    else
      heapContainer[indexToRemove] <- heapContainer.pop()
      if hasLeftChild(indexToRemove) && !parentItem || pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
        heapifyDown(indexToRemove)
      else
        heapifyUp(indexToRemove)
      endIf
    endIf
  endFor
endRemove
```
