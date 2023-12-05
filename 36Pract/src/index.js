import User from './services/user.js';
import {someName as urlReg} from './constants/regex.js';
import {emailReg, phoneReg} from './constants/regex.js';



const testUserList = [
  {
    name: "Max",
    email: "Max@gmail.com",
    phoneNumber: "0999",
    businessSite: "google.com"
  },
  {
    name: "John",
    email: "John@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "http/google.com"
  },
  {
    name: "Alex",
    email: "Alex@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Mike",
    email: "Mike.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Ben",
    email: "Ben.com",
    phoneNumber: "qwejviep",
    businessSite: "https://google.com"
  }
];

const resultUserList = [];

for (const user of testUserList) {
  const isEmailValid = emailReg.test(user.email);
  const isPhoneNumberValid = phoneReg.test(user.phoneNumber);
  const isBusinessSiteValid = urlReg.test(user.businessSite);

  if (isEmailValid && isPhoneNumberValid && isBusinessSiteValid) {

    const newUser = new User(user.name, {email: user.email, phoneNumber: user.phoneNumber,
      businessSite: user.businessSite});
    resultUserList.push(newUser);}
      
  
}

console.log(JSON.stringify(resultUserList));


const reg = /[a-z]/ 
console.log(reg.test("g")) // поверне true
console.log(reg.test("G"))// поверне false
console.log(reg.test("123")) // поверне false
console.log(reg.test(123)) // поверне false

 

