function item(sName,sPrice,nCount){
    this.Name   = sName;
    this.Price  = sPrice;
    this.Count  = nCount;
    this.totalPrice = parseFloat(sPrice) * parseInt(nCount);
}

var itemDetails = {
    name : [
        'Corn1',
        'Corn2', 
        'Corn3',
        'Corn4'
    ],
    price : [
        10,
        20,
        30,
        40
    ]
}

//var orderedItems = [];

var display = "";

//console.log(itemDetails.items[0]);
function orderDetails(){
    var orderedItems = [];
    //let newItem = new item('Corn',10,2)
    //console.log(newItem.totalPrice());

    //console.log(document.getElementsByTagName('span'));
    //let items   =   document.getElementsByTagName('input');
    let items   =   document.getElementsByName('item');
    var tItems = 0;
    var tPrice = 0;
    display = "";

    for (i=0; i<items.length; i++)
    {
        //console.log(items[i].checked);
        if(items[i].checked)
        {
            let count = document.getElementById(itemDetails.name[i] + 'Count').value;
            let orderItem = new item(itemDetails.name[i], itemDetails.price[i], count);
            orderedItems.push(orderItem);
        }
    }
    for (i=0; i<orderedItems.length; i++)
    {
        tItems += parseInt(orderedItems[i].Count);
        tPrice += parseFloat(orderedItems[i].totalPrice);
        display += "\n \t Item : " + orderedItems[i].Name + " No : " + orderedItems[i].Count + " Price : " + orderedItems[i].totalPrice;
    }
    display += "\n \t Total Items : " + tItems + "Total Price : " + tPrice;
    console.log(orderedItems);
    console.log(tItems);
    console.log(tPrice);
    console.log(display);
}

let displayDetails = () => alert(display);

function onCheck(itemId){
    var curItem  = document.getElementById(itemId).checked;
    if(curItem)
        document.getElementById(itemId + 'Count').value = 1;
    else
        document.getElementById(itemId + 'Count').value = 0;
}