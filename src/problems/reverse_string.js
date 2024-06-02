/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = s.trim().split(' ').filter(item=> item).reverse().join(' ');
    return result;
}

console.log(reverseWords('a good   example'));