def bsearch(array, search):
    if len(array) > 0:
        l = 0
        r = len(array)
       

        while l <= r:
            mid = (l + (r-1)) // 2
            
            if l == r:
                return mid+1
            
            if array[mid] == search:
                return mid
            elif array[mid] < search:
                l = mid + 1
            else: 
                r = mid - 1
    else:
        return -1
    

def binarySearch2(arr, l, r, x):
 
    # Check base case
    if r >= l:
 
        mid = l + (r - l) // 2
 
        # If element is present at the middle itself
        if arr[mid] == x:
            return mid
 
        # If element is smaller than mid, then it
        # can only be present in left subarray
        elif arr[mid] > x:
            return binarySearch(arr, l, mid-1, x)
            
 
        # Else the element can only be present
        # in right subarray
        else:
            return binarySearch(arr, mid + 1, r, x)
 
    # Element is not present in the array
    else:
        return -1

# Driver
## Sort array first cost O(log n)
if __name__ == '__main__':
    arr = [2,3,4,1,10,40]
    arr.sort();

    assert arr == [1,2,3,4,10,40], "The array does not match the expected values"

    result = bsearch(arr, 40);
    if result != -1:
        print("Element is presnt at index", result)
    else: 
        print("Element is no presnet in array")