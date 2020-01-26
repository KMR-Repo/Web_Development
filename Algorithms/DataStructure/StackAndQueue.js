class Node{
    constructor(sData){
        this.Data = sData;
        this.Next = "";
    }
}
class Queue{
    constructor(){
        this.Head = "";
        this.Tail = "";
    }
    Add(sData){
        if(this.Head == ""){
            this.Head = new Node(sData);
            this.Tail = this.Head;
        }else{
            let newNode = new Node(sData);
            //this.Head.Next = newNode;
            this.Tail.Next = newNode;
            //Adding the new node at the end of queue
            //and moving the tail position
            this.Tail = newNode;
        }
    }
    remove(){
        let sData = this.Head.Data;
        this.Head = this.Head.Next
        return sData;
    }
}

let queueFunction = ()=>{
    let firstQueue = new Queue();
    firstQueue.Add(10);
    firstQueue.Add(20);
    firstQueue.Add(30);
    firstQueue.Add(40);
    ///Iyyyo ... This also worked !!!!!!!!!!!!!!!!!!!!
    console.log(firstQueue.remove());
    console.log(firstQueue);
}