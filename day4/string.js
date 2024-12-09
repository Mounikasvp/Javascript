// take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

var str = "      Mounika"
var str1= "pinky        "
 var a = str.trim()
var b = str1.trim()
var c = a.concat(b).toUpperCase();
console.log(c);

// Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

var str2 = "MOUNIKA"
var d = str2.slice(2,5).toLowerCase();
console.log(d);
var e = d.lastIndexOf();
console.log(e);


// take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

var singleChar = "M"
var str4 = "ounika"
var totalStr = singleChar.concat(str4).toUpperCase()
console.log(totalStr);
console.log(totalStr.charAt(totalStr.length-2)); //return value through index of string


// we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

var firstChar = "mounika"
var secondChar = "pinky"
var upperF = firstChar.charAt(0).toUpperCase().concat(firstChar.slice(1,3)).concat(secondChar.slice(0,3)).concat(secondChar.charAt(2).toUpperCase());
console.log(upperF);

// You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var str5 = "           mounika      "
var str6 = "pinky"
var str7 = str5.trim();
var str8 = str7.charAt(0).toUpperCase().concat(str7.slice(1,str7.length-1)).concat(str7.charAt(str7.length-1).toUpperCase());
console.log(str8);
var str9 = str8.slice(0,4)
console.log(str9);
var result= str9.concat(str6);
console.log(result);

// "hello there , how are you " find the index of are word in the sentence

var strX = "hello there, how are you "
var str= strX.split(" ");
console.log(str)
var strY = str.indexOf("are")
console.log(strY);

























