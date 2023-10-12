
// Вивід глобальної змінної в функції
let globalVar = 1337;

function globalScope (someVar) {
    console.log(someVar);
}


// Вивід змінної функції в та поза ф-єю
function functionScope () {
    let functionVar = 322;
    console.log(functionVar);
}


// Вивід змінної в блоці функції в  та поза блоком
function blockScope () {
    {let blockVar = 1945;
    console.log(blockVar);}
    try{console.log(blockVar);}catch{console.log("error2")}
}

function firstTask () {
    console.log("globalVar:");
    globalScope(globalVar);

    console.log("functionVar:");
    functionScope();
    try {console.log(functionVar);} catch{console.log("error")}

    console.log("blockVar:");
    blockScope();
}
console.log("1 завдання:")
firstTask();
///////////////


const car = {
    name : "Tesla",
    model : "X",
    info: showCarInfo
   };
    
   function showCarInfo(car) {
        console.log(`name: ${this.name}, model: ${this.model}`);
   }
   console.log("2 завдання:")
car.info();
const getCar = car.info;
getCar();
const binded = getCar.bind(car);
binded();

////////////////////////

const cat = {
    sound: 'meow',
    greet: function() {
      setTimeout(function() {
          console.log(this.sound)
      }.bind(this), // write fix in this line of code
      0)
    }
   };

/////////////// 3 Завдання:
cat.greet();


const dog = {
    sound: 'bark',
    greet: function() {
        setTimeout(() => 
            console.log(this.sound)
        ,0)
      }
   }
   
////////////////// 4 Завдання:
dog.greet();


let convert = bytes => `${(bytes / 1000000).toFixed(2)} Mb`;

function call(func, value) {
  console.log(func(value));
}
console.log("5 завдання:")
call(convert, 42000);

/////////////////////////////////

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
   };
    
   function logPersonNameAndInterests() {
       const fullName = Person.getFullName.call(Person);
       const interests = Array.from(arguments);
       console.log(`${fullName} loves: ${interests}`);
   }
   
   const testArgs = ['sushi', 'hiking'];
   
   console.log("6 завдання:")
   logPersonNameAndInterests.apply(Person, testArgs);
   
   ////////////////////