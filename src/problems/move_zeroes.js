/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  
  var moveZeroes = function(nums) {
      let temp=0;
      const length = nums.length;
      for(let i=0; i<length; i++){
          if(nums[i]==0){
              nums.push(nums[i])
              nums[i]='x'
          }
      }
  
      removeItemAll(nums,'x')
      return nums
  };
  