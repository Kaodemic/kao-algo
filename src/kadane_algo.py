from sys import maxsize

def maxSubArraySum(a, size):
    maxSoFar = - maxsize - 1
    maxEndingHere = 0
    start = 0
    end = 0
    s = 0
    
    for i in range(0, size):
        maxEndingHere += a[i]
        
        if maxSoFar < maxEndingHere:
            maxSoFar = maxEndingHere
            start = s
            end = i
        
        if maxEndingHere < 0:
            maxEndingHere = 0
            s = i + 1
    
    print("Starting Index %d" % (start))
    print("Ending Index %d" % (end))

    return maxSoFar

 
# Driver function to check the above function

a = [-2, -3, 4, -1, -2, 1, 5, -3]
 
print ("Maximum contiguous sum is", maxSubArraySum(a, len(a)))
 
