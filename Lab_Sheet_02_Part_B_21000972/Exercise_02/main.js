//Question 01
document.write("<b>Question 01</b><br><br>");
const Mark1 = 30, Mark2 = 40, Mark3 = 90;
let total, average;

total = Mark1 + Mark2 + Mark3;
average = total/3;
document.write(total,"<br>" ,average,"<br>");

//Question 02
document.write("<br><b>Question 02</b><br><br>");
const name = "Avishka Indunil";
var age    = 23;
const gender = "Male";
document.write(name, "<br>", age, "<br>", gender,"<br>" )

//Question 03
document.write("<br><b>Question 03</b><br><br>");
function areaOfRectangle(length, width){
    return (length * width);
}

let area = areaOfRectangle(20, 50);
document.write("Area of Rectangle is(length=20, width=50): ", area, " Square Units<br><br>");

//Question 04
document.write("<b>Question 04</b><br><br>");
let a = 10, b = 20;
document.write(
    "a += b : ",a += b,"<br>",
    "a -= b : ",a -= b,"<br>",
    "a += b : ",a += b,"<br>",
    "a *= b : ",a *= b,"<br>",
    "a /= b : ",a /= b,"<br>",
    "a %= b : ",a %= b,
    "<br><br>"
);

//Question 05
document.write("<b>Question 05</b><br><br>");
let x = 5, y = 4;
var text1 = "A", text2 = "B";
document.write(
    x>=y, 
    "<br>", 
    x != y, 
    "<br>", 
    text1 < text2, 
    "<br><br>"
);

//Question 06
document.write("<b>Question 06</b><br><br>");
var statement1 = "what a very ";
var statement2 = "nice day";

var cons = statement1 + statement2;
document.write(cons, "<br><br>");

//Question 07
document.write("<b>Question 07</b><br><br>");
var x2 = 5 + 5;
var y2 = "5" + 5;
var z2 = "Hello" + 5;

document.write(x2, "<br>", y2, "<br>", z2, "<br><br>");
