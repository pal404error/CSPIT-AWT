let x = 10;
const PI = 3.14;
const add = (a, b) => a + b;
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(` name is ${this.name} and ${this.age} years old.`);
  }
}

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched successfully!"), 2000);
});

const mySymbol = Symbol('mySymbol');

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
