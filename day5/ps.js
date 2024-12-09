// Write a program to print Using while loop
// 1-10
var a=1;
while(a<=10){
    console.log(a);
    a++;
    
}
// 10-1
var b=10;
while(b>=1){
    console.log(b);
    b--;
    
}
// -1 to -10
var c = -1;
while(c>=-10){
    console.log(c);
    c--;
    
}
// -10 to -1
var d=-10;
while(d<=-1){
    console.log(d);
    d++;
    
}

// Print even numbers and odd numbers using while loop and take userInput and print sum of even and sum of odd numbers from userInput


var userInput=prompt("enter a digit");
var sumEven=0;
var sumOdd=0;
var i = 0;

while(i<userInput.length){
    if(userInput[i] % 2 == 0){
        sumEven += Number(userInput[i])
        i++;
        console.log(sumEven + "even");
        
    }else{
        sumOdd += Number(userInput[i])
        i++;
        console.log(sumOdd +"odd");
        
    }
}
console.log(sumEven,"even sum")
console.log(sumOdd,"oddsum")
