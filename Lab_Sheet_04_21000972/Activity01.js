class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getDetails(){
        return(`Width of the rectangle is ${this.width}.`);
    }
}
const rec1 = new Rectangle ("20", "10");

console.log(rec1.getDetails());