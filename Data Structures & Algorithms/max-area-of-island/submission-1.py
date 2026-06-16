from typing import Tuple, Set, List

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:

        def isValid(x: int, y: int, visited: Set[int]):
            return 0 <= x < len(grid) and 0 <= y < len(grid[0]) \
                    and (x, y) not in visited and grid[x][y]

        def maxAreaOfIslandHelper(coord: Tuple[int, int], visited: Set[int]):
            x, y = coord
            if not isValid(x, y, visited):
                return 0
            
            visited.add((x, y))

            dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]]
            area = 1
            for dx, dy in dirs:
                area += maxAreaOfIslandHelper((x + dx, y + dy), visited)
            return area

        visited = set()
        ans = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1 and (i, j) not in visited:
                    area = maxAreaOfIslandHelper((i, j), visited)
                    ans = max(ans, area)
        return ans
        