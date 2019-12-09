var person = {
    name : "Muthu Ramendiran",
    set_name : function (new_name){
        var reg = new RegExp(/\d+/);
        //console.log(reg.test(new_name));
        //console.log(new_name);
        if(reg.test(new_name))
            //alert('Invalid Name');
            this.name = "Invalid Name"
        else
            this.name = new_name;
    },
    get_name : function (){
        return (this.name);
    }
};
function data_validation()
{
 var data = document.getElementById("Input").value;
 person.set_name(data);
 alert(person.get_name());
}