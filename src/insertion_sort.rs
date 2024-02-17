// vec![1,3,9,5,2,7];
pub fn sort(array: &mut [i32]) {
    let len: usize = array.len();
    for i in 0..len {
        let mut j = i;
        while j > 0 && array[j] < array[j - 1] {
            array.swap(j, j - 1);
            j -= 1;
        }
    }
}
