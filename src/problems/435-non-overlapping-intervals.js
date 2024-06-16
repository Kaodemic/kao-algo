/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
    // Sort the intervals based on their finish times
    intervals.sort((a, b) => a[1] - b[1]);
    
    // Initialize the list to hold the selected intervals
    let selectedIntervals = [];
    
    // Initialize the end time of the last added interval to 0
    let lastFinishTime = Number.NEGATIVE_INFINITY;
    
    // Iterate over the sorted intervals
    for (let [start, finish] of intervals) {
        // If the start time of the current interval is greater or equal
        // to the finish time of the last selected interval, add it to the list
        if (start >= lastFinishTime) {
            selectedIntervals.push([start, finish]);
            lastFinishTime = finish;
        }
    }
    console.log(selectedIntervals)
    return intervals.length - selectedIntervals.length
    
    };

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[-100,-2],[5,7]])) 