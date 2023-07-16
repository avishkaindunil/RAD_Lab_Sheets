// Define the Dog class
class Dog {
    constructor(breed, age, color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    eat() {
        console.log(`${this.breed} is eating.`);
    }

    sleep() {
        console.log(`${this.breed} is sleeping.`);
    }

    sit() {
        console.log(`${this.breed} is sitting.`);
    }

    run() {
        console.log(`${this.breed} is running.`);
    }
}

// Create Dog objects
const dog1 = new Dog("Pug", "3 Years", "Black");
const dog2 = new Dog("Boxer", "2 Years", "White");
const dog3 = new Dog("Poodle", "1 Year", "Brown");

// Display one property and one method for each dog object
console.log(`Dog 1: Breed = ${dog1.breed}, Age = ${dog1.age}`);
dog1.sleep();

console.log(`Dog 2: Breed = ${dog2.breed}, Age = ${dog2.age}`);
dog2.eat();

console.log(`Dog 3: Breed = ${dog3.breed}, Age = ${dog3.age}`);
dog3.run();
