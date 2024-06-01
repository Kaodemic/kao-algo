/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    return str2.includes(str1);
    
};

console.log(gcdOfStrings('ABC', 'AB'))