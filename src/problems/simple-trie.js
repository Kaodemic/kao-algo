// ai-simple-trie.js please refer
class Node {
    children;
    isEndOfWord;
    constructor() {
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        return null;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    startsWith(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

}
let commands = ["Trie","insert","search","search","startsWith","insert","search"]
let input = [[],["apple"],["apple"],["app"],["app"],["app"],["app"]]

let results = []
for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
        case 'Trie':
            var trie = new Trie();
            results.push(null)
            break;
        case 'insert':
            results.push(trie.insert(input[i]))
            break;
        case 'search':
            results.push(trie.search(input[i]))
            break;
        case 'startsWith':
            results.push(trie.startsWith(input[i]))
            break;
        default:
            break;
    }
}

console.log(results)