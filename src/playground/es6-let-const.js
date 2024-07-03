var nameVar = 'Bhavana';
var nameVar = 'Keerthi';
console.log('nameVar', nameVar);

let nameLet = 'Manju';
nameLet = 'Reddy';
console.log('nameLet', nameLet);

const nameConst = 'Manu';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Bhavana Hariprasad';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);