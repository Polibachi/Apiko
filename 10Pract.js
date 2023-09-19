function printPowsOf2(number) {
  console.log(typeof(number));
  if (typeof(number)=='number'){
    let res = 2;
    while(res<number){
      res=res*2;
      if(res<=number){
        console.log(res);
      }
    }
  }else{
    console.log("Wrong Input: " +number);
  }
 }
//   console.log("1st test")
//  printPowsOf2("302");
//  console.log("2nd test")
//  printPowsOf2(null);
//  console.log("3rd test")
//  printPowsOf2(128);
//  console.log("4th test")
//  printPowsOf2(60);

function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let sum = 0;
  initialArray.forEach((element) => {if (typeof(element)=='number'){
    sum = sum + element;
  };})
  return sum;
 }
  
//  console.log(calculateSumOfArray());

function printSeasonByMonth(month) {
  switch (month) {
    case 'MARCH':
    case "APRIL":
    case "MAY":
      console.log('Its Spring');
      break;
    case 'JUNE':
    case "JULY":
    case "AUGUST":
      console.log('Its Summer');
      break;
    case 'SEPTEMBER':
    case "OCTOBER":
    case "NOVEMBER":
      console.log('Its Fall');
      break;
    case 'DECEMBER':
    case "JANUARY":
    case "FEBRUARY":
      console.log('Its Winter');
      break;
    default:
      console.log(`Неправильно введено місяць: ${month}.`);
  }
 }
  
//  printSeasonByMonth("SEPTEMBER");
//  printSeasonByMonth("NOVEMBER");
//  printSeasonByMonth("JULY");
//  printSeasonByMonth("APRIL");

 function calculateWordsInString(string) {
    let i = 0;
    res = (string.split(" ").forEach(element => {if(element){
      i++;
    }}) )
    console.log (i);
    return i;

 }
 calculateWordsInString("Easy string for count");
 calculateWordsInString("Easy");
 calculateWordsInString("Some string with a triple   space");
 calculateWordsInString("Some?  string, with a triple   space");