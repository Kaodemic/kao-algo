class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (const char of prefix) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return true;
    }
  }
  

  // Fastest solution
  class Trie {
    constructor() {
      this.dataArr = [];
    }
  
    insert(word) {
      this.dataArr.push(word);
    }
  
    search(word) {
      if (this.dataArr.find((a) => a === word)) return true;
      else return false;
    }
  
    startsWith(word) {
      if (this.dataArr.find((a) => a.startsWith(word))) return true;
      else return false;
    }
  }