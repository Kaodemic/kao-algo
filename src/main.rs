mod selection_sort;
mod bubble_sort;
mod insertion_sort;

fn main() {
    // let mut numbers = vec![32,14,1,5,9,3,0];
    let mut numbers = vec![1,3,9,5,2,7];
    insertion_sort::sort(&mut numbers);
    println!("Sorted numbers: {:?}", numbers);
}
