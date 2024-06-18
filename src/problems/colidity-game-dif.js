var game = [1,2,8,7,3,7,4]
var gameDiffAllow = 3
let bucket = []
var result = []

game.forEach((g,index) => {
    if (!bucket.length) {
        bucket.push(g)
    } else {
        var thing = [...bucket].pop();
        //diff level
        if (Math.abs(thing - g) <= gameDiffAllow) {
            bucket.push(g)
            if(index==game.length-1){
                result.push(bucket)
            }
        } else {
            result.push(bucket)
            bucket = []
            bucket.push(g)
        }
    }
})
console.log(result.length)