class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int run = 0;
        int ans = 0;
        for(var num: nums) {
            if (num == 1) {
                run++;
                ans = Math.max(ans, run);
            } else {
                run = 0;
            }
        }
        return ans;
    }
}