# Doubly Linked List

In computer science, a **doubly linked list** is a linked data structure that
consists of a set of sequentially linked records called nodes. Each node contains
two fields, called links, that are references to the previous and to the next
node in the sequence of nodes

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

The two node links allow traversal of the list in either direction. While adding
or removing a node in a doubly linked list requires changing more links than the
same operations on a singly linked list, the operations are simpler and
potentially more efficient (for nodes other than first nodes) because there
is no need to keep track of the previous node during traversal or no need
to traverse the list to find the previous node, so that its link can be modified.

## Pseudocode for Basic Operations

### Insert

```text
prepend(val)
  Pre: val is the value to add to the head of the list
  Post: val has been replaced at the head of the list
  n <- node(val)
  if head != ø
    prevHead <- n
  endIf
  head <- n
  if tail = ø
    tail <- n
  endIf
endPrepend

append(val)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else if
    n.prev = tail
    tail.next = n
    tail = n
  endif
endAppend
```

### Delete

```text
remove(head, val)
  pre: head is the head node in the list
       val is the value to remove from the list
  Post: val is removed from the list, true; otherwise false
  if head = ø
    return false
  endIf
  deletedNode <- null
  n <- head.next
  while n != ø
    if n.value = val
      deletedNode = n
      if deletedNode = head
        head = deletedNode.next
        if head != null
          head.prev <- null
        endIf
        if deletedNode = tail
          tail = null
        endIf
      else if deletedNode = tail
        tail = deletedNode.prev
        tail.next = null
      else
        deleted.prev.next = deletedNode.next
        deletedNode.next.prev = deletedNode.next.prev
      endIf
    endIf
    n <- n.next
  endWhile
endRemove
```

```text
delete(head)
  Pre: head is the node head of the link
  Post: head of the list must be deleted
  if head = ø return null
  endIf
  if(nextHead)
    head <- nextHead
    preHead <- null
  else if
    head <- null
    tail <- null
  endIf
endDelete

delete(tail)
  Pre: tail is the tail node of the link
  Post: tail of the list must be deleted
  if tail = ø return null
  endIf
  if(head = tail)
    head <- null
    tail <- null
  endIf
  deletedTail <- tail
  tail <- prevTail
  nextTail <- null
endDelete
```

### Reverse Traversal

```text
reverseTraversal(tail)
  Pre: tail is the tail node of the list to traverse
  Post: the list has been traversed in reverse order
  n ← tail
  while n = ø
    yield n.value
    n ← n.previous
  end while
endReverseTraversal
```
### Reverse

```text
reverse()
  Pre: the db linked
  Post: the list has been reversed order
  n ← head
  while n = ø
    nextNode <- n.next
    prevNode = n.prev
    n.next <- prevNode
    n.prev <- nextNde
    prevNode = n
    n = nextNode
  end while
endReverse
```

## Complexities

## Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

### Space Complexity

O(n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
