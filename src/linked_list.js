// A linked list node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
 
// Given a reference (pointer to pointer)
// to the head of a list and an int, inserts
// a new node on the front of the list.
function insertAtFront(head_ref, new_data) {
    // 1. Create a new node
    const new_node = new Node(new_data);
 
    // 2. Make the new node point to the current head
    new_node.next = head_ref[0];
 
    // 3. Update the head to the new node
    head_ref[0] = new_node;
}
 
// This function prints contents of
// linked list starting from head
function printList(node) {
    let current = node;
    while (current !== null) {
        console.log(" " + current.data);
        current = current.next;
    }
    console.log("\n");
}
 
// Driver code
function main() {
    // Start with an empty list
    const head = [null]; // Use an array to simulate a pointer to pointer
 
    // Insert elements at the beginning
    insertAtFront(head, 1);
    insertAtFront(head, 2);
    insertAtFront(head, 3);
    insertAtFront(head, 4);
    insertAtFront(head, 5);
    insertAtFront(head, 6);
 
    console.log("After inserting Nodes at their front:");
    // The nodes will be: 6 5 4 3 2 1
    printList(head[0]);
}
 
main();