class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }
        curr.isWord = true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const trie = new Trie();
        for (const word of wordDict) {
            trie.addWord(word);
        }

        const res = [];
        const backtrack = (index, path) => {
            if (index === s.length) {
                res.push(path.join(" "));
                return;
            }

            let node = trie.root;
            let word = "";
            for (let i = index; i < s.length; i++) {
                const char = s[i];
                if (!node.children.has(char)) {
                    break;
                }

                word += char;
                node = node.children.get(char);

                if (node.isWord) {
                    path.push(word);
                    backtrack(i + 1, path);
                    path.pop();
                }
            }
        };

        backtrack(0, []);
        return res;
    }
}