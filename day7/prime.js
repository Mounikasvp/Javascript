// PRIME NUMBERS PROGRAM :-

var a=+prompt("ENTER DIGIT HERE:   ")
var count=0
for(i=1;i<=a;i++){
    if(a%i==0){
        count++
    }
}
if(count==2){
    console.log("PRIME")
}else{
    console.log("NOT PRIME")
}
