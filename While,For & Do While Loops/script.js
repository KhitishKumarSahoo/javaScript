                                                 //While LOOPs

 // While loop is used to execute a block of code repeatedly as long as the condition is true.
 //Example-->1                                                
console.log('program Started');

let num = 0

while(num < 10){
    console.log(num);
    num++
}
console.log('Program Ended');

//Example-->2
// console.log('Program stared');

let i = 1

while(i < 101){
    console.log(i);
    i++
}
console.log('Program Ended');

//Example-->3

console.log('Program Started');

const friends = ['Akash', 'Khitish', 'Sourav', 'Suman', 'Sourav',]

    let j = 0;

    while(j < 5/*friends.length*/){
           //friends[j] = friends[j] + ' sahoo '
           console.log(friends[i]);
           console.log(`${j+1}.${friends[j]}`);
           
           j++
    }

                                                   //For Loop

// For loop is used to execute a block of code a number of times.
//Example-->1

console.log('Program Started');

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('Program Ended');

//Example-->2
//Find the even numbers between 0 to 100
console.log('Program Started');

for(let i = 0; i <= 100; i++){
    if(i %  2 ===0){
        console.log(i);
    }
}
console.log('Program Ended'); 

                                                   //Do While Loop

// Do while loop is used to execute a block of code repeatedly as long as the condition is true.
//Example-->1

console.log('Program Started');

let k = 0
do{
    console.log(k);
    k++
}
while(k < 10)

console.log('Program Ended');