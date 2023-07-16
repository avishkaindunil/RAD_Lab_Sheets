class Rectangle {
    constructor (height, width, name) {
        this.height = height;
        this.width  = width;
        this.area = (height * width);
        this.name = name;
    }

    getDetails(){
        return (`Width of the rectangle is ${this.width}.`);
    }

    getArea(){
        return (`Area of the ${this.name} is ${this.area}`);
    }
}

const rec1 = new Rectangle (20, 10, "rectangle 1");
const rec2 = new Rectangle (30, 20, "rectangle 2");

console.log(rec1.getArea());
console.log(rec2.getArea());