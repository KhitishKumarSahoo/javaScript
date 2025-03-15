
const evenNumbers = [2, 4, 6, 8,]
const Animals = ['lion', 'tiger', 'dog', 'cat',]
const oddNumbers = ['Sahoo', 3, 5]

// concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

// evenNumbers.concat(Animals)
const addedNumbers1 = evenNumbers.concat(Animals)
const addedNumbers2 = Animals.concat(evenNumbers,oddNumbers)

console.log(addedNumbers1);
console.log(addedNumbers2);