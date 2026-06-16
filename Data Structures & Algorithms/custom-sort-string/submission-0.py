class Solution:
    def customSortString(self, order: str, s: str) -> str:
        orderDict = {c: idx for idx, c in enumerate(order)}

        s_sorted = sorted(s, key=lambda c: orderDict[c] if c in orderDict else -1)

        return ''.join(s_sorted)

        