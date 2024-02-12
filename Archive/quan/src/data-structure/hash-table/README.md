# Hash Table
 
In computing, a **hash table** (hash map) is a data 
structure which implements an *associative array* 
abstract data type, a structure that can *map keys 
to values*. A hash table uses a *hash function* to 
compute an index into an array of buckets or slots, 
from which the desired value can be found

Ideally, the hash function will assign each key to a 
unique bucket, but most hash table designs employ an 
imperfect hash function, which might cause hash 
collisions where the hash function generates the same
index for more than one key. Such collisions must be
accommodated in some way.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Hash collision resolved by separate chaining.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)
 
## Pseudocode for Basic Operations


### hash

```text
hash(key)
  Pre: key is the key of a data set
  Post: the key has been hashed to the number fit hash table size
  return (charCodeAt(key[0]) + ... + charCodeAt(key[n-1]))/ table size
endHash
```


### set

```text
set(key, val)
  keyHash <- hash(key)
  bucketLinkedList <- buckets[keyHash]
  n <- bucketLinkedList.find(n -> n.key == key)
  if node =! null
    bucketLinkedList.append({ key, value})
  else
    n.value.value = val
  endIf
endSet
```

### get
```text
get(key)
  Pre: key is the accessing of data set
  Post: value is contained is the list, value; otherwise undefined
  bucketLinkedList <- buckets[hash(key)]
  n <- bucketLinkedList.find(n => n.key = key)
  return n ? n.value.value
endGet
```

### delete
```text
delete(key)
  Pre: key is the accessing of data set
  Post: data set is deleted in the list, data set; otherwise null
  keyHash <- hash(key)
  bucketLinkedList <- buckets[hash(key)]
  n <- bucketLinkedList.find(n => n.key = key)
  if n != null
    return delete n
  else
    return null
endDelete
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
