class Solution:

    def getPivot(self, mountainArr: 'MountainArray', length: int) -> int:
        left, right = 0, length - 1
        while left < right:
            mid = (left + right) // 2

            if mountainArr.get(mid) > mountainArr.get(mid-1) and mountainArr.get(mid) > mountainArr.get(mid+1):
                return mid
            elif mountainArr.get(mid) > mountainArr.get(mid-1):
                left = mid + 1
            else:
                right = mid - 1
        return left
    
    def search(self, target: int, left: int, right: int, mountainArr: 'MountainArray', inc: bool) -> int:
        while left <= right:
            mid = (left + right) // 2
            if mountainArr.get(mid) == target:
                return mid
            elif mountainArr.get(mid) < target:
                if inc:
                    left = mid + 1
                else:
                    right = mid - 1
            else:
                if inc:
                    right = mid - 1
                else:
                    left = mid + 1
        return -1
        

    def findInMountainArray(self, target: int, mountainArr: 'MountainArray') -> int:

        n = mountainArr.length()
        pivot = self.getPivot(mountainArr, n)
        print(pivot)
        if mountainArr.get(pivot) == target:
            return pivot
        left_idx = self.search(target, 0, pivot-1, mountainArr, True)
        if left_idx != -1:
            return left_idx
        right_idx = self.search(target, pivot+1, n-1, mountainArr, False)
        if right_idx != -1:
            return right_idx
        return -1
        
        
        
