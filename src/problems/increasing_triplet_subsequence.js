/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let result=false;
    for(let i =0; i< nums.length; i++){
        if (nums[i]<=nums[i+1] && nums[i+1]<=nums[i+2]){
            console.log(nums[i])
            result=true;
        }
    }
    return result
};

