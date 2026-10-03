let first = [];
const enter = function(){
let num1 = document.getElementById("num1").value ;


if(first.includes(num1)){
  document.getElementById("second").innerHTML="Name already exist" ;
  return;
}
  first.push(num1);


document.getElementById("first").innerHTML= first;
document.getElementById("third").innerHTML= first;
document.getElementById("num1").value="" ;
document.getElementById("second").innerHTML="";
}
// ====================second=============
let chance = 3;
function guess(){
    let number= 30;
    let num1 = document.getElementById("num1").value ;
    if(num1==number){
        document.getElementById("first").innerHTML="Hurrah! you guess the number." ;
 }
 chance--;
 if(chance===2)  {
    document.getElementById("first").innerHTML="You have lost a chance" ;
 } else if ( chance===1){
     document.getElementById("first").innerHTML="You have lost second chance" ;
 } else if ( chance===0){
     document.getElementById("first").innerHTML="You have lost third chance";
     return;
 }

 document.getElementById("num1").value = "" ;
}