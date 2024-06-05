// var currentstatus=true;

// if(currentstatus==true){
//     console.log("inside the block bz condition is ture")
// }
// else{
//     console.log("inside the block bz condition is false")
// }



// var indexOfDay=6;
// if(indexOfDay==0){
//     console.log("sunday")
// }
// else if(indexOfDay==1){
//     console.log("Monday")
// }
// else if(indexOfDay==2){
//     console.log("Tuesday")
// }
// else if(indexOfDay==3){
//     console.log("Wednesday")
// }
// else if(indexOfDay==4){
//     console.log("Thursday")
// }
// else if(indexOfDay==5){
//     console.log("Friday")
// }
// else {
//     console.log("Saturday")
// }

// Switch.
var a=prompt("Enter a value of A");
var b=prompt("Enter a value of B");
var operation=prompt("Choose the operation to be performed: Add,Sub,Mul,Div,Mod,Exp");
switch(operation){
    case "Add":console.log(Number(a)+Number(b));
    break;
    case "Sub":console.log(a-b);
    break;
    case "Mul":console.log(a*b);
    break;
    case "Div":console.log(a/b);
    break;
    case "Mod":console.log(a%b);
    break;
    case "Exp":console.log(a**b);
    break;
    default: console.log("Enter the value properly in the given format :Add,Sub,Mul,Div,Mod,Exp")
}