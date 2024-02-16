mod selection_sort;

fn main() {
    let mut numbers = vec![5, 2, 9, 1, 5, 6];
    selection_sort::sort(&mut numbers);
    println!("Sorted numbers: {:?}", numbers);
}
