//Question 05
document.write("<br><br><b>Question 05 </b><br><br>");
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
      document.write(i,"<br>");
    }
};

//Question 06
document.write("<br><br><b>Question 06 </b><br><br>");
const array = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < array.length; i++) {
  document.write(array[i], "<br>");
}

//Question 07
document.write("<br><br><b>Question 07 </b><br><br>");
const numbers = [80, 30, 40, 50, 23];
document.write(numbers, "<br>"); //Old array

// i. Change the element in second index to 78.
numbers[2] = 78;

// ii. Length of the array.
const length = numbers.length;

// iii. Sort the array.
numbers.sort();
document.write(numbers,"<br>");   //New array
document.write(length, "<br>");    //Length of the array

//Question 08
document.write("<br><br><b>Question 08 </b><br><br>");
const names = ["sadun", "kamal", "nimal", "ruwan"];
document.write(names, "<br>");

// i. Convert the array into a string.
const namesString = names.join(", ");

// ii. Remove the last element.
names.pop();
document.write(names,"<br>")

// iii. Add a new item called "nuwani".
names.push("nuwani");

document.write(namesString);  //Array as a string
document.write(names);        //New array

//Question 09
document.write("<br><br><b>Question 09 </b><br><br>");
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
document.write(myGirls, "<br>", myBoys, "<br>");

//Merge the two arrays
const mergedArray = myGirls.concat(myBoys);
document.write(mergedArray);  //Merged array

//Question 10
document.write("<br><br><b>Question 10 </b><br><br>");
const numbersArray = [1, 13, 22, 123, 49];
document.write(numbersArray, "<br>");

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
document.write("The sum of all numbers is: " + sum);
