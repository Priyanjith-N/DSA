class TrieNode{
   constructor(){
    this.children = new Map();
   }
}

class Trie{
    constructor(str){
        this.root = new TrieNode();
        this.endSymbol = '*';
        this.popuplateSuffixTrie(str);
    }

    popuplateSuffixTrie(str){
        for(let i = 0;i<str.length;i++){
            this.insertSubstringStartingAt(i, str);
        }
    }

    insertSubstringStartingAt(index, str){
        let node = this.root;
        for(let i = index;i<str.length;i++){
            const letter = str[i];
            if(!node.children.has(letter)){
                const newNode = new TrieNode();
                node.children.set(letter, newNode);
            }

            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }

    contains(str){
        let node = this.root;
        for(let i = 0;i<str.length;i++){
            const letter = str[i];
            if(!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
}

const trie = new Trie("mannan");

console.log(trie.contains('nan'));