dog = {
    name: 'Max',
    breed: 'Dachshund',
    age:5,
    weightInPounds:12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}


function getDog(name, breed, age, weightInPounds) {
    return {
        name: name,
        breed: breed,
        age: age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!')
        }
    }
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);

anotherDog.eat();

let newObj = {};

// let newObj = new Object();

new String();
new Boolean();
new Number();


function add (num1, num2) {
    return num1 + num2;
}

const n = add;

console.log(n.length);

const Programmer = new Function('name',`
    this.name = name;
    this.writeCode = function() {
        console.log("Code in JavaScript");
    }
`);

const newProgrammer = new Programmer('faneva');
console.log(newProgrammer.writeCode());


//assign
let a = { value: 10};
// let b = {};
let b = {...a};

// Object.assign(b, a);
b.value = 20;

let min = 1;
let max = 10;

const randomNum = Math.round( Math.random() * (max - min) + min);

console.log(randomNum);

//startsWidth
//endsWidth
//replace
//trim

const emplyees = [
    { id: 1, name: 'Alice', email: 'Alice@gmail.com'},
    { id: 2, name: 'Steven', email: 'Steven@gmail.com'},
    { id: 3, name: 'Joe', email: 'Joe@gmail.com'},
];

const updateEmployees = emplyees.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase(),
    name: employee.name.toLocaleLowerCase()
}));

console.log(updateEmployees);