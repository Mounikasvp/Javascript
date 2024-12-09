// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

var person = {
    firstName: "mounika",
    lastName: "SV",
    age:21
}
console.log(person.firstName);
person.city="New York"
console.log(person);

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

var product = {
    name:"Dove shampoo",
    price:245,
    instock:true
}
product.price=350
delete product.instock
console.log(product);

// Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

var library = {
  fantasy:{
    books: ["harrypotter","end with us ","start with us"]
  },
  mystery:{
    books : ["godfather","secret"]
  }
 
}
library.scienceFiction = {
    books:["numerology","gravity"]
}
console.log(library);
delete library.mystery;
console.log(library.fantasy.books[0]);

// Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var user ={
    username : " Mounika",
    email : " mounika414@gmail.com",
    address : {
        city : "kurnool",
        state : "andrapradesh",
        zip:518360
    }
}
console.log(user);

Object.freeze(user); 
//The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
user.email = "pinky414@gmail.com";
console.log(Object.isFrozen(user));
//A Boolean indicating whether or not the given object is frozen.determine whether the object is frozen or not
user.phone = 9912526055;
console.log(user);


// Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

var car ={
    make : "Creata",
    model : "12",
    price : 17000000
}
Object.seal(car);
delete car.make;
console.log(Object.isSealed(car));
car.price = 150000000
console.log(Object.isExtensible(car));
//The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).





