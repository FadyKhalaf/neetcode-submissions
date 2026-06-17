class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s

        res = [[] for _ in range(numRows)]
        row, dir = 0, 1
        for c in s:
            res[row].append(c)
            row += dir
            if row == 0 or row == (numRows - 1):
                dir *= -1

        return ''.join([''.join(row) for row in res])