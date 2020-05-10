// bubleSorting
// [6,5,3,1,8,7,2,4]

// function bubleSorting(arr){
//     let swap;
//     do{
//         swap = false;
//         //console.log(arr);
//         arr.forEach((element, index) => {
//             if(element > arr[index+1]){
//                 let temp = element;
//                 arr[index] = arr[index+1];
//                 arr[index+1] = temp;
//                 swap = true;
//             }
//         });
//     }while(swap)
//}


function bubleSorting(arr){
    let swap = true;
    while(swap){
        swap = false;
        for(var i = 0; i < arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
    }
    return arr;
}

//bubleSorting([6,5,3,1,8,7,2,4]);
//console.log(bubleSorting([6,5,3]));

//selectionSort
function selectionSorting(arr){
    let len = arr.length;
    for(var i = 0; i < len; i++){
        let minOfIndex = i;
        for(var j = i+1; j < len; j++){
            if(arr[j] < arr[minOfIndex]){
                minOfIndex = j;
            }
        }
        if(minOfIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minOfIndex];
            arr[minOfIndex] = temp;
        }
    }
    return arr;
}

//console.log(selectionSorting([5,3,8,6,7,2]));

// insertSorting [2->0,0->2,4,9,14->9,23->14,7->23];
function insertSorting(arr){
    for(var i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

//console.log(insertSorting([6,5,3,0]));
//console.log(insertSorting([2,0,4,9,14,23,7]));

//HeapSort


function heapSort(arr){
    arr = makeFirstMaxHeap(arr);
    let size = arr.length;
    let temp;
    for(let i = arr.length-1; i > 0; i--){
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        size--;
        makeMaxHeap(arr, size, 0);
    }
    return arr;
}

function makeFirstMaxHeap(arr){
    for(let i = Math.floor(arr.length/2); i >=0 ; i--){
        makeMaxHeap(arr, arr.length, i);
    }
    return arr;
}

function makeMaxHeap(arr, length, i){
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if(length > left && arr[left] > arr[largest]){
        largest = left;
    }
    if(length > right && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        makeMaxHeap(arr, length, largest);
    }
    return arr;
}

console.log(heapSort([4,1,8,9,0]))

//MergeSort

const mergeSort = array => {
    //Check if array can be split
    if(array.length < 2) return array;
    //Get Middle index
    const middle = Math.floor(array.length / 2);
    //Split Array In Two Sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    //Use recusion to continue splitting
    console.log('split:', leftSide, rightSide);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
  
  const merge = (left, right) => {
    //Create New Array
    const result = [];
    //Check if left array and right array is empty
    while(left.length && right.length) {
      //Find lower value
      if(left[0] <= right[0]) {
        //Add left value
        result.push(left.shift());
      } else {
        //Add right value
        result.push(right.shift());
      }
    }
    //Merge left array
    while(left.length) result.push(left.shift());
    //Merge right array
    while(right.length) result.push(right.shift());
    //return result array
    console.log('result:', result);
    return result;
  }

//console.log(mergeSort([5, 7, 3, 10, 4, 1, 5]));

const quickSort = arr => {
    if(arr.length <=1 ) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
    // if(left.length && right.length){
    //     return [...quickSort(left),pivot,...quickSort(right)];
    // }else if(left.length){
    //     return [...quickSort(left),pivot];
    // }else{
    //     return [pivot,...quickSort(right)];
    // }
}

//console.log(quickSort([1,3,8,9,4,5]))

function shellSort(arr){
    let gap = 1;
    for(var i = gap; i < arr.length; i++){
        let targetValue = arr[i];
        for(var j = i; j >= gap && arr[j-gap] > targetValue; j -= gap){
            arr[j] = arr[j-gap];
        }
        arr[j] = targetValue;
    }
    return arr;
}
let unsortedArray = [9,8,7,4,0]
//console.log(shellSort(unsortedArray.slice()))