in computer science, a trie also called digital tree and sometimes radis tree or prefix tree is a kind of search tree. and ordered tree data structure that is use to store a dynamic set or associateive array where the keys are usually string,  Unlike a binary search tree, no node in the tree stores the key.


String can essentially be viewed as the most important and common topic for a variety of programiing problems. String processing has a variety of real world application too, such as:

- Search engines 
- Genome Analysis
- Data analytics.

All the content presented to use in texutal from can be visualized as nothing but just strings

# Tries:
Tis are an exremely special and useful data-structure that are based on the prefix of a string. They are used to present the "Retrieval" of data and thus the name Trie.

# Prefix: what is prefix:
The prefix of string is nothing but any n letters n<=|S| that can be considered beginning stricly from the starting of a string, For Example, the word "abacaba" has the following prefixes:

a
ab
aba
abac
abaca
abacab

a trie is a spectial data strucutre uesed to store strings that can be visualized like a graph. It consist of nodes and egdes. each node consiste of at max 26 pointer are nothing but pointer for each of the 26 letter of the engilih alphaet A separate egde is mainterd for every edged.

String are stored in a top to bottom manner on the bassis of the prefix in a trie. All prefixes of legnth 1 are sotred at untill level 1, all prefixes of length 2 are sorted at until level 2 and so on.


```C
void insert(String s)
    for every char in string s
        if child node belonging to current char is null
            child new = new Node()
        current_node=child_node
```

```C
boolean check(String s)
    for every char in String s
        if child node is null
            return false
    return fasle 
```
