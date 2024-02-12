# Stack

In computer science, a **stack** is an abstract data type that serves 
as a collection of elements, with two principal operations:

* **push**, which adds an element to the collection, and
* **pop**, which removes the most recently added element.

The order in which elements come off a stack gives rise to its 
alternative name, LIFO (last in, first out). Additionally, a 
peek operation may give access to the top without modifying 
the stack. The name "stack" for this type of structure comes 
from the analogy to a set of physical items stacked on top of 
each other, which makes it easy to take an item off the top 
of the stack, while getting to an item deeper in the stack 
may require taking off multiple other items first.

Simple representation of a stack runtime with push and pop operations.


## Pseudocode for Basic Operations

### Push

```text
prepend(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the head of the list
  n <- node(value, head)
  head <- n
  if tail = ø
    tail <- n
  end if
endPrepend
```

### Pop

```text
pop(head)
  Pre: the is the head node in the list
endPop
```

### Check empty

```text
isEmpty
  Pre: the stack
  Post: the stack is empty, true; otherwise false
  return !head
endIsEmpty
```

### Peek

```text
peek(head)
  Pre: head is the first node in the stack
  post: return the head of the stack
  if isEmpty()
    return null
  else
    return head
  endIf
endPeek
```

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)
