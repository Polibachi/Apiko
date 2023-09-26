const initialArray = [2, 3, 1, 3, 3, 7,5,1,2,6,54,7,,4,3,245,2,51,,124124,1,24,4,1,2,4,2,1,4,5,5,4,6,3,7,5];

function unicFn(initialArray) {
    const res = initialArray.reduce((acc, value) => {
        if(initialArray.includes(value)&!acc.includes(value)){
            acc.push(value);
        }
        return acc;
    }, [])
    return res;
   }
   //console.log(unicFn(initialArray));

   const secondArr = [2,8,4,6,10];

   function isEvenArray(initialArray) {
    const isParne = val => val %2 == 0;
    if(initialArray.every(isParne)){
        return true;
    }else return false;
   }
   //console.log(isEvenArray(secondArr));

  const thirdArr = [2, "string", 3, , , "test"];

   function filterArray(array) {
    const res = [];
    array.forEach(element => {
        if(typeof(element) == "string"){res.push(element);};
    });
    return res;
   }
    //console.log(filterArray(thirdArr));

personsArr = [ 
    {name: "Max",  age: 23, city: "London"},
    {name: "Mike", age: 20, city: "NY"},
    {name: "Sike", age: 22, city: "London"},
    {name: "Bike", age: 18, city: "Kiyiv"}];

    function findUser(persons) {
        const res = persons.filter(res => res.age > 18 & res.city == "London");
        return (res.map(names => names.name));
       }
    //console.log(findUser(personsArr));

    function removeObj(arrayOfObj, keyName, value) {
        
        const res = arrayOfObj.filter((element) => (Object.keys(element) != keyName || Object.values(element) != value));
        //console.log();
        return JSON.stringify(res);
        }
         
        const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
        removeObj(arr, "age", 2);
        removeObj(arr, "year", 2);
    //console.log(removeObj(arr, "age", 2));

