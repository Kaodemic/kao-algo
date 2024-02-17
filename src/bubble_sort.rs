// The lagest element is placed in its correct position.
// 6035
// 0635
// 0365
// The second largest element at correct possition
// 0356
// Total passed n-1
// 0356
// The remain lagest elemetns at their correct possitions
// 0356
// Total no of comparitions n*(n-1)/2

// What is time complexity
// What is Auxiliary space
// Is that stable algo or not?
// Is that easy to understand or not
// is that require additional memory or not?
// is that ok with large data sets
// How much is called is large datasets
#[allow(dead_code)]
pub fn sort(array: &mut [i32]) {
    let len: usize = array.len();
    for _i in 0..len {
        for j in 0..len-1{
            if array[j] > array[j+1] {
                array.swap(j, j+1);
            }
        }
    }
}
