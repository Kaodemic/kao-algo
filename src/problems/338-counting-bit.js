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

measure(countBits(1))
measure(countBitsFastest(1))


