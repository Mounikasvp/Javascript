//local scope 0r functional scope :
//In programming, local scope refers to the context within a program where a variable is defined
//and accessible only within a specific block, function, or method.
function a(){
    var x=100;
    console.log(x);
}
a();


//global scope:
// Global scope refers to the context in a program where a variable is accessible throughout the entire program,including inside all functions,
//  methods, or blocks. Variables declared in the global scope are known as global variables, and they exist for the lifetime of the program.
var a1 = 200;
function b(){
    var a1=100;  
    console.log(a1); //as b() is functional scope it execute 100.
    
}
b()
console.log(a1);//as a1 is outside the function it is global var so it execute 200.
//the ouput will be 200,100


var a2 = 200;
function b1(){
    var a2=100;  
    console.log(a2); //The console.log(a2) statement inside the function refers to the local a2.
    
}
console.log(a2);//statement is outside function, so it refers to the global a2 and executed first
b1()//The b1 function is called,and the execution enters the function body.
//output will be 200 and 100

//when there is no variable in local scope it check the parent variable and excute the a3 as 300 
function b3(){
    console.log(a3);    
}
var a3 = 300;
b3()


//the output will be undefined as the function called before the declaration of a3 variable
function b3(){
    console.log(a3);    
}
b3()
var a3 = 300;


//it work same as for nested function ,it checek for parent variable if there is no declartion in local scope.
function b4(){
    var a4=500;
    function b5(){
        console.log(a4+100);   //600
    }
    b5()
}
var a4=100;
console.log(a4); //100
b4()

//by hoisting method it goes to top of the declaration in order to excute the function b6
var a5 = 400;
function b7(){
    function b6(){
        console.log(a5+100);   //500
    }
    b6()
}
b7()
var a5=100;
console.log(a5); //100
