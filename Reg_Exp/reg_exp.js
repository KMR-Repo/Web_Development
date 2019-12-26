function Decimal_Calc()
{
    var input = document.getElementById("Input").value;
    var sregExp = new RegExp;
    sregExp = /^[0-9.]*$/;
    var test = input.match(sregExp);
    //console.log("KMR" + input.match(/^(?=K.)(?=M.)(?=R.)$/));
    if (test == null)
    {
        document.getElementById("Output_UI").innerHTML = "00.00";
        alert("Data should be digit");
    }
    else 
    {
        sregExp = /^\d+(\.\d{1,2})?$/;
        test = input.match(sregExp);
        if(test == null)
        {
            document.getElementById("Output_UI").innerHTML = "00.00";
            alert("Only 2 digits allowed in input");
        }
        else
            document.getElementById("Output_UI").innerHTML = input;
    }
    console.log(test);
    return ;
}

/*
function Reg_Exp()
{
    var sRegExp = document.getElementById("Input").value
    //var sRegExp = "Test";
    var test = 'ABC';
    //console.log(test[0]);
    var sMatch = /^[A-Za-z0-9.?]*$/;
    var test = ("." + sRegExp.match(sMatch)).match(/^[.?]*$|^\.null$/);
    console.log(test);
    if(test != null)
    {
        alert("Error in regular Expression");
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
}
*/