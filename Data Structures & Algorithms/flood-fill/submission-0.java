class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int orig = image[sr][sc];
        if (orig == color) return image; 
        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[]{sr, sc});
        int[][] dirs = {{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
        int n = image.length, m = image[0].length;
        while(!queue.isEmpty()) {
            int[] cell = queue.removeFirst();
            int r = cell[0], c = cell[1];
            image[r][c] = color;
            for(int[] nei: dirs) {
                int dr = nei[0], dc = nei[1];
                int nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n 
                    && nc >= 0 && nc < m && image[nr][nc] == orig) {
                        queue.add(new int[]{nr, nc});
                }
            }
        }
        return image;
    }
}