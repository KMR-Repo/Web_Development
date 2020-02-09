class heap{
    constructor(){
        this.Items = [];
    }
    Size(anArray = this.Items){
        return (this.Items.length-1);
    }
    getLeftChildIndex(parentIndex){
        return (Math.floor(parentIndex*2 + 1));
    }
    getRightChildIndex(parentIndex){
        return (Math.floor(parentIndex*2 + 2));
    }
    geParentIndex(childIndex){
        return(Math.floor((childIndex-1)/2));
    }
    
    hasLeftChild(parentIndex){
        return (this.getLeftChildIndex(parentIndex) <= this.Size());
    }
    hasRightChild(parentIndex){
        return (this.getRightChildIndex(parentIndex) <= this.Size());
    }
    hasParent(childIndex){
        //console.log(childIndex)
        return (this.geParentIndex(childIndex) >= 0);
    }

    leftChildValue(parentIndex){
        return(('undefined' == typeof(this.ret = this.Items[this.getLeftChildIndex(parentIndex)])) ? 'NoLeftChild' : this.ret )
    }
    RightChildValue(parentIndex){
        return(('undefined' == typeof(this.ret = this.Items[this.getRightChildIndex(parentIndex)])) ? 'NoRightChild' : this.ret )
    }
    ParentValue(childIndex){
        return(this.Items[this.geParentIndex(childIndex)])
    }
    swap(index1,index2){
        [this.Items[index1],this.Items[index2]]=[this.Items[index2],this.Items[index1]];
    }
    Peek(){
        if(this.Size() == '-1')
        throw('No Element Present in an array');
        else 
        return this.Items[0];
    }
    poll(){
        if(this.Size() == '-1')
        throw('No Element Present in an array');
        else{
        let heap = this.Items[0];
        this.Items[0] = this.Items.pop(); 
        heapifyDown();
        }
    }
    heapifyUp(){
        let sIndex = this.Size();
        //console.log(this.ParentValue(sIndex) + ' ' +  this.Items[sIndex]);
        while(this.hasParent(sIndex) && this.ParentValue(sIndex) > this.Items[sIndex]){
            console.log(sIndex);
            this.swap(this.geParentIndex(sIndex),sIndex);
            sIndex = this.geParentIndex(sIndex);
        }
    }
    add(sItem){
        this.Items.push(sItem);
        this.heapifyUp();
    }
}

let heapMin = () =>{
    let firstHeap = new heap();
    console.log(firstHeap);
    /*
    with(firstHeap.Items){
        push(3);
        push(4);
        push(8);
        push(9);
        push(7);
        push(10);
        push(9);
        push(15);
        push(20);
    }
    */
    //firstHeap.swap(0,1)
    firstHeap.add(20);
    firstHeap.add(15);
    firstHeap.add(4);
    firstHeap.add(8);
    firstHeap.add(9);
    firstHeap.add(9);
    firstHeap.add(10);
    firstHeap.add(7);
    firstHeap.add(3);
}