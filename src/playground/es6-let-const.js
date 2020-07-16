var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log(nameConst);

const fullName = 'Roman Mead';
let  firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);