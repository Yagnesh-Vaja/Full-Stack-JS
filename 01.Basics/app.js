// alert("Hello my nameis yagnesh");
// console.log("Hello Yagnesh");
// console.warn("This is warning");
// console.error("This is error");
// console.table({ name: "yagnesh", age: 22 });
// console.log("Hello...");
// console.log("Hello...");
// console.log("Hello...");
// console.log("Hello...");
// console.log("Hello...");
// console.clear();

// console.log("Hello...");
// console.log("Hello...");

//Comments
// clg -> console.log
// log -> console.log

//Variables
//(reserved keyword) (variable name) (type of value)

//Declare  variable
// let name;

//Assign value
// let age;
// age = 22;
// console.log(age);

// let yagnesh = "Full stack developer";
// console.log(yagnesh);
// yagnesh = "variable";
// console.log(yagnesh);

// Challenge-1
// let name = "Yagnesh";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// let gender = "Male";
// let twitterHandle = "Twitter";

// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(twitterHandle);

//Primitive Types
// 1.Number
// let num = 10;
// num = 10.2;
// console.log(num);
// console.log(typeof num);

// let num = 2;
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

// let counter = 10;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter--;
// counter--;

// console.log(counter);

//Challenge-2

// let firstFavNum = 27;
// console.log(firstFavNum);

// let secondFavNum = 70;
// console.log(secondFavNum);

// let sum = firstFavNum + secondFavNum;
// console.log(sum);

// let sub = firstFavNum - secondFavNum;
// console.log(sub);

// let mul = firstFavNum * secondFavNum;
// console.log(mul);

// let div = firstFavNum / secondFavNum;
// console.log(div);

// let mod = firstFavNum % secondFavNum;
// console.log(mod);

// let power = firstFavNum ** secondFavNum;
// console.log(power);

// Boolean -> true||false
// let isTrue = true;
// console.log(isTrue);

// let isFalse = false;
// console.log(isFalse);

// let isNan = NaN;
// console.log(isNan);

// let number = 10;
// console.log(number + undefined);

//Falsy
// false,null,undefined,0,-0,NaN,'',"",``,(empty quotes)
// Other than this all are truthy values

// let notDefined = undefined; //Set by JS Compiler
// console.log(notDefined); //

// let notDefined = null; //Set by Programmer
// console.log(notDefined);

//Challenge-3
// let isJsProgrammingLanguage = true;
// console.log(isJsProgrammingLanguage);

// let isJsHard = false;
// console.log(isJsHard);

// let favNumb = 27;
// console.log(favNumb + undefined);

// let favNumber = undefined;
// console.log(favNumber);

//Comparision operator
//->Relational operator
//>Greater then
//<Less then
//>=Greater then or equal to
//<=Less then or equal to
//->Equality operator

//->Relational operator
// console.log(10 + 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 >= 10);
// console.log(10 <= 10);

//->Equality operator
// === strict equality (type+value)
// !== strict non-equality operator (type+value)
// == lose equality operator (value)
// != not equality operator (value)

// console.log(10 === 10);
// console.log(10 === "10");
// console.log(10 === 20);
// console.log(10 !== "10");
// console.log(10 == 10);
// console.log(10 != 10);

//Challenge-4

// let firstFavNumb = 10;
// let secondFavNumb = 20;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb !== secondFavNumb);
// console.log(firstFavNumb != secondFavNumb);

//Strings
// let firstName = "yagnesh";
// let middleName = "Dinesh";
// let surName = `Vaja`;
// console.log(firstName);
// console.log(middleName);
// console.log(surName);
// let fullName = firstName + " " + middleName + " " + surName;
// console.log(fullName);

//1. Concatenation
// let firstName = "yagnesh";
// let middleName = "Dinesh";
// let fullName = firstName.concat(middleName);
// console.log(fullName);

//2.Append
// firstName += "Programmer";
// console.log(firstName);

//3.length
// console.log(firstName.length);

//4.Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//5.Slice
// console.log(firstName.slice(0, 3));

//6.Split and join
// console.log(firstName.split("").join("-"));

//7.Includes
// console.log(firstName.includes("y"));

//8.Trim
// console.log(firstName.trim());

// let desc = "This is random text";
// console.log(desc);

// let fName = "Yagnesh";
// let lName = "Vaja";
// let fullName = `${fName} ${lName}`;
// console.log(fullName);

// Challenge-5

// let favActorFirstName = "Salman";
// let favActorLastName = "Khan";
// let fullName = `${favActorFirstName} ${favActorLastName}`;
// let toUpperCase = favActorFirstName.toUpperCase();
// let message = `My favorite actor is ${favActorFirstName.toUpperCase()} and is a real hero in film industry `;
// message += "his best show is silicon valley";
// console.log(favActorFirstName);
// console.log(favActorLastName);
// console.log(fullName);
// console.log(toUpperCase);
// console.log(message);

//Type Conversion
// let money = "50";
// console.log(typeof money);

//Convert string to number
// money = parseInt(money);
// console.log(typeof money);
// let money = "50";
// console.log(money);
// console.log(typeof money);
// money = Number(money);
// console.log(money);
// console.log(typeof money);
// money = +money;
// console.log(money);
// console.log(typeof money);

//Convert number to string
// let money = 50;
// console.log(money);
// console.log(typeof money);
// // money = money.toString();
// // console.log(typeof money);
// money = String(money);
// console.log(typeof money);

//Type Conversion
//Convert string to decimal
// let money = "50.245";
// console.log(money);
// console.log(typeof money);
// money = parseFloat(money);
// console.log(typeof money);
