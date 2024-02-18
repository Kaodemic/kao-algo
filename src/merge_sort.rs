use std::clone;

// vec![1,3,9,5,2,7];
pub fn sort(array: &mut [i32]) {
    let len: usize = array.len();
    for i in 0..len {
        if i==3 {
            array.swap(i, i+1); 
        }
        println!("{}",array[i]);
    }
}
