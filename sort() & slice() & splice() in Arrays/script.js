                                                 //Sort() method

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0] //in numerical order
const Animals = ['Lion', 'Tiger', 'Dog', 'Cat','Elephant', 'Zebra', 'Giraffe', 'Cow'] //in alphabetical order

//in this Case, the first letter of each word is in uppercase. so the sort() method will sort the elements in an array in alphabetical order based on the first letter of each word.
const Animals2 = ['Lion', 'tiger', 'Dog', 'cat','Elephant', 'zebra', 'giraffe'] 

//sort() method is used to sort the elements in an array.
// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

const sortedNumbers = evenNumbers.sort()
const sortedAnimals = Animals.sort()
const sortedAnimals2 = Animals2.sort()

console.log(sortedNumbers, sortedAnimals, sortedAnimals2);



                                                //Slice() method


const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0] 

//slice() method is used to extract a section of an array and returns a new array.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// The original array will not be changed.
const arrreverse = arr.slice(4)
console.log(arrreverse);

//The slice() method can take two arguments like this:
//slice(start, end)
//The start argument is the index of the first element to include in the new array.
//The end argument is the index of the first element to exclude from the new array.
const arrreverse2 = arr.slice(3, 8)
console.log(arrreverse2);



                                                //Splice() method
                        

const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y']

//splice() method is used to add or remove elements from an array.
// The first argument specifies the location at which to begin adding or removing elements.
// The second argument specifies the number of elements to remove.

const removeVowel = Vowels.splice(1, 1)
console.log(removeVowel);
console.log(Vowels);

const removeVowel2 = Vowels.splice(2, 1)
console.log(removeVowel2);
console.log(Vowels);

// The third and subsequent arguments are optional; they specify elements to be added to the array.
const removeVowel3 = Vowels.splice(2, 2, 'dog', 'Cat')
console.log(removeVowel3);
console.log(Vowels);

