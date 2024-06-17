//************* */
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