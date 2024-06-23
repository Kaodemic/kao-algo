
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.



// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function average(items) {
    var result = items.reduce((acc, cur) => acc + cur, 0);
    console.log('items', items, result )
    return result
}

var findMaxAverage = function (nums, k) {
    var arrayOfChaos = [];

    nums.forEach((element, bigIndex) => {
        var _num = [...nums]
        var shitHole = [element]
        arrayOfChaos.push([...shitHole])
        _num.forEach((element, index) => {
            if (index > bigIndex) {
                shitHole.push(element)
                arrayOfChaos.push([...shitHole])
            }
        });

    });

    var results = []
    var noGetSameArrayAsHead = arrayOfChaos.filter(array=>array.length===k)
    noGetSameArrayAsHead.forEach(ele => {
        results.push(average(ele))
    }
    )

    return (Math.max(...results)/k).toFixed(5)
}

// Instead of creating all possible subarrays, you can slide a window of size k through the array. This avoids unnecessary duplicate subarrays.
// The results array stores the average of each subarray, but you’re dividing the maximum value by k at the end. This is incorrect. You should return the maximum average directly.
// To optimize further, you can maintain a running sum of the first k elements and slide the window to calculate the sum of the next subarray. This avoids recalculating the entire sum each time.

var findMaxAverageSlideWindow = function(nums, k) {
    let sum = 0;
    // Find out sum of window, the window is defined by k
    // k=4 => SUM of window of |1,2,3,4|,5,6,7...
    // SUM = sumOfWindowk(nums,k)
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;
    // When the window was moved to next 
    // k=4 => SUM of next window of 1,|2,3,4,5|,6,7...
    // the next SUM that is current sum or accumulated sum with next item and remove the 1st item of window
    // Then we have a serveal ways to deal with
    // nextSum = sum + nextItemValue - 1stItemValue
    // nextSum =  
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    
    return (maxSum / k).toFixed(5);
};

findMaxAverageSlideWindow([1,2,3,4,5],2)

// 1,2,3,4,5,6,7,8
// 1234 sum
// i=4 234+5-1 <=> sum+=nums[i=k=4] (5) -nums[i-k] (1)
// i=5 345+6-2 <=> sum+=nums[i=6] (6) - nums[i=6-k=4] (2) 

