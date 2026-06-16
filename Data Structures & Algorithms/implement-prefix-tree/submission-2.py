class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

class PrefixTree:

    def __init__(self):
        self.head = TrieNode()

    def insert(self, word: str) -> None:
        it = self.head
        for ch in word:
            if ch not in it.children:
                it.children[ch] = TrieNode()
            it = it.children[ch]
        it.isWord = True

    def contains(self, word):
        it = self.head
        for ch in word:
            if ch not in it.children:
                return False, None
            it = it.children[ch]

        return True, it

    def search(self, word: str) -> bool:
        startsWith, it = self.contains(word)
        return startsWith and it.isWord

    def startsWith(self, prefix: str) -> bool:
        startsWith, _ = self.contains(prefix)
        return startsWith
        
        