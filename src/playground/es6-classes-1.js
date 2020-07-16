
// Setup constuctor to take name and age (default to 0)
// getDescription - Andew Mead is 26 year(s) old.

class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!`; // new es6 feature
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}   

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGretting(){
        let greeting = super.getGretting();
        if(this.location){
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }

}

// Traveler -> Person 
// Add support for homeLocation 
// Override getGreeting
// 1. Hi I am Andrew Mead. I`m visiting from Philadelphia.


const me = new Traveler('Roman Alberda', 26, 'Lviv');
console.log(me.getGretting());

const ww = new Traveler(undefined, undefined, 'Ukraine');
console.log(ww.getGretting());
