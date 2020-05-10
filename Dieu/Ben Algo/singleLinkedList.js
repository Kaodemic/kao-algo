class node { 
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert first Node

    InsertFirstNode(data){
        this.head = new node(data,this.head);
        this.size++;
        //console.log(this.size);
    }

    //Insert Last Node

    InsertLastNode(data){
        let Node =  new node(data);
        let current;
        // the node is empty, create new node
        if(!this.head){
            this.head = Node;
        }else{
            current = this.head;
            //console.log(current);
            while(current.next){
                current = current.next;
            }
            current.next = Node;
        }
        this.size++;
        //console.log(this.size);
    }

    //Insert at Index
    InsertAtIndex(data,Index){

        // if Index is out of range
        if(Index > 0 && Index > this.size){
            return;
        }

        // if first Index
        if(Index === 0){
            this.head = new node(data, this.head);
            return
        }

        const Node = new node(data);
        let current, previous;
        
        // Set current to first
        current = this.head;
        let count = 0;
        while(count < Index){
            previous = current; // node before Index
            //console.log("previous",previous)
            count++;
            current = current.next; // node after Index
            //console.log("current",current)
        }
        Node.next = current;
        previous.next = Node;
        this.size++;
    }
    //Get At Index
    GetIndex(Index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == Index){
                console.log("getIndex:",current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }
    //Remove At Index
    RemoveAtIndex(Index){
        if(Index > 0 && Index > this.size){
            return;
        }

        let current = this.head;
        let count = 0;
        let previous;
        if(Index === 0){
            this.head = current.next;
        }else{
            while(count < Index){
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    //Clear the List
    ClearList(){
        this.head = null;
        this.size = 0;
    }
    // Print LinkedList
    printLinkedList(){
        let current = this.head;
        //console.log(current);
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

var ll = new LinkedList();
// ll.InsertFirstNode(300);
// ll.InsertFirstNode(200);
// ll.InsertFirstNode(100);
// ll.InsertLastNode(400);
// ll.InsertAtIndex(500,2);
// ll.GetIndex(2);
// ll.RemoveAtIndex(0);
// ll.RemoveAtIndex(2);
ll.ClearList();
ll.printLinkedList();
