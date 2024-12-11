//maximunm numbers
var userInput=prompt("enter digit here:---")
var max=userInput[0]
for( i=0;i<userInput.length;i++){
     if(max<userInput[i]){
         max=userInput[i]
     }
}
console.log(max, "is highest number")

//minimum numbers
var userInput=prompt("enter digit here:---")
var min=userInput[0]
for( i=0;i<userInput.length;i++){
     if(min>userInput[i]){
         min=userInput[i]
     }
}
console.log(min, "is highest number")

//max and min numbers
var userInput=prompt("enter digit here:---")
var min=userInput[0]
var max=userInput[0]
for( i=0;i<userInput.length;i++){
     if(min>userInput[i]){
         min=userInput[i]
     }var userInput=prompt("enter digit here:---")
     var min=userInput[0]
     var max=userInput[0]
     for( i=0;i<userInput.length;i++){
          if(min>userInput[i]){
              min=userInput[i]
          }
           if(max<userInput[i]){
              max=userInput[i]
          }
     }
     console.log(min, "is lowest number")
     console.log(max, "is highest number")
     
     console.log(Number(min)+Number(max) ,"total sum")
      if(max<userInput[i]){
         max=userInput[i]
     }
}
console.log(min, "is lowest number")
console.log(max, "is highest number")

console.log(Number(min)+Number(max) ,"total sum")