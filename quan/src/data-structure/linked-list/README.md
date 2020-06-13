# Linked List

In CS, a **linked list** is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element point to the next. it's a data structure consisting of a group of nodes which together represent a sequence.(in order words, linked lists consists of nodes, and each node has a value and a pointer to another node or null ) - this data structure allows for efficient insertion or removal of element form any position in the sequence during iteration.

# Pseudo code for basic operator

### insert

```text
add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n <- node(value)
  if head = ø
    head <- n
    tail <- n
  else
    tail.next <- n
    tail <- n
  end if
end  add
```

```text
prepend(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the head of the list
  n <- node(value, head)
  head <- n
  if tail = ø
    tail <- n
  end if
end prepend
```

### Search

```text
contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  n <- head 
  while n != ø && n.value != value
    n <- n.next
  end while
  if n = ø
    return false
  end if
  return true
end contains
```


### Traverse 

```text
traverse(head)
  Pre: head is the head node in the list 
  Post: the items in the list have been traversed
  n <- head
  while n != ø
    yield n . value
    n <- n.next 
  end while
end traverse

```
### Delete 

```text
delete(val)
  Pre: val is the value to be deleted
  Post: the item is either deleted in the linked list, true; otherwise false
  if head = ø
    return
  end if
  deletedNode
  while head != ø && head = val 
    deletedNode = head;
    this.head = this.head.next
  end while

  currentNode <- head

  if currentNode != ø
    while(nextCurrentNode)
      if nextCurrentNode = val
        deletedNode = nextCurrentNode
        nextCurrentNode = theNodeAfter
      else
      currentNode = nextCurrentNode
      endIf
    endWhile
  endIf 

  if tail = val
    tail <- currentNode
  endIf

end delete
```
### Find

```text
find(val)
  Pre: value is the value to search for
  Post the item is either in the linked list, item; otherwise null
  if head == ø
  return null
  endIf
  currentNode <- head
  while currentNode
    if currentNode = val
      return current Node
    enfIf
  currentNode = nextCurrentNode
  endWhile
  return null
```

### Traverse in reverse 


```text
reversedTraverse(head, tail)
  Pre: head and tail belong to the same list
  Post the items in the list have been traversed in reverse oder
  if tail != ø
    current <- tail
    while current != head 
      prev <- head
      while prev.next != current
        pre <- prev.next
      end while
      yield current.value
      current <- prev
    end while
    yield current.value
  end if
end reversedTraverse
```

## Complexities

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Space Complexity

O(n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

- [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
  The data type symbol is a primitive data ype, the symbol() returns a value of type symbol, every symbol value returned from Symbol() is unique

- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### iterator
why?
  - bring the concept if processing each if the items and provide a mechanism for customizing the behavior if for ... lop
  - the for ...of loop is able to iterate over an array because the array provides an iterator that tells the for of loop how to iterate it

What?
  - iterator is an object which defines a sequence and potentially a return value upton its termination 
iterator can be consumed by for ... of or ?
iterator can be async

```text
makeRangeIterator(start = 0, end = Infinity, step = 1)
  Pre: start is the lowest number
       end is the highest number
       step 
  Post created a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart
  nextIndex <- start
  rangeIterator <- {
    next <- function() {
      result
      if nextIndex < end
        return = {value: nextIndex, done: false}
        nextIndex += step
        iteratorCount++
        return result
      end if
    }
    return {done: true}
  }
  return rangeIterator
end makeRangeIterator
```

``` text
fibonacci()
Post created a generator of fibonacci
  fn1 <- 0
  fn2 <- 1
  while true
    current <- fn1
    fn1 <- fn2
    fn2 <- current + fn1
    yield current
```

### generator

Generator is just like a syntax sugar  that helps us to easily create iterator

Using function* syntax

Calling a generator func doesn't execute their code, instead, they return a special type of iterator, called a Generator

When a value is consumed by calling the generator's next method, the generator function executes until it encounters the yield keyword, each generator may only be iterated once


```text
makeRangeIterator(start = 0, end = Infinity, step = 1)
  Pre: start is the lowest number
       end is the highest number
       step 
  Post created a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart
  iteratorCount = 0
  while iteratorCount < end
    yield iteratorCount ++
  end while
  return rangeIterator
end makeRangeIterator
```

### iterables

An object is iterable if it defines its iteration behavior.

In order to be iterable, an object must implement the @@iterator method. This simply means that the object(or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.

- [Yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

the keyword is used to pause and resume a generator function
the yield keyword cause the call to the generator's next() method to return an IteratorResult{}

Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:

    A yield, which causes the generator to once again pause and return the generator's new value. The next time next() is called, execution resumes with the statement immediately after the yield.
    throw is used to throw an exception from the generator. This halts execution of the generator entirely, and execution resumes in the caller (as is normally the case when an exception is thrown).
    The end of the generator function is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is undefined and done is true.
    A return statement is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is the value specified by the return statement and done is true.
    If an optional value is passed to the generator's next() method, that value becomes the value returned by the generator's current yield operation.