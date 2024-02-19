
class Node:
    def __init__(self, data=None,next=None):
        self.data = data
        self.next = next 

def insertAtFront(head_ref, new_data):
 
    new_node = Node()
    new_node.data = new_data
    new_node.next = head_ref
    head_ref = new_node
 
    return head_ref

def printList(node):
    while (node!= None):
        print(node.data, end=" ")
        node = node.next
    print("\n")

# Driver code
if __name__ == '__main__':
     # Start with the empty list
    head = None
 
    head = insertAtFront(head, 6)
    head = insertAtFront(head, 5)
    head = insertAtFront(head, 4)
    head = insertAtFront(head, 3)
    head = insertAtFront(head, 2)
    head = insertAtFront(head, 1)
 
    print("After inserting nodes at thier front: ", end="")
    printList(head)