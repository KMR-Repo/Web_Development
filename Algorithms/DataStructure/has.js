//HasTable Object
class HasTable{
    constructor(nLength){
        this.Buckets = new Array(nLength);
    }
    HasCode(key){//to create a hash code
        let hashCode;
        let ascii = 0;
        let i=0;
        for(i=0; i< key.length; i++)
            ascii+=(key.charCodeAt(i));
        //console.log(ascii);
        hashCode = ascii%this.Buckets.length;
        //console.log(hashCode);
        return hashCode;
    }
    put(key){
        this.Buckets[this.HasCode(key)] = key;
    }
    get(key){
        return this.Buckets[this.HasCode(key)];
    }
}

let hasDS = ()=>{
    let firstHashTable = new HasTable(11);
    with(firstHashTable){
        put('Mia');
        put('Tim');
        put('Bea');
        put('Zoe');
        put('Jan');
        put('Ada');
        put('Leo');
        put('Sam');
        put('Lou');
        put('Max');
        put('Ted');
    }
    console.log(firstHashTable);
}