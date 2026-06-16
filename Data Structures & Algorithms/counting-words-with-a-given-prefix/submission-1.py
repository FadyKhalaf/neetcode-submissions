class TrieNode:
    def __init__(self):
        self.children = {}
        self.count = 0
class Trie:
    def __init__(self):
        self.head = TrieNode()
    def insert(self, word: str):
        it = self.head
        for ch in word:
            if ch not in it.children:
                it.children[ch] = TrieNode()
            it = it.children[ch]
            it.count += 1
    def getPrefixCount(self, prefix: str):
        it = self.head
        for ch in prefix:
            if ch not in it.children:
                return 0
            it = it.children[ch]
        return it.count

class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:

        trie = Trie()
        for word in words:
            trie.insert(word)
        
        return trie.getPrefixCount(pref)
        