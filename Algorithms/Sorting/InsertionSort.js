function InsertionSort(){
    let inArray = randomArray2(5);
    console.log(inArray)
    let i,j;
    let temp;
    for(i=1; i<inArray.length; i++){
        temp = inArray[i];
        for(j=i-1; j>=0 && temp < inArray[j]; j--){
                inArray[j+1] = inArray[j]
                //inArray[i] = temp;
        }
        inArray[j+1] = temp; 
    }
    console.log(inArray);
}