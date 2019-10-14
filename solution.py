class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        
        for i in range(1, len(triangle)):
            for j, num in enumerate(triangle[i]):
                left = float('Inf')
                right = float('Inf')
                if (i - 1 >= 0):
                    if(j - 1 >= 0):
                        left = triangle[i-1][j-1]
                    if(j < len(triangle[i-1])):
                        right = triangle[i-1][j]
                        
                triangle[i][j] = min(left, right) + num
                
        return min(triangle[-1]);