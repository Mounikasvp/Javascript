// 1. Voting Eligibility
// Write a program that takes a person's age as input and checks whether they are eligible to vote.
// Condition: The person must be 18 years or older to vote.
var age = 12; // Change this value to test different cases

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("you are not eligible to vote");
}

// 2. Marriage Eligibility
// Write a program to check if a person is eligible for marriage based on their gender and age.
// Condition:
// For males, the minimum age is 21 years.
// For females, the minimum age is 18 years.

var gender = prompt("Enter your gender");
var age1 = prompt("Enter your age:");

if (gender === "male") {
  if (age1 >= 21) {
    alert("You are eligible for marriage.");
  } else {
    alert("You are not eligible for marriage. Males must be 21 or older.");
  }
} else if (gender === "female") {
  if (age1 >= 18) {
    alert("You are eligible for marriage.");
  } else {
    alert("You are not eligible for marriage. Females must be 18 or older.");
  }
} 

// 3. Driving License Eligibility
// Write a program to check if a person is eligible to apply for a driving license.
// Condition: The person must be at least 18 years old.

var age2 = 12; 

var eligibility = 
  age2 >= 18 ? "You are eligible to apply for a driving license." : "You are not eligible to apply for a driving license.";

console.log(eligibility);



// 4. Driving License Eligibility
// Write a program to check if a person is eligible to apply for a driving license.
// Condition: The person must be at least 18 years old.

var attendancePercentage = 80; 

var attendance = 
  attendancePercentage >= 75 
    ? "You are eligible to appear for the exam." 
    : "You are not eligible to appear for the exam. Attendance must be 75% or higher.";

console.log(attendance);


// 5. Driving License Eligibility
// Write a program to check if a person is eligible to apply for a driving license.
// Condition: The person must be at least 18 years old.

var age3 = 65;

var discount = 
  age3 >= 60 
    ? "You qualify for the senior citizen discount." 
    : "You do not qualify for the senior citizen discount.";

console.log(discount);


