console.log("learn properly");
/* quick quiz
*/
// let student ={
//     Name: prompt("please enter your name"),
//     phone_no :prompt("please enter your phone no"),
//     marks : prompt("please enter your marks"),
// }

// console.log("this is are the keys ", Object.keys(student))
// console.log("this is are the values ", Object.values(student))
// console.log("this is are the key-value pair ", Object.entries(student))
// console.log("it is the first key in the object ", student["Name"]);
// console.log("it is the first key in the object ", student["phone_no"]);
// console.log("it is the first key in the object ", student["marks"]);

/* quick quiz is done
*/
/* chapter-1
*/
// let p ="lakshmi";
// console.log(p[0]);
// console.log(p[1]);
// p +="2999";
// p[4]="zaa"
// console.log(p)
// console.log(typeof p)
// const n1 =100;
// //n1 =55;
// // we can not reassigned the const variable
// console.log(n1);
// const item ={
// name : "lakshmi",
// 123 :"123",
// valie : "goodluck"
// }
// item.jjj="sai";
// item.kkk ="kumar";
// item.name ="siriii";
// item[123]="ooopopop"
// console.log(item);
/* chapter-1 is done
*/
/* mathmatical operations
*/
// let [a,b]=[5,7];
// console.log(a,b)
// console.log( `the addition of the varaiable a and b  is ${a +b}`);
// console.log(`the subtraction of a & b is ${a-b}`);
// console.log( `the mutliplication of the varaiable a and b  is ${a *b}`);
// console.log(`the expotation  of a & b is ${a**b}`);
// console.log( `the division of the varaiable a and b  is ${b / a}`);
// console.log(`the reminder of a & b is ${b % a}`);
// console.log(`the increment of a is ${a++} ${a++}`);
/* mathamatical operations is done
*/
/* chapter 2 */
age = prompt("please enter your age");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);
// if(age >10 && age <20) {
//     console.log("your  are eligible to enter the world");
// } else {
//     console.log("you have time to relax before you get into the real world");
// }
(age >10 && age <20)?console.log("your  are eligible to enter the world"):console.log("you have time to relax before you get into the real world");

let num =prompt("please enter a number");
num = parseInt(num);
if (num % 2 === 0 && num %3 === 0){
    console.log("it is divisble by both 2 & 3 ",num);
} else {
    console.log("it is not divisible by 2 & 3 ",num);
    if (num%2 === 0){
        console.log("the numbe is divisble by 2 ",num)
    }else if(num %3 === 0){
        console.log("it is divisble by 3",num)
    }
}
(age > 18)?console.log("you can drive "):console.log("you can not drive be a passanger to driver");
switch(new Date().getDay()){
    case 0:
        console.log("Today is sunday enjoy your day");
        break;
    case 1:
        console.log( "Today is monday back to work");
        break;
    case 2:
        console.log("Today is tuesday in middle of the work");
        break;
    case 3:
        console.log("Today is wednesday it is very tough day");
        break;
    case 4:
        console.log("Today is thrusday it is almost there");
        break;
    case 5: 
        console.log("Today is friday lets us party today evening");
        break;
    case 6:
        console.log("Today is saturday let us chill and relax ");
        break;
}
