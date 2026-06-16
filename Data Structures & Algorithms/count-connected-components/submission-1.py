from collections import defaultdict

class DSU:
    def __init__(self, size):
        self.parent = [i for i in range(size)]
        self.rank = [1] * size
        self.components = size

    def find(self, x):
        if self.parent[x] == x:
            return x
        self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y):
        parentX = self.parent[x]
        parentY = self.parent[y]

        if parentX == parentY:
            return
        
        if self.rank[parentX] > self.rank[parentY]:
            self.parent[parentY] = parentX
            self.rank[parentX] += self.rank[parentY]
        elif self.rank[parentY] > self.rank[parentX]:
            self.parent[parentX] = parentY
            self.rank[parentY] += self.rank[parentX]
        else:
            self.parent[parentY] = parentX
            self.rank[parentX] += 1
        
        self.components -= 1
        # print(self.parent, self.rank, self.components)

    def connectedComponents(self):
        return self.components

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        dsu = DSU(n)
        for node1, node2 in edges:
            dsu.union(node1, node2)
        return dsu.connectedComponents()

        