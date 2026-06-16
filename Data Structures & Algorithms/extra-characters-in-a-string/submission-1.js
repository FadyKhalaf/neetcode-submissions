class TrieNode {
    constructor() {
        this.children = {};
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
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.isWord = true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const trie = new Trie();
        for (const word of dictionary) {
            trie.addWord(word);
        }

        const dp = Array(s.length + 1).fill(-1);

        const dfs = (i) => {
            if (i === s.length) return 0;
            if (dp[i] !== -1) return dp[i];

            let res = 1 + dfs(i + 1);
            let curr = trie.root;

            for (let j = i; j < s.length; j++) {
                if (!curr.children[s[j]]) break;
                curr = curr.children[s[j]];
                if (curr.isWord) {
                    res = Math.min(res, dfs(j + 1));
                }
            }

            dp[i] = res;
            return res;
        };

        return dfs(0);
    }
}