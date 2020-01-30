
function addInputFields(){
    let columnCount = document.getElementById('colmnCount').value;
    let existing = document.getElementsByName('temp');
    alert(existing.length);
    let i;
    for(i=0; i<columnCount; i++){
        let tableId = document.getElementById('table1');
        var newRow   = tableId.insertRow();
        newRow.setAttribute("name","temp")
        var newCell  = newRow.insertCell(0);
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("placeholder","Column Name")
        newCell.appendChild(x);
    }
}