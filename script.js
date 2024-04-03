/* What is Data?
   Data means "information About Anything"
   Data define "Let"
*/

// 1. Number
// Seher has  Rs.2000 in his pocket
let cash = 1500; // variable
console.log(cash);

// Seher did some eid shopping
cash = 400;
console.log(cash);

// There are 7 days in a week

const days = 7; //constant
console.log(days);

// There are 12 months in a year
const months = 12; //constant
console.log(months);

// 1 dozen eggs
const dozen = 12; //constant
console.log(dozen);

// Define Constant -------> "const"
// Define variable -------> "let"

function showTable() {
  const numb = document.querySelector("input").value;

  console.log(numb * 1);
  console.log(numb * 2);
  console.log(numb * 3);
  console.log(numb * 4);
  console.log(numb * 5);
  console.log(numb * 6);
  console.log(numb * 7);
  fun;
  console.log(numb * 8);
  console.log(numb * 9);
  console.log(numb * 10);
}

/* Types Of Data 
  1. number
     --integer (without decimal point)
     --float (with decimal point)
  2. boolean 
  3. string
  4. null of undefined 

  You can use type of user variable

*/

// 2. Boolean Type

// This is a apple

// It is not  raining today

// I have 4 sisters

let sisters = 4; //integer

// These class has 18 students 5 of them are absents

let totalStudents = 18;
absentStudents = 5;

// console.log 2nd trick.
// inspect krkee hum direct console tag mai class ka namee likh krr uski valuee jann sakte hai.

// console.log mai type ka ptaa krnaa.?
// console.log kai tag mai hume agr type maloom knri huu kai kis typeee kaa data hai tu hum "typeof isRed" or class ka namee likhdegee is sai hameee type pta chljayege.

// 3. String
/*
  Ek aesa data jis  mai characters ya letters atte huu is trha kia data type ko string kehte hai 
   3 ways to write String
   1.Single Quotes =''
   2. Double Quotes = ""
   3. Back Ticks = ..

   */

// I live in Karachi

let live = "Karachi";

// Say welcom to Tech kro to new website users
let greeting = "Welcom to Tech kro";

alert("live"); //-------> Single Quotes <-------
alert("name"); // -------> Double Quotes <------

// 4. Null & Undefined
/*
  Wo variable jisko hume koi valuee dii na hu wo undefined kehlataa hai 
  */

let email;

/*
 Variable Naming Rules 

 1. Use camelCase (eg: oneTwoThreeFour).
 2. Numbers, Alphabets,Underscore- are allowed.
 3. Can Not start with a number.
 4. No special letters allowed, like !@#$^&*(){}<>.,'"?/".
 5. No Space allowed.
 */

/* Variable Scope  Eg-----> Room Example ---->Privacy  
Rooms create krne kai liye hum use krte hai curlee bract {}*/
// Global vs Local Variables

let name = "seher"; //global variable
{
  //room # 1--block / body
  //   Privacy ----> Scoping
  let numb1 = 6; //Local Variables
}

{
  //room # 2--block / body
}

{
  //room # 3--block / body
}
//  let : uska scope room kai under tk medhood hota hai kisi dusre room mai access nh krskte .
// var :  uska scope global  hota hai kisi bhi room mai access krskte  hai.

/*
Convert Data Types
1. How to convert to STRING TO INTEGER?
1. How to convert to STRING TO FLOW?
3. Hot to convert to anything to STRING? */

function check() {
  const costOfApples = document.querySelector("input").value;
  alert(costOfApples);
  console.log(typeof costOfApples);
}
// Global variables
let a = "5"; //---> string

let b = parseInt(a); //-----> parsInt kai zrye hum kisi bhi string type ko number type  mai convert krskte hai.

let b1 = parseFloat(b); // ----->  parseFloat  kai zrye hum kisi bhi string type ko float type  mai convert krskte hai.

let c = b1.toString; // ----> toString kai zrye hum float type sai dubara string type mai convert krskte hai .

/*

JS Operators

1. Arithimatic Operator.
2.Assigment Operator.
3. Comparison Operator.
4. Logical Operators.

1. Arithimatic Operator: ye saree numbs pr apply huta hai .
Types: Binary---> 2 , 2. Uniary---> 1.

Binary---> 2 : wo oprt hute hai jinko use krne kai liye hume 2 numbs chye huta hai
Uniary---> 1 : wo oprt hute hai jinko use krne kai liye hume 1 numbs chye huta hai.


Increment --> (++)/ Decrement -->(--) ;
 Prefix  (++a --> --a) ---> executes before statements is run.   statement khtm hune sai phlee inc or dec krta hai.
 Postfix (a++ --> a-- )--->  executes after statements is run.   statement khtm hune kai bdd inc or dec krta hai.
 */

/*
2. Assigment : ( alocation, assign , give , alotment) eg (=, += ,-= ,-,)
  (=)Asignment oprt jab use krte hai jb hamee koi variable chnge krni prhtii hai.

  costofApples = newVariable: right site ki value chnge huti hai , Left site ki value aese rehti hai .
 */

/*
let coins = 0;
function addCoin() {
  coins = coins + 4; // coins +=1; , coins ++;
  document.querySelector("p").innerHTML = coins; //coins ++, ++coins,
}
*/
/*
let score = 0;
function addScore() {
  score = score + 4; //score ++4; , score ++;
  document.querySelector("p").innerHTML = score; //score++; , ++score;
}
*/

/*
Comparison Operators: 2 ya 2 sai zyada variable ko compair krnee mai use krte hai.

Operators     :      Discription  
1. ==         :       equal.
2. ===        :       equal to & eq type.
3. !=         :       not eq.
4. !==        :       not eq to & not eq type.
5. >          :       greater than.
6. <          :       less then.
7. >=         :       greater than or eq to.
8. <=         :       less than or eq to.
9. ?          :       ternary oprt.
 */

/*
const passingMarks = 50;
function check() {
  let englishMArks = parseInt(document.querySelector("#english").value);
  let computerMArks = parseInt(document.querySelector("#english").value);

  let isEnglishPass = englishMArks >= passingMarks;
  let isComputerPass = computerMArks >= passingMarks;

  let isExamPass = isEnglishPass || isComputerPass; // || , |
  alert(isExamPass);

  let isExamFail = isExamPass;
  alert(isExamFail);
}
*/
/*
let isRaining = true;
let isSnowing = false;
let isWindspeed = 20;

let isLaunch = isRaining === true && isSnowing === false && isWindspeed < 25;

alert(isLaunch);
*/

// or logical operators
let hasBannana = true;
let hasApple = false;
let hasOrange = false;

let canMakeFruitChart =
  hasBannana === true && hasApple === true && hasOrange === false;
alert(canMakeFruitChart);
