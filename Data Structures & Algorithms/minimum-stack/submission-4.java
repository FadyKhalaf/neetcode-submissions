class MinStack {

    Stack<Integer> stack;
    Queue<Integer> minQueue; 
    Map<Integer, Integer> count;

    public MinStack() {
        stack = new Stack<>();
        minQueue = new PriorityQueue<>();
        count = new HashMap<>();
    }
    
    public void push(int val) {
        stack.push(val);
        minQueue.add(val);
        count.put(val, count.getOrDefault(val, 0) + 1);
    }
    
    public void pop() {
        int val = stack.pop();
        count.put(val, count.get(val) - 1);
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        while(!minQueue.isEmpty() && count.get(minQueue.peek()) == 0) {
            minQueue.poll();
        }
        return minQueue.peek();
    }
}
