mod selection_sort;

fn main() {
    let mut numbers = vec![32,14,1,5,9,3,0];
    selection_sort::sort(&mut numbers);
    println!("Sorted numbers: {:?}", numbers);
}
