class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numsOcc = {}
        
        for num in nums:
            if num in numsOcc:
                return True
            else:
                numsOcc[num] = 1
                
        return False       