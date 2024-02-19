def bsearch(array, search):
    if len(array) > 0:
        l = 0
        r = len(array)
       

        while l <= r:
            mid = l + (r-1) // 2

            if array[mid] == search:
                return mid
            elif array[mid] < search:
                l = mid + 1
            else: 
                r = mid - 1
    else:
        return -1

# Driver
## Sort array first cost O(log n)
if __name__ == '__main__':
    arr = [2,3,4,1,10,40]
    arr.sort();

    assert arr == [1,2,3,4,10,40], "The array does not match the expected values"

    result = bsearch(arr, 4);
    if result != -1:
        print("Element is presnt at index", result)
    else: 
        print("Element is no presnet in array")