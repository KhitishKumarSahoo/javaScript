let username = 'Sahoo'

const user = {
  firstName: 'Khitish',
  lastName: 'Sahoo',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
 
//   age: 15,
//   isGraduate: false,
}

//in Object if we want to delete any keyword...then we can simply write-->
delete user.firstName

//in Object if we want to Add any keyword...then we can simply write-->
user.mobileNumber = '1234567890'

//in object if we want to change any existing keyword...then we can simply write-->
username = 'Kumar'


//sealed object means we can't add or delete any keyword but we can change the existing keyword
Object.seal(user)

//freeze object means we can't add or delete or change any keyword
Object.freeze(user)

//is keyword is used to check whether the keyword is present in the object or not
console.log('isGraduate' in user); //false
console.log('state' in user); //True