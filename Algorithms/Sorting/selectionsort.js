function selectionsort(){
    sortD();
    /*
    var disArr = randomArray2(5);
    console.log(disArr);
    var ndex;
    let j = 0;
    let i = 0;
    for(j=0; j<disArr.length; j++){
        ndex = j;
        for(i= j+1 ; i<disArr.length; i++){
            //console.log(i);
            if(disArr[ndex] > disArr[i]){
                ndex = i;
                //console.log(ndex)
            }
        }
        if(ndex != j){
            let temp = disArr[j];
            disArr[j] = disArr[ndex];
            disArr[ndex] = temp;
        }
    }
    console.log(disArr);
    */
}

function sortD()
{
    var arraay = randomArray2(10);
    var index;
    for(i=0; i<arraay.length; i++){
        index = i;
        for(j=i+1; j<arraay.length; j++){
            if(arraay[index] > arraay[j])
                index = j;
        }
        if(index!=i){
            [arraay[index],arraay[i]] = [arraay[i],arraay[index]]
        }
    }
    console.log(arraay);
}

function randomArray2(arrLength){
    let tempArr = [];
    for(i=0; i<arrLength; i+=1)
        tempArr.push(Math.floor(Math.random() * arrLength));
    return tempArr
}