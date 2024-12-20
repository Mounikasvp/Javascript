// search and find and write 5 examples for map, filter, forEach
// example for map method
// map:The map method creates a new array by applying a function to each element of an array.
// Convert an array of numbers to their squares:
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); 
// Output: [1, 4, 9, 16]

//Add a constant to each element in an array:
const values = [5, 10, 15];
const increasedValues = values.map(value => value + 2);
console.log(increasedValues); 
// Output: [7, 12, 17]

//Convert an array of strings to uppercase:
const words = ["hello", "world"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); 
// Output: ["HELLO", "WORLD"]


// Extract property values from an array of objects:
const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map(user => user.name);
console.log(names); 
// Output: ["Alice", "Bob"]

// Add a constant to each element in an array:
const values1 = [5, 10, 15];
const increasedValues1 = values.map(value => value + 2);
console.log(increasedValues1); 
// Output: [7, 12, 17]



//filter:
// Filter Even Numbers:
const numbers4 = [1, 2, 3, 4, 5, 6];
const evens = numbers4.filter(num => num % 2 === 0);
console.log(evens); 
// [2, 4, 6]

// Filter Strings Longer Than 3 Characters:
const strings = ['a', 'ab', 'abc', 'abcd'];
const longStrings = strings.filter(str => str.length > 3);
console.log(longStrings);
 // ['abcd']

 // Filter Objects by Property:
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 15 },
];
const adults = people.filter(person => person.age >= 18);
console.log(adults); 
// [{ name: 'Alice', age: 25 }]


// Filter Truthy Values:
const mixed = [0, 'hello', false, 42, '', null];
const truthyValues = mixed.filter(Boolean);
console.log(truthyValues);
 // ['hello', 42]

//  Filter Positive Numbers:
const nums = [-10, 15, -20, 25, 0];
const positives = nums.filter(num => num > 0);
console.log(positives); 
// [15, 25]



 //forEach:
//  Sum of Array Elements:
const numbers2 = [1, 2, 3, 4];
let sum2 = 0;
numbers.forEach(num => sum2 += num);
console.log(sum2); 
// // 10

// Modify Array Elements (In-place):
const numbers3= [1, 2, 3];
numbers3.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers3); // [2, 4, 6]


// Log Each Element:
const numbers5 = [1, 2, 3];
numbers5.forEach(num => console.log(num));
// Output: 1 2 3

// Print Array with Indices:
const items = ['apple', 'banana', 'cherry'];
items.forEach((item, index) => console.log(`${index}: ${item}`));
// Output: 0: apple 1: banana 2: cherry


// Perform Action on Array of Objects:
const users3 = [{ name: 'Alice' }, { name: 'Bob' }];
users3.forEach(user => console.log(`Hello, ${user.name}!`));
// Output: Hello, Alice! Hello, Bob!


// map: Transforms each element and returns a new array.
// filter: Filters elements based on a condition and returns a new array.
// forEach: Executes a function on each element but does not return a new array.