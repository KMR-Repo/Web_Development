function Reg_Exp()
{
    var sRegExp = document.getElementById("Input").value
    //var sRegExp = "Test";
    var test = 'ABC';
    //console.log(test[0]);
    //var sMatch = /^[A-Za-z0-9.?]*$/;
    //var test = ("." + sRegExp.match(sMatch)).match(/^[.?]*$|^\.null$/);
var sMatch = (?=.*?[A-Za-z0-9])(?=.*[.*]).+
var test = sRegExp.match(sMatch);
    console.log(test);
    if(test != null)
    {
        alert("Error in regular Expression");
    }
    else
    {
        alert("Valid Expression");
    }
    /*
    var Test1 = test.match(/^null|[.?]*$/);
    console.log(test);
    console.log(Test1);
    */
    /*
    if(test != null)
    {
        if(test.length != 0)
        {
            for(var i = 0; i <test.length; i++)
            {
                console.log(test[i]);
            }
        }
        else
        console.log("null");
    }
    else
    {
        console.log("null");
    }
    */
}
