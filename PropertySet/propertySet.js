//I should use hash algorithm here 
//I am feeling so sleepy so i am using object
//I will fix this later
class Data{
    constructor(key,value){
        this.Key = key;
        this.Value = value;
    }
}

class PropertySet{
    constructor(){
        this.Data = [];
    }
    GetProperty(key){
        let value = null;
        if(this.Data.length){
            let i = 0;
            for(i=0; i<this.Data.length; i++){
                if(this.Data[i].Key == key){
                    value = this.Data[i].Value;
                    break;
                }
            }
            return value;
        }else{
            return null;
        }
    }
    SetProperty(key,value){
        let newData = new Data(key,value);
        this.Data.push(newData);
        return true;
    }
}

let psFunction = ()=>{
    let psInp = new PropertySet;
    //let anArray = [];
    //anArray[0] = '12345';
    //anArray[1] = 'Active';
    //console.log(anArray);
    psInp.SetProperty("ID","1234");
    psInp.SetProperty("Status","Active");
    //console.log(psInp);
    console.log(psInp.GetProperty("ID"));
    console.log(psInp.GetProperty("File_Id"));
}
