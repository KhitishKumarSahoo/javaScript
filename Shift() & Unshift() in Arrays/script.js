//Shift array method
//Example-->1
const numbers = [1, 2, 3, 4, 5]

//The shift() method removes the first element from an array and returns that removed element. 
// This method changes the length of the array.
numbers.shift()

console.log(numbers);


//Example-->2
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);

console.log(firstElement);


                                              //Unshift array method
                                                  //Example-->1

const number = [1, 2, 3, 4, 5]

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
number.unshift(0)
number.unshift(-1)

console.log(number);


//Example-->2
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);

//Example-->3 putting Reverse order
arr = [4, 5, 6]; 

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);


