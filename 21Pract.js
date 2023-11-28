const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
 
let compose = (...fns) => val => fns.reduceRight((result, f) => f(result), val);

const parseString = (seperator) => (x) => x.join(seperator)
 
const log = (str )=> {
    console.log(str);
}

let modifyArray = (modyficaCondition) => (array) => array.map(modyficaCondition)

let allToLower = compose(log, parseString(' - '), modifyArray(str => {return str.toLowerCase()}))

let capitalizeAllFirst = compose(log, parseString(' - '), modifyArray(str => {return(str[0].toUpperCase() + str.substring(1))}))

allToLower(arr);

capitalizeAllFirst(arr)
