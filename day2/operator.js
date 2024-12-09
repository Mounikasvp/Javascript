//airthmetic operator :  perform arithemtic operations on the operand .

//addition(+):The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.
var a=10;
a=20;
a=30;
a= a+ 70;  // 30 +70 == 100 (addition)
a=a+100;  // 100 + 100
a += 200;   // a = 200 +200 (assignment opeator)
console.log(a); //200

//subtraction (-):The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.
var b=20;
b=10;
b=b-2 // 10 -2 =8
b-=10;   // 8 - 10 == -2
console.log(b);

//multilication(*):The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.
var c=100;
c= c*2;  // 100 *2 =200
c *= 1  // ==> 200 *1=200 ==> c=200;
c *= 5; // ==> 200 *5=1000; ==> c=1000;
console.log(c);

//division(/): The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.
var d = 50;
d =d /10;  //== 50/10 = 5 d=5
d /= 5; // == 5 /5 =1;  d=1
console.log(d);

//modulus(%):The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.
var a=200;
a= a % 200;
console.log(a);


var a=5;
a = a % 3;
a %=2;
console.log(a);

//Array:An array in JavaScript is a data structure used to store multiple values in a single variable. 
// It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.
//Creating an array using array literal involves using square brackets [] to define and initialize the array.
var a=[1,2,3];

a[2]="mounika";
a[3]=true
a[10]="pinky"
a[20]=""

a.length=5 //we can declare and assign length of array.
console.log(a[7]);

console.log(a);
console.log(a.length);

//object: An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, 
// where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.
var a={
    id:1,
    name:"mounika",
    state:"ap"
}
console.log(a);
//we can assign new values to declared objects.
a.id=10;
a.name="deepika";
a.state="ts"

delete a.id; //deleting a object by using this command .
delete a.name;
console.log(a);

//logical operator:An object in JavaScript is a data structure used to store related data collections. 
//It stores data as key-value pairs, where each key is a unique identifier for the associated value.
//Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

//logical AND (&&): An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs,
//  where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.
var a=10;
var b=20;
console.log(a && b); //  left operand(10)  operator(&&) right operand (20)


console.log(a && b); // =>20
console.log(a>b && a<b);   // 10>20 && 10<20    ==> false
console.log(a<b && a>b);   // 10<20 && 10>20    ==> false
console.log(false && true);  



var a=20;
var b=0;
console.log(a && b); //  left operand(10)  operator(&&) right operand (20)


console.log(b && a);
console.log(a>b && a<b);   // 10>20 && 10<20    ==> false
console.log(a<b && a>b);   // 10<20 && 10>20    ==> false
console.log(false && true);  

//logical OR (||): The logical OR (||) operator checks whether at least one of the operands is true. 
// If either operand is true, the result is true. If both operands are false, the result is false.
 var a=10;
 var b=0;
 var c=10;

 console.log(a>b || a>b);
 console.log(a<b || a<b || c>b);  //  a<b || a<b || c>a  
                                  //  false || c>b
                                  // false || true

var a=10;
console.log(!!a);   
var z=!true;
console.log(!z);
 

//logical Not(!): The logical NOT (!) operator inverts the boolean value of its operand.
//  If the operand is true, it returns false. If the operand is false, it returns true.

if(!!"mounika"){ 
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}



if(10 && 10){  // if(true) both conitions are true.
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}
        

if(["mounika"] && [1,2,3]){  // ["mounika"] && [1,2,3] == true  if(true)
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}

 // equality opeartor compare only values of two operands below condition is false as they are two arrays with different values.
if(["mounika"] == [1,2,3]){ 
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}

 
//both are true values so it gives (hello there good morning) message.
if(["mounika"] && []){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}

//empty string with space is character so it gives true value

if(["mounika"] && " "){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}
 //undefined is falsy value so it goes to else block

if(["mounika"] && undefined){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}

// null is  also falsy value 

if(null && null){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}
//10 is true value as Logical OR  condition is either one operand has to be true then it excutes if block .

if("" || 10){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}

//mounika is ture value so it excutes if block.

if(["mounika"] || undefined){  
    alert("hello there good morning")
}else{
    alert("hello there see you tmrw !!!!")
}
