class Node{
    constructor(sData){
        this.Data = sData;
        this.Next = "";
    }
}

class LikedList{
    constructor(){
        this.Head = "";
    }
    toArray(){
        let tempArray = [];
        let node = this.Head;
        if(node == "")
            return false;
        else{
            while(node.Next != ""){
                tempArray.push(node.Data);
                node = node.Next;
            }
            tempArray.push(node.Data)
            return tempArray;
        }
    }
    toString(){
        let rStmnt;
        (this.Head == "") ? (rStmnt = false) : (rStmnt = this.toArray().toString());
        return rStmnt;
    }
    Append(sData){
        //let curentNode = this.Head;
        if(this.Head == "")
        this.Head = new Node(sData);
        else{
            let curentNode = this.Head;
            //console.log(curentNode);
            while(curentNode.Next != ""){
                curentNode = curentNode.Next;
            }
            curentNode.Next = new Node(sData);
        } 
        return true; 
    }
    prepend(sData){
        if(this.Head == ""){
            this.Head == new Node(sData);
        }else{
            let newHead = new Node(sData);
            newHead.Next = this.Head;
            this.Head = newHead;
        }
        return true;
    }
    search(sData){
        if(this.Head == "")
            return false;
        else{
            let bFound = false;
            let curentNode = this.Head;
            while(curentNode.Next != "" && !bFound){
                if(curentNode.Data == sData){
                    bFound = sData;
                }
                curentNode = curentNode.Next;
            }
            if(curentNode.Data == sData)
                bFound = sData;
            return bFound;
        }

    }
    Delete(sData){
        if(this.Head != ""){
            let curentNode = this.Head; 
            if(curentNode.Data == sData){
                this.Head = curentNode.Next;
            }
            else
            {
                let bDeleted = true;
                while(curentNode.Next != "" && bDeleted){
                    if(curentNode.Next.Data == sData)
                    {
                        curentNode.Next = curentNode.Next.Next;
                        bDeleted = false;
                    }
                    curentNode = curentNode.Next;
                }
            }
        }
    }
}

let LinkedListFunction = () =>{
    let firstLI = new LikedList;
    console.log(firstLI.toArray());
    console.log(firstLI.toString());
    firstLI.Append(10);
    //console.log(firstLI);
    firstLI.Append(20);
    firstLI.Append(30);
    firstLI.Append(40);
    firstLI.Append(50);
    firstLI.Append(60);
    /*OMG i have done it :) */
    console.log(temp1 =firstLI);
    //firstLI.Delete(10);
    //console.log(temp2 = firstLI);
    //firstLI.Delete(40);
    //console.log(temp3 = firstLI);
    firstLI.prepend(100);
    console.log(firstLI); 
    console.log(firstLI.search(60));
    console.log(firstLI.toArray());
    console.log(firstLI.toString());
}