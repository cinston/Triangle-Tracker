function knowTriangle(){
var a = parseFloat(prompt("side a"));
var b = parseFloat(prompt("side b"));
var c = parseFloat(prompt("side c"));

if(isNaN(a) || isNaN(b) || isNaN(c)) {
alert("Enter a number!");
}
else if(a===b && a===c && b===c){
alert("Equilateral Triangle");
}
else if(a===b || a===c || b===c){
alert("Isosceles Triangle");
}
else if((a+b)<= c || (a+c)<=b || (b+c)<=a) {
alert("Not a Triangle");
}
else{
alert("Scalene Triangle");
}
}
