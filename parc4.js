var x = prompt("Enter a number");
var num = parseInt(x);
// var num = 5;
let result = 1;
 let fact = (num)=>{
    try {
    if(num == 0){ return 1;}
    return num * fact(num-1);
    
} catch (error) {}
 };
 console.log(fact(num))
document.getElementById("ans").innerHTML= fact(num);