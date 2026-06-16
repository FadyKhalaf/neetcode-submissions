class Solution:
    def minOperations(self, logs: List[str]) -> int:
        
        stackDepth = 0
        for log in logs:
            if log == './': continue
            elif log == '../':
                if stackDepth > 0:
                    stackDepth -= 1
            else:
                stackDepth += 1
        
        return stackDepth