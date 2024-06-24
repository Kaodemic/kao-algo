// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3


var RecentCounter = function () {
    this.range = [];
    this.count = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    var rangeToFind = [t - 3000, t];
    this.range.push(t)
    this.count = 0;
    for (let index = 0; index < this.range.length; index++) {
        const element = this.range[index];
        if (rangeToFind[0] <= element) {
            this.count++;
        } else {
            this.count = 0;
        }
    }
    console.log(this.range, rangeToFind, this.count)
    return this.count

};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

function main() {
    var obj = new RecentCounter()
    console.log(obj.ping(1));
    console.log(obj.ping(100));
    console.log(obj.ping(3001));
    console.log(obj.ping(3002));
}



/*
1. Avoid undenessary array manipulation:
- instead of pushing every t value into the this.range array. We can maintant a pointer to the las valid index within the range. Becasue if the range is huge then you may crash by out of memory. 😂

- 🗝️ When a new t value is added, we can remove outdated  elements from the beginning of the range (those value are older then 3000 ms). Safe your Memory by any price.

- Let's reduce memory usage and avoid unncessary iterrations. 

2. Use banary search for finding the valid range:
- scince the this.range array is sorted, we can use binary search to find the index of the first element greter than or equa rangeToFind[0]
- the count of valid elements will be the difference between the current index and the las valid index.
*/


function aBetterVersionMain() {
    var RecentCounter = function () {
        this.range = [];
        this.lastValidIndex = -1; // Pointer to the last valid index
    }

    RecentCounter.prototype.ping = function (t) {
        // Remove outdated elements from the begining of the range.
        while (this.range.length > 0 && this.range[0] < t - 3000) {
            this.range.shift();
        }

        // Add the new timestamp to the range
        this.range.push(t)

        while (this.lastValidIndex + 1 < this.range.length
            && this.range[this.lastValidIndex + 1] < t - 3000) {
            this.lastValidIndex++;
        }

        const count = this.range.length - this.lastValidIndex - 1;
        return count;
    }

    var obj = new RecentCounter()
    console.log(obj.ping(1));
    console.log(obj.ping(100));
    console.log(obj.ping(102));
    console.log(obj.ping(3001));
    console.log(obj.ping(3002));
    console.log(obj.ping(3004));
    console.log(obj.ping(3005));
}
aBetterVersionMain()