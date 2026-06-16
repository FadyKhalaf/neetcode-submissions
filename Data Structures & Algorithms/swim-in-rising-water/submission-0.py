from heapq import heappop, heappush
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:

       n = len(grid)
       visited = set()
       minH = [(grid[0][0], 0, 0)]
       dirs = [(-1, 0), (0, -1), (0, 1), (1, 0)]

       def valid(r, c):
            return 0 <= r < n and 0 <= c < n

       while minH:
            t, r, c = heappop(minH)
            if r == n - 1 and c == n - 1:
                return t
            for dr, dc in dirs:
                neiR, neiC = r + dr, c + dc
                if not valid(neiR, neiC) or (neiR, neiC) in visited:
                    continue
                visited.add((neiR, neiC))
                heappush(minH, (max(t, grid[neiR][neiC]), neiR, neiC))