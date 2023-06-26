//Question 01
document.write("<b>Question 01 </b><br><br>");

let pi = 22/7;
function getArea(r){
    return (pi*(r*r));
}

function getPerimeter(r){
    return (2 *pi*r);
}

let area = getArea(7);
let perimeter = getPerimeter(7);
document.write(area, " Square Units<br>", perimeter, " Units <br><br>");


//Question 02
document.write("<b>Question 02 </b><br><br>");
function getVolume(length, width, height){
    return(length * width * height);
}

var volume = getVolume(10, 20, 30);
document.write(volume, "<br><br>");

//Question 03
document.write("<b>Question 03 </b><br><br>");
function displayAlert(text1, text2){
    return (text1 + text2);
}

var displayMessage = displayAlert("hello,", "welcome to our paradise");
document.write(displayMessage, "<br><br>");