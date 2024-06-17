function measure(func) {
    console.time('Execution Time');
  
    func;
  
    console.timeEnd('Execution Time'); const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;
  
    const memoryData = process.memoryUsage();
  
    const memoryUsage = {
      rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
      heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
      heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
      external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
    };
  
    console.log(memoryUsage);
  }
/**
 * @param {number} n
 * @return {number[]}
 * Here’s what the function does:

It initializes i to 0 and creates an empty array result.
It enters a do-while loop that runs n + 1 times (from 0 to n inclusive).
Inside the loop, it converts i to its binary representation as a string, splits it into an array of characters, and then uses reduceRight to sum the bits.
It increments i and repeats until i is greater than n.
The time complexity of this function is determined by:

The do-while loop, which runs n + 1 times, contributing O(n).
The toString(2) method, which has a time complexity of O(k), where k is the number of bits in the number (which in this case is logarithmic in relation to i).
The split('') method, which also has a time complexity of O(k) since it operates on the string returned by toString(2).
The reduceRight method, which iterates over each character in the array created by split(''), contributing another O(k).
Since k (the number of bits) grows logarithmically with respect to i, and since the maximum value of i is n, we can say that k is O(log n). Therefore, each iteration of the loop has a time complexity of O(log n), and since there are n iterations, the overall time complexity of the function is O(n log n).

So, the Big O time complexity of the countBits function is O(n log n).
 */
var countBits = function (n) {
    let i = 0;
    let result = [];
    do {
        result.push(i.toString(2).split('').reduceRight((prev, current) => Number(prev) + Number(current), Number(0)))
        i++
    } while (i <= n)
    return result;
};




/**
 * @param {number} n
 * @return {number[]}
 */
var countBitsFastest = function (n) {
    const res = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        res[i] = bitCount(i);
    }

    function bitCount(i) {
        let count = 0;
        while (i !== 0) {
            count++;
            i = i & (i - 1);
        }
        return count;
    }


    return res;
};

const compareArrays = (a, b) =>
    a.length === b.length &&
    a.every((element, index) => element === b[index]);

measure(countBitsFastest(1))

// The execution time of countBitsFastest is lesser than countBits primarily due to the efficiency of the bit counting method used.

// In countBits, the function converts a number to its binary string representation and then iterates over each character in the string to count the number of 1s. This involves several operations: converting a number to a string, splitting the string into an array, and then reducing over that array. Each of these operations adds overhead and is performed for every number from 0 to n.

// On the other hand, countBitsFastest uses Brian Kernighan’s algorithm within the bitCount function, which is more efficient. This algorithm works by repeatedly flipping the least significant set bit (the rightmost 1) to 0 and counting how many times this operation can be performed before the number becomes 0. The key insight is that each operation directly reduces the number of set bits by 1, so it only iterates as many times as there are set bits, rather than iterating over every bit position.

// Here’s a comparison of operations for both functions:

// countBits: Convert to binary string -> Split string -> Iterate over array -> Sum bits
// countBitsFastest: Directly count set bits using bitwise operations
// Because Brian Kernighan’s algorithm avoids the overhead of string and array operations and directly manipulates bits, it is significantly faster, especially as n grows larger. This results in a lower execution time for countBitsFastest compared to countBits.