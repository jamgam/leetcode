class Solution:
    def firstUniqChar(self, s: str) -> int:
        if not s:
            return -1
        
        charOcc = {}
        for char in s:
            if char in charOcc:
                charOcc[char] += 1
            else:
                charOcc[char] = 1
        
        minIdx = len(s)
        for char, value in charOcc.items():
            if value is 1:
                print(char)
                minIdx = min(minIdx, s.index(char))
        
        if (minIdx == len(s)):
            return -1
        return minIdx