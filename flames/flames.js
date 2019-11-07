function flames_calculation()
{
    var name1 = document.getElementById("name1").value
    var name2 = document.getElementById("name2").value
    var Name = name1 + name2;
    var splittedname = Name.split("");
    splittedname = splittedname.sort().filter(function(elem, index, arr) {
        return index == arr.length - 1 || arr[index + 1] != elem
      });
    confirm(splittedname.length);
    /*
    var final = "";
    //console.log(test);
    for(i=0, i<splittedname.length, i++)
    {
        
    }
    confirm(splittedname);
    */
}