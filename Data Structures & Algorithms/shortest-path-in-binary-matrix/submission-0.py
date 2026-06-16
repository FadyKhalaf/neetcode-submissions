class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        
        if grid[0][0] == 1:
            return -1
        
        def valid(x, y):
            return 0 <= x < len(grid) and 0 <= y < len(grid)

        DIRS = [(0, -1), (-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1)]
        queue = deque([(0, 0, 1)])
        visited = set((0, 0))
        n = len(grid)

        while queue:
            length = len(queue)
            for _ in range(length):
                x, y, cost = queue.popleft()
                if x == n - 1 and y == n - 1:
                    return cost
                for dx, dy in DIRS:
                    nx, ny = x + dx, y + dy
                    if valid(nx, ny) and (nx, ny) not in visited and grid[nx][ny] == 0:
                        visited.add((nx, ny))
                        queue.append((nx, ny, cost + 1))
        return -1
