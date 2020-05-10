class node {
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class binaryTree {
    constructor(){
        this.root = null;
    }

    addNode(n){
        const Node = this.root
        if(Node === null){
            this.root = new node(n);
        }else{
            const searchTree = function(Node){
                if(n < Node.data){
                    if(Node.left === null){
                        Node.left = new node(n);
                        return;
                    }else if(Node.left !== null){
                        return searchTree(Node.left);
                    }
                }else if(n > Node.data){
                    if(Node.right === null){
                        Node.right = new node(n);
                        return;
                    }else if(Node.right !== null){
                        return searchTree(Node.right);
                    }
                }else {
                    return null;
                }
            }
            return searchTree(Node);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(current.data === data){
                return true;
            }
            if(data < current.data){
                current = current.left;
            }
            if(data > current.data){
                current = current.right;
            }
        }
        return false;
    }

    getRootMode(){
        return this.root;
    }

    //PreOrder
    preOrder(root){
        if(root!=null){
            console.log(root.data); //P L R
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    //InOrder
    inOrder(root){
        if(root!=null){
            this.inOrder(root.left);
            console.log(root.data); // L P R
            this.inOrder(root.right);
        }
    }

    //PostOrder
    postOrder(root){
        if(root != null){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
}


function setup(){
    let tree = new binaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(6);
    //console.log(tree);
    let Root = tree.getRootMode();
    //tree.preOrder(Root);
    //tree.inOrder(Root);
    console.log(tree.isPresent(6));
}
setup();