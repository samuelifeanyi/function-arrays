// Arrays
let frontEnd = ["Samuel", "Conquered", "Emmanuel", "Ifeanyi", "Toby"]

// First Element of the Array
console.log(frontEnd[0])

// Last Element of the Array
console.log(frontEnd[frontEnd.length - 1])


// Array Method (Mutating Method)
frontEnd.push("Ben", "Wisdom")

frontEnd.pop()

console.log(frontEnd)


// array methods

//modifying arrays (mutator methods)
//push() - adds to the end of the array
let fruits = ["apple", "banana"];
fruits.push("cherry", "mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

//pop() - removes from the end
const removedFruit = fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(removedFruit); // "mango"

//unshift() - add to the beginning of the array
let removedFruit1 = fruits.shift();
console.log(fruits); // ["banana", "cherry"]
console.log(removedFruit1); // "apple"

//shift() - remove from the beginning
fruits.unshift("pawpaw", "guava");
console.log(fruits); // ["pawpaw", "guava", "banana", "cherry"]

//slice() - creates and returns a shallow copy of a portion of a array into a new array object
const numbs = [1, 2, 3, 4, 5, 6, 7, 8];
//slice(start, end)
const slicedNumbs = numbs.slice(1, 4);
console.log(slicedNumbs); // [2, 3, 4]
console.log(numbs); // [1, 2, 3, 4, 5, 6, 7, 8]

//splice() - add, remove or replace elements
//splice(start, deleCount)
const splicedNumbs = numbs.splice(0, 3);
console.log(splicedNumbs); // [1, 2, 3]
console.log(numbs); // [4, 5, 6, 7, 8]

//sort() - sort elements
//sort(compareFunction)
const integers = [3, 7, 4, 45, 0, 23, 48, 2, 9]
integers.sort((a, b) => a - b);
console.log(integers); // [0, 2, 3, 4, 7, 9, 23, 45, 48]

//reverse() - reverse element order
const reversedIntegers = integers.reverse();
console.log(reversedIntegers); // [48, 45, 23, 9, 7, 4, 3, 2, 0]

//fill() - fills with a static value

// Accessing and iterating methods
//concat() - merge arrays
const webStudents = ["Conquered", "Ifeanyi", "Amadi", "Emmanuel", "Joshua", "Precious"];
const designStudents = ["Nk", "Bob", "Joy", "Khloe", "Kunle"];
const allStudents = webStudents.concat(designStudents);
console.log(allStudents); // ["Conquered", "Ifeanyi", "Amadi", "Emmanuel", "Joshua", "Precious", "Nk", "Bob", "Joy", "Khloe", "Kunle"]


//indexOf() and lastIndexOf() - find element imdex

//includes() - check for a value presence - check whether an array contains a specified element, returning true or false
console.log(allStudents.includes("silas")); // false
console.log(allStudents.includes("Khloe")); // true

//find() - returns the value of the first element in the array that satisfies the provided testing function.
//find(callback function)
const found1 = allStudents.find((student) => student.startsWith("K"))
console.log(found1); //
const found2 = integers.find((element) => element > 40);
console.log(found2); //

//forEach() - executes a function for each element and does not return a new array
//forEach(callback) forEach(() => {})
const numbers = [1, 3, 5, 7, 9];
numbers.forEach((num) => {
    console.log(num * 3)
}) // [3, 9, 15, 21, 27]

//map() - creates a new array with a function results
const evenNumbers = [2, 4, 6, 8, 10];
const multiplyBy2 = evenNumbers.map((elem) => elem * 2)
console.log(multiplyBy2); // [4, 8, 12, 16, 20]
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//filter() - creates a new array with elements that pass a test/condition
const filterEvenNumbers = reversedIntegers.filter((elem) => elem % 2 === 0);
console.log(filterEvenNumbers); // [48, 4, 2, 0]

const filterStudents = allStudents.filter((elem) => elem.startsWith("K"));
console.log(filterStudents); // ['Khloe', 'Kunle']

const longStudentNames = allStudents.filter((name) => name.length > 3)
console.log(longStudentNames)

const filterBySearch = allStudents.filter((word) => word.toLocaleLowerCase().includes("am"));
console.log(filterBySearch); // ['Amadi']



//reduce() - reduces to a sinle value


// // Non-mutating Method
// // []
// let filteredfrontEnd = frontEnd.filter((element) => {
//     console.log(element);
//     return true;
// });

// console.log(filteredfrontEnd)