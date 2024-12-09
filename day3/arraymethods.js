//Write a code snippet to find the length of an array.
var a = [1,2,3,4,5]
console.log(a.length);

//How do you add an element to the end of an array?
var b = ["mounika","deepika","teja"]
b.push("gayathri")
console.log(b);
//How do you remove the last element from an array?
b.pop("gayathri")
console.log(b);
//How do you add an element to the beginning of an array?
b.unshift("saru")
console.log(b)
//How can you remove the first element from an array?
b.shift("saru")
console.log(b);
//How do you reverse the elements in an array?
b.reverse(b)
console.log(b);
//How can you find the index of a specific value in an array?
var c =  a.indexOf(5)
console.log(c);
// How can you check if a certain value exists in an array?
 var c = b.includes("deepika")
 console.log(c);
 
// How can you sort the elements of an array in ascending order?
var arr=[20,40,30,10]
console.log(arr.sort())
// How can you convert an array to a string using commas as separators?
var b=["deepika","mounika",]
 var e=b.join(",")
 console.log(e)


//Questions with Multiple Array Methods:
//Write a code snippet that adds an element to the end of an array, then removes the first element.
var f=[1,2,3,4,5,6,7]
f.push(8)
f.shift(1)
console.log(f);

//How can you reverse an array and then join the elements into a string?
var g=["mounika","lalli","saru"]
var h = g.reverse().join()
console.log(h);

//Write a code that first sorts an array in ascending order, then removes the last element.
var arrayOrder = [20,39,47,26,10]
var sortOrder = arrayOrder.sort()
sortOrder.pop()
console.log(sortOrder);
// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var addTwo = [3,4,5,6,7,8,9]
addTwo.unshift(1,2)
addTwo.shift()
console.log(addTwo.length);

//How do you combine two arrays, sort the combined array, and then remove the last element?
var firstArr = ["mounika","saru"]
var secArr = ["deepika","lalli"]
var bothArr = firstArr.concat(secArr)
bothArr.pop()
console.log(bothArr);

// Question 1: Manage a Guest List
// You are managing a guest list for an event.
// Start with an array: ["Alice", "Bob", "Charlie", "David"].
// Add a new guest at the beginning of the list.
// Remove the last guest from the list.
// Check if "Bob" is still in the list after modifications.
// What does the final list look like?

var guestList = ["Alice", "Bob", "Charlie", "David"]
guestList.unshift("Mounika")
guestList.pop()
console.log(guestList);
var checkGuest = guestList.includes("Bob")
console.log(checkGuest);

// Question 2: Generate a Sentence
// Given a string: "Learn,Practice,Improve",
// Convert the string into an array of words.
// Reverse the order of the words.
// Join the reversed array into a single string with spaces between words.
// What is the final output?

var sentenceA = "Learn,Practice,Improve";
var senB = sentenceA.split(",").reverse().join()
console.log(senB);

// Question 3: Create a Playlist
// You have two arrays of songs:
// ["Song1", "Song2", "Song3"] and ["Song4", "Song5"].
// Combine these two arrays into one playlist.
// Remove the first song from the playlist.
// Add a new song, "Song6", to the end of the playlist.
// What does the final playlist look like?

var arrF = ["Song1", "Song2", "Song3"]
var arrS = ["Song4", "Song5"]
var finalArr=arrF.concat(arrS)
finalArr.shift()
finalArr.push("Song6")
console.log(finalArr);

// Question 4: Extract Favorite Movies
// You have a list of movies:
// ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"].
// Extract the middle three movies into a new array.
// Combine this new array with another array: ["The Matrix", "The Godfather"].
// Reverse the order of the combined list.
// What is the final list?

var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
var moviesB =["The Matrix", "The Godfather"]
var moviesA = movies.slice(2,5)
var movieC = moviesA.concat(moviesB).reverse()
console.log(movieC);

// Question 7: String Operations on Names
// Given a string: "John,Doe,Jane,Smith",
// Split the string into an array.
// Check if the array includes "Jane".
// Reverse the array and join the names with a space.
// What is the final output?

var nameS = "John,Doe,Jane,Smith"
var arrNames = nameS.split(",").reverse().join(" ")
console.log(arrNames);
var checkName = arrNames.includes("Jane")
console.log(checkName);

// Question 8: Length-Based Manipulation
// You have an array of numbers: [1, 2, 3, 4, 5].
// Remove the first element from the array.
// Add the numbers 6 and 7 to the end.
// Calculate the final length of the array.
// What are the final array and its length?

var arr = [1, 2, 3, 4, 5]
arr.shift()
arr.push(6,7)
console.log(arr);
console.log(arr.length);

// Question 9: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?


var arr = ["Milk", "Bread", "Eggs", "Butter"]
arr.pop()
arr.push("Chesse","Juice")
console.log(arr);
var arrA = arr.includes("Eggs")
console.log(arrA);

// Question 10: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?
var arr1=["Alice", "Bob", "Charlie"]
var arr2=["David", "Eve"]
var reverArr = arr1.reverse()
var finalArr1 = reverArr.concat(arr2)
finalArr1.unshift("Frank")
console.log(finalArr1);

// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?

var shoppingCart = ["Milk", "Bread", "Eggs", "Butter"]
var indexEggs = shoppingCart.indexOf("Eggs")
console.log(indexEggs);
shoppingCart[2]="Cheese"
console.log(shoppingCart);






















