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

class Stack{
    constructor(){
        this.Head = null;
        //this.Tail = null;
    }
    push(sData){
        if(this.Head == null)
            this.Head = new Node(sData)
            //this.Tail = (this.Head = new Node(sData));
        else{
            let newNode = new Node(sData);
            [newNode.Next,this.Head] = [this.Head,newNode];
            //newNode.Next = this.Head;
            //this.Head = newNode;
        }
           // this.Tail = (this.Tail.Next = new Node(sData));
        return this.Head;
    }
    pop(){
        let sData = this.Head;
        this.Head = this.Head.Next;
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

let stackFunction = ()=>{
    let firstStack = new Stack;
    firstStack.push(10);
    //console.log(firstStack);
    with(firstStack){
        console.log(push(20));
        console.log(push(30));
        console.log(push(40));
        console.log(push(50));
        console.log(pop());
    }
    console.log(firstStack);
}