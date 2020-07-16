// arguments object - no longer bound with arrow function

const add = (a, b) => {
 //   console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 2));

//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Lviv', 'Kyiv', 'Varshava'],
    printPlacesLived(){
    return this.cities.map((city)=> this.name + ' has lived in ' + city);
       
    }
};

console.log(user.printPlacesLived()) ;
 
//Challenge area 

const multiplier = {
    numbers: [1,2,3,4],
    multipyBy: 2,
    multiply(){
        return this.numbers.map((digit) => digit * this.multipyBy);
    }
}

console.log(multiplier.multiply());