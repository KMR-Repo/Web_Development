function bubbleSort(){
    let disArray = randomArray(10);
    let temp;
    console.log(disArray);
    for(j=disArray.length; j >0; j--){
        for(i=0; i < j; i++){
            if(disArray[i] > disArray[i+1]){
                temp = disArray[i];
                disArray[i] = disArray[i+1];
                disArray[i+1] = temp;
            }
        }
    }
    console.log(disArray);
}

let randomArray = (arrLength) =>{
    let tmpArray = [];
    for(i=0; i< arrLength; i++){
        let temp = Math.floor(Math.random() * arrLength);
        tmpArray.push(temp);
    }
    return tmpArray;
}