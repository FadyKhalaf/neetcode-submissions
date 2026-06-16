class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:

        def in_bound(i: int, j: int):
            return 0 <= i < len(grid) and 0 <= j < len(grid[0])
        
        rotten, fresh = [], 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 2:
                    rotten.append((i, j))
                if grid[i][j] == 1:
                    fresh += 1
        
        if not fresh:
            return 0

        queue = deque(rotten)
        minutes = -1
        while queue:
            length = len(queue)
            for _ in range(length):
                i, j = queue.popleft()
                dirs = [(0, -1), (-1, 0), (0, 1), (1, 0)]
                for di, dj in dirs:
                    newI, newJ = i + di, j + dj
                    if in_bound(newI, newJ) and grid[newI][newJ] == 1:
                        grid[newI][newJ] = 2
                        fresh -= 1
                        queue.append((newI, newJ))
            minutes += 1

        return minutes if not fresh else -1 
