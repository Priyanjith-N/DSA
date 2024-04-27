class TrieNode{
    constructor(){
        this.children = new Map();
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode();
        this.endSymbol = '*';
    }

    popuplateSuffixTrie(word){
        for(let i = 0;i<word.length;i++){
            this.insertSubstringStartingAt(word, i);
        }
    }

    insertSubstringStartingAt(word, index){
        let currentNode = this.root;

        for(let i = index;i<word.length;i++){
            const letter = word[i];

            if(!currentNode.children.has(letter)){
                const newNode = new TrieNode();
                currentNode.children.set(letter, newNode);
            }

            currentNode = currentNode.children.get(letter);
        }

        currentNode.children.set(this.endSymbol, null);
    }

    contains(searchWord){
        let currentNode = this.root;
        for(let i = 0;i<searchWord.length;i++){
            const letter = searchWord[i];
            if(!currentNode.children.has(letter)){
                return false;
            }
            currentNode = currentNode.children.get(letter);
        }

        return currentNode.children.has(this.endSymbol);
    }
}

const trie = new Trie();

trie.popuplateSuffixTrie('shaham');
trie.popuplateSuffixTrie('shaha');
trie.popuplateSuffixTrie('shamil');

console.log(trie.contains('am'));