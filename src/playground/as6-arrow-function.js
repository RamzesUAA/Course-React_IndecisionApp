// function square(x){
//     return x*x;
// }

 //console.log(square(2));
 // const squareArrow = (x) => {
 //     return x*x
 // };
 //const squareArrow = (x) => x * x;
// console.log(squareArrow(9));


function getFirstName(fullName){
    return fullName.split(' ')[0];
}

const regArrowFirstName = (fullName) => fullName.split(' ')[0];

const shorthandArrowFirsName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(regArrowFirstName('John Smoth'));
console.log(shorthandArrowFirsName('Andrew Mead'));
console.log(regArrowFirstName(getFirstName('Roman Alberda')));