/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(str) {
    var s = str.split('')
    var stack = [];
    for (let index = 0; index < s.length; index++) {
        if(s[index]==='*'){
            stack.pop();
        }else{
            stack.push(s[index])
        }
    }
    return stack.join('')
};


console.log(removeStars('leet**cod*e'))