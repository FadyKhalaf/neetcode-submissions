class TrieNode {
    public int value;
    public TrieNode[] children;
    public boolean isWord;

    public TrieNode(int value) {
        this.value = value;
        children = new TrieNode[26];
        isWord = false;
    } 
}

class PrefixTree {

    TrieNode head;

    public PrefixTree() {
        head = new TrieNode(-1);
    }

    public void insert(String word) {
        TrieNode it = head;
        for(var ch: word.toCharArray()) {
            if (it.children[ch - 'a'] == null) 
                it.children[ch - 'a'] = new TrieNode(ch);
            it = it.children[ch - 'a'];
        }
        it.isWord = true;
    }

    public boolean search(String word) {
        TrieNode it = this.searchHelper(word);
        return Objects.nonNull(it) && it.isWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode it = this.searchHelper(prefix);
        return Objects.nonNull(it);
    }

    private TrieNode searchHelper(String prefix) {
        TrieNode it = head;
        for(var ch: prefix.toCharArray()) {
            if (it.children[ch - 'a'] == null) {
                return null;
            }
            it = it.children[ch - 'a'];
        }
        return it;
    }
}
