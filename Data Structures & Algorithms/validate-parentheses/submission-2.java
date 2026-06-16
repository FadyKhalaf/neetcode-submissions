class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> closeToOpen = Map.of(
            ')', '(',
            '}', '{',
            ']', '['
        );

        System.out.println(closeToOpen);

        for(var ch: s.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else {
                if (stack.isEmpty() || stack.peek() != closeToOpen.get(ch)) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}
