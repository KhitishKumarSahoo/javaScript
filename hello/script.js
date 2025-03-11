const username = prompt('Please enter your Name:')
const userAge = prompt('Please enter your Age:')

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);


if(userAge >= 20){
    console.log('He is a college student');
    console.log('user is a working professional');

}
else{
    console.log('He is a school Student');
    console.log('user is not a working professional');
}