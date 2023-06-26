//Question 01
document.write("<b>Question 01 </b><br><br>");
const currentTime = new Date();
const currentHour = currentTime.getHours();

if (currentHour < 10) {
  document.write("Good morning");
} else if (currentHour < 20) {
  document.write("Good day");
} else {
  document.write("Good evening");
}

//Question 02
document.write("<br><br><b>Question 02 </b><br><br>");
const fruit = "banana";

switch (fruit) {
  case "banana":
    document.write("Yellow<br><br>");
    break;
  case "pineapple":
    document.write("Orange<br><br>");
    break;
  case "apple":
    document.write("Green<br><br>");
    break;
  default:
    document.write("Unknown fruit<br><br>");
}

//Question 03

function largestNumber() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let number3 = parseFloat(document.getElementById("number3").value);

    let largestNumber;

    if (number1 >= number2 && number1 >= number3) {
        largestNumber = number1;
    } else if (number2 >= number1 && number2 >= number3) {
        largestNumber = number2;
    } else {
        largestNumber = number3;
    }

   document.write("Largest Number Is: " + largestNumber);
}

//Question 04

function primeNumber(){
    let number = parseFloat(document.getElementById("number").value);

    let isPrime = true;

    if (number === 1) {
        isPrime = false;
        } else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
            }
        }
        } else {
            isPrime = false;
    }

    if (isPrime) {
        document.write(number + " is a prime number.");
    } else {
        document.write(number + " is not a prime number.");
    }

};


