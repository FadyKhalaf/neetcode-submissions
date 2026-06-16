class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:

        def inBound(i: int, j: int):
            return 0 <= i < n and 0 <= j < m 

        def dfs(i: int, j: int):
            nonlocal visited, n, m

            dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
            visited.add((i, j))
            for di, dj in dirs:
                newI, newJ = i + di, j + dj
                if not inBound(newI, newJ) or (newI, newJ) in visited or grid[newI][newJ] == '0':
                    continue
                dfs(newI, newJ)
        
        visited = set()
        n, m = len(grid), len(grid[0])
        ans = 0
        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1' and (i, j) not in visited:
                    dfs(i, j)
                    ans += 1
        return ans
        