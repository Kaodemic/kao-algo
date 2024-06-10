/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var len = temperatures.length;
    var stack= []
    for(var i = 0; i<len; i++){
        for(var j = i+1; j<len; j++){
            if(temperatures[i]<temperatures[j]){
                if(!stack[i]) stack[i]=[];
                stack[i].push(temperatures[j])
                break;
            }else{
                if(!stack[i]) stack[i]=[];
                stack[i].push(temperatures[j])
                
                if(j==temperatures.length-1){
                    stack[i]=[];
                }
            }
        }
    }
    stack.push([])
    return stack.reduce((acc, subArray) => subArray.length? acc.concat(subArray.length) : acc.concat(0), [] )
};

console.log('TEST', [1,1,4,2,1,1,0,0].toString() == [1,1,4,2,1,1,0,0].toString())
var bigFile = []
console.log(dailyTemperatures(bigFile));

// This optimized version does the following:

// Initializes the result array with zeros, which will store the number of days until a warmer temperature is found.
// Iterates through each temperature once, using a stack to keep track of indices where the temperature is lower than the current one.
// When a higher temperature is found, it calculates the difference in days and updates the result array accordingly.
// The stack ensures that we only need to iterate through the array once, significantly improving performance for large arrays. The time complexity is now linear, O(n)
// , where n
//  is the length of the temperatures array. This should be much more efficient for large datasets.

var dailyTemperatures = function(temperatures) {
    var result = new Array(temperatures.length).fill(0);
    var stack = []; // this will store indices
    for (var i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            var idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    return result;
};
