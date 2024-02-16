// Lets consider the following array as an example: arr[] = {64, 25, 12, 22, 11}

// make assumtion (statement) min=array[0]
// iterate thourgh array and make sure it true if not
// do swap.

// what do you mean selection :)
// Select less one first
// then select lesser than the smallest one
// if has then swap

// fn find_min(_array: &[i32]) -> Option<i32> {
//     let min: &i32 = _array.iter().min()?;
//     Some(*min)
// }

// fn find_min_index(_array: &[i32]) -> Option<usize> {
//     let index = _array.iter().enumerate().min_by(|a,b| a.1.cmp(b.1));

//     match index {
//         Some((i,_min_value)) => Some(i),
//         None => panic!("Empty")
//     }
// }


pub fn sort(array: &mut[i32]) {
    let len = array.len();
    for i in 0..len {
        let mut min_index= i;
        for j in (i+1)..len {
            if array[j] < array[min_index] {
                min_index = j;
            }
        }
        array.swap(i, min_index)
    }
}
