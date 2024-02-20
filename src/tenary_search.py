def ternarySearch(l,r, key, ar):
    if ( r >= l):
            mid1 = l + (r-l) // 3
            mid2 = r - (r-l) // 3

            # check if key is presnet at any mid
            if key == ar[mid1]:
                  return mid1
            
            if key == ar[mid2]:
                  return mid2

            # since key not present ad mid
            # chec kin which region it is present
            # then repeat the Search operation
            # in that region

            if (key < ar[mid1]):
                return ternarySearch(l,mid1-1, key, ar)
            elif key > ar[mid2]:
                return ternarySearch(mid2+1,r,key,ar)
            else:
                return ternarySearch(mid1+1,mid2-1,key,ar)
        
    return -1

# Driver code
l, r, p = 0, 9, 5
 
# Get the array
# Sort the array if not sorted
ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
# Starting index
l = 0
 
# end element index
r = 9
 
# Checking for 5
 
# Key to be searched in the array
key = 9
 
# Search the key using ternarySearch
p = ternarySearch(l, r, key, ar)
 
# Print the result
print("Index of", key, "is", p)
 
# Checking for 50
 
# Key to be searched in the array
key = 50
 
# Search the key using ternarySearch
p = ternarySearch(l, r, key, ar)
 
# Print the result
print("Index of", key, "is", p)