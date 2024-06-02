/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function(flowerbed, n) {
    let r = 0;
    flowerbed.push(0);
    flowerbed.unshift(0)
    flowerbed.forEach((item, index) => {
        
        if(flowerbed[index-1]==0 && item==0 && flowerbed[index+1]==0 && index){
            flowerbed[index]=1;
            r=r+1;
        }});
    console.log(flowerbed);
    return r===n;
};

// 0,0,1,0,0
console.log(canPlaceFlowers('00100'.split(''), 1))




