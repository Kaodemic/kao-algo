
var Trie = function () {

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = {}
function insertToTrie (str) {
   return str.split('').reduce((acc, char, index, array) => {
        if (!acc[char]) {
            acc[char] = index === array.length - 1 ? null : {};
            return acc[char];
        } 
    }, trie);
}


insertToTrie('and')
console.log('trie', trie)
// insertToTrie('ant')

console.log('stringToNestedObject',trie);

function findStringInObject(obj, target) {
    function search(currentObj, currentStr) {
        if (currentStr === target) {
            return true;
        }
        if (currentObj === null || typeof currentObj !== 'object') {
            return false;
        }
        for (const key in currentObj) {
            if (search(currentObj[key], currentStr + key)) {
                return true;
            }
        }
        return false;
    }
    return search(obj, '');
}



// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]


class Node {
    constructor(value, next){
        this.value=value;
        this.next= next;
    }

    getValue(){
        return this.value;
    }
    getNextNode(){
        this.next;
    }
} 


class Trie {
    constructor(){
        
    }

    insert(string){
        //split out the string to character
        //iterate through the trie as each node
        while(!node.next){
            const node = new Node(string);
            node.next=node;
        }
    }
    search(value){
        while(node.next){
            console.log(node.value);
            if(node.value === value){
                return node.value
            }
            this.search(node)
        }
    }
    getCurrentPointer(node){
        return node.next;
    }

}

