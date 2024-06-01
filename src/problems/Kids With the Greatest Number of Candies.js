/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */


var kidsWithCandies = function(candies, extraCandies) {

    const MAX = Math.max(...candies)
    const result = [];
    candies.map(candy=>{
        if(extraCandies+candy<MAX){
            result.push(false)
        } else {
            result.push(true)
        }
    })

    return result
};