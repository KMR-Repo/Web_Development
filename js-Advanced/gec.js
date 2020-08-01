//Global Execution COntext
var lConsole;
function sample(){
    if(lConsole === undefined){
        lConsole = document.getElementById('local-Window');
    }
    console.log()
    lConsole.innerText = kmr;
    var kmr = "My name";
    lConsole.innerText += kmr;
    var kmr = "This is also my name";
    
    Fun("a");
    function Fun(a){
        lConsole.innerText += "\n First Function"+a;
    }
    
    function Fun(a,b){
        lConsole.innerText += "\n Second Function"+a+b;
    }
}
