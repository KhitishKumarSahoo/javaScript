                                           //Include() method

const evenNumbers = [2, 4, 6, 8,]
const Animals = ['lion', 'tiger', 'dog', 'cat',]

//includes() method is used to check if an array includes a certain element.
// This method returns true if the array contains the element, and false if not.
evenNumbers.includes(3) // false
evenNumbers.includes(4) // true

const isInclude1 =  evenNumbers.includes(3)
const isInclude2 =  evenNumbers.includes(4)

console.log(isInclude1,isInclude2);


                                           //reverse() method

const Numbers = [2, 4, 6, 8,] 

//reverse() method is used to reverse the elements in an array.
// The first array element becomes the last, and the last array element becomes the first.
const newNumber = Numbers.reverse()

console.log(newNumber);