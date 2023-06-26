//Question 01
document.write("<b>Question 01 </b><br><br>");

const mammal = {
    color: "orange",
    type : "cat",
    legs : 4,
    name : "kitty",
    speed: 24
}

document.write("Type : " ,mammal.type, "<br> ", "Name : ", mammal.name);


//Question 02
document.write("<br><br><b>Question 02 </b><br><br>");
const person = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

document.write(person.fullName());

//Question 03
document.write("<br><br><b>Question 03 </b><br><br>");
const triangle = {
    height: 25,
    base: 24,
    color: "red",
    getArea: function() {
      return 0.5 * this.base * this.height;
    }
  };
  
  document.write("Height: " + triangle.height + "<br>");
  document.write("Base: " + triangle.base + "<br>");
  document.write("Color: " + triangle.color + "<br>");
  document.write("Area: " + triangle.getArea() + "<br>");