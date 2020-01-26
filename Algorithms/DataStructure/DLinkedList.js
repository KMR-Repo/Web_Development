class Node{
    constructor(sData){
        this.Data = sData;
        this.Next = "";
        this.Prev = "";
    }
}
class DLinkedList{
    constructor(){
        this.Head = "";
        this.Tail = "";
    }
    Insert(sData){
        //console.log(typeof this.Head);
        if(this.Head == ""){ //if head itself is not present 
            this.Head = new Node(sData);
            this.Tail = this.Head;
        }else{
            let currentNode = this.Head;
            while(currentNode.Next != ""){
                currentNode = currentNode.Next;
            }
            let newNode = new Node(sData);
            newNode.Prev = currentNode;
            currentNode.Next = newNode;
            this.Tail = currentNode.Next;//not the proper way of doing but working
            /*
            currentNode = "";
            currentNode = this.Tail;
            while(currentNode.Prev != ""){
                currentNode = currentNode.Prev;
            }
            newNode.Next = currentNode;
            currentNode.Prev = newNode;
            */
        }
        return true;
    }
    Delete(sData){
        if(this.Head == ""){
            return false;
        }
        if(this.Head.Data ==  sData){//if the data present in head node itself
            let newHead = this.Head.Next;
            if(newHead != ""){//if next node is present
                newHead.Prev = "";
                this.Head = newHead;
                return true;
            }
            else{//if only one node is present and that too head node
                this.Head = "";
            }
        }
        else{
            let currentNode = this.Head;
            while(currentNode != ""){
                if(currentNode.Data == sData){
                    let PrevNode = currentNode.Prev;
                    let NextNode = currentNode.Next;
                    PrevNode.Next = NextNode;
                    NextNode.Prev = PrevNode;

                }
                currentNode = currentNode.Next;
            }
            return true;
        }
    }
}

let DLinkedListFunction = () =>{
    let temp = new DLinkedList();
    //console.log(temp);
    temp.Insert(10);
    temp.Insert(20);
    temp.Insert(30);
    temp.Insert(40);
    temp.Insert(50);
    //temp.Delete(10);
    temp.Delete(30);
    console.log(temp);
}