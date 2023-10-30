"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// QUESTION 2)Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//SOLUTION:
// store the person's name in a variableconsole.log("\n");
console.log("/////////////Question 2:////////////////////// ");
const personName1 = "faraz";
console.log(`Hello ${personName1}, would you like to learn some python today?`);
// QUESTION 3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\n");
console.log("///////////////Question 3//////////////// ");
let personsName2 = " Faraz";
// step 1: show in lower case
console.log(`Hello ${personsName2.toLowerCase()}, would you like to learn some python today?`);
console.log(`Hello ${personsName2.toUpperCase()}, would you like to learn some python today?`);
console.log(`Hello ${toTitleCase(personsName2)}, would you like to learn some pyhton today?`);
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// QUESTION 4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
console.log("\n");
console.log("/////////////Question 4///////////////");
const author = "Altaïr Ibn-LaʼAhad";
const quote = "It is not our right to punish one for thinking as he does, no matter how much we disagree.";
console.log(`${author} once said, "${quote}`);
// QUESTION 5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
console.log("\n");
console.log("/////////////Question 5////////////");
const famous_person = "Altaïr Ibn-LaʼAhad";
const quote2 = "How Could I Regret The Only Life I've Ever Known?";
const message = `${famous_person} said, "${quote2}"`;
console.log(message);
// QUESTION 6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\n");
console.log("//////////////////Question6////////////");
const name3 = "\t    Eric\n";
console.log("Name with white spaces:");
console.log(name3);
const nameStripped = name3.trim();
console.log("Name after stripping whitespace:");
console.log(nameStripped);
// QUESTION 7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\n");
console.log("//////////////Question 7//////////////");
console.log(`Addition: ${2 + 2 + 4}`);
console.log(`Subtraction: ${20 - 12}`);
console.log(`Multiplication: ${2 * 4}`);
console.log(`Division: ${24 / 3}`);
// QUESTION 9)Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\n");
console.log("////Question 9///////");
const favoriteNumber = 5;
console.log(`My favorite number is ${favoriteNumber}`);
//QUESTION 11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n");
const names = ["Faraz", "Ali", "hamzah", "arfah", "abdul"];
// Print each person's name by accessing each element in the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//QUESTION 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n");
console.log("////Question 12//////");
names.forEach((names) => {
    const message = `Assalam Alikum, ${names}!`;
    console.log(message);
});
//Question 13)Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n");
console.log("/////Question 13//////");
const transportation = [
    "Tesla car",
    "Airplane",
    "Bicycle",
    "motorbike",
];
transportation.forEach((item) => {
    console.log(`I would like to Own a ${item}`);
});
//Question 14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n");
console.log("////Question 14 , 15 , 16///////");
const guestList = ["Faraz", "Qaseem", "Arfah", "Ali"];
guestList.forEach((person) => {
    console.log(`Dear ${person} You are invited to Dinner. We would be honour to have you!`);
});
// Create an array of people to invite to dinner
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Qaseem";
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);
// Find the index of the guest who can't make it
const indexOfCancelledGuest = guestList.indexOf(guestWhoCantMakeIt);
// Check if the cancelled guest was found and replace them with a new guest
if (indexOfCancelledGuest !== -1) {
    const newGuest = "Osama";
    guestList[indexOfCancelledGuest] = newGuest;
}
// Iterate through the guest list and print new invitations
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are invited to dinner. We would be honored to have you.`);
});
console.log("Great news! I found a bigger dinner table!");
// Add new guests to the list
guestList.unshift("Areesha"); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Leonardo da Vinci"); // Add to the middle
guestList.push("Omar"); // Add to the end
// Print new invitation messages for all guests
guestList.forEach((person) => {
    console.log(`Dear ${person}, you are invited to dinner. We would be honored to have you.`);
});
///Question 17)Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
console.log("\n");
console.log("////////////Question 17///////////");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
guestList.forEach((guest) => {
    console.log(`${guest}, you're still invited to dinner.`);
});
//Quesiton 18) Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n");
console.log("//////////////Question 18///////////");
let dreamCountries = ["New York", "USA", "Germany", "Thiland", "London"];
console.log(dreamCountries); // orignal list print
let sortedPlaces = dreamCountries.slice();
sortedPlaces.sort();
console.log(sortedPlaces); /// alphabetical order list print
console.log(dreamCountries);
let reversed = dreamCountries.slice();
reversed.reverse();
console.log(reversed); /// reversed order list
console.log(dreamCountries);
let revOrderMsg = `The array order is reversed now ${reversed}`;
console.log(sortedPlaces); // Alphabetical order list print
console.log(revOrderMsg); /// revered order list with message orint
let orgOrderMsg = `The array order is in Orignal order ${dreamCountries}`;
console.log(orgOrderMsg);
let alphOrderMsg = `THe array is in Alphabetic order ${sortedPlaces}`;
console.log(alphOrderMsg); /* Alphabetic order List with Message print */
console.log(orgOrderMsg); /** Original order List with Message print */
console.log("\n");
//  Quetion 19 Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n");
console.log("//////////QUESTION 19//////////////////////");
let replaceGuestList = guestList;
replaceGuestList.push("saleem ", "Mozam");
let recallGuest = `Recalling guest from quetion 14 for Dinner again ${replaceGuestList}`;
console.log(recallGuest);
// let totalGuest = guestList ;
// totalGuest.length = 2;
console.log(replaceGuestList);
// Question 20)Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items
console.log("\n");
console.log("//////////QUESTION 20///////////////");
let montain = ["Mount Everest", "Kangchenjunga", "Lhotse", "Makalu", "K2"];
for (let mList = 0; mList < montain.length; mList++) {
    console.log(mList + 1 + ".\t" + montain[mList]);
}
console.log("\n");
///Question 21 )They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n");
console.log("//////////QUESTION 21/////////////");
const carObject = {
    car1: "Toyota",
    car2: "Honda",
    car3: "Subaru",
    car4: "Nissan",
};
console.log(carObject);
// Question 22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
console.log("\n");
console.log("///////QUESITON 22 /////////////");
let intentionalError = [1, 2, 3, 4, 5];
let causeError = intentionalError[6];
console.log(causeError); /**Made Intentinally Error */
let errorCorction = intentionalError[2];
console.log(errorCorction);
/// Question 23)Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\n");
console.log("////////QUESTION 23////////////");
let car = "subaru";
// Test 1: Is car equal to 'subaru'? I predict True.
console.log(car == "subaru"); // True
// Test 2: Is car not equal to 'honda'? I predict True.
console.log(car != "honda"); // True
// Test 3: Is car strictly equal to 'Subaru'? I predict False (case-sensitive).
console.log(car === "Subaru"); // False
// Test 4: Is car not strictly equal to 'Subaru'? I predict True (case-sensitive).
console.log(car !== "Subaru"); // True
// Test 5: Is car length greater than 5 characters? I predict False.
console.log(car.length > 5); // False
// Test 6: Is car starting with the letter 's'? I predict True.
console.log(car.charAt(0) === "s"); // True
// Test 7: Is car containing the substring 'sub'? I predict True.
console.log(car.includes("sub")); // True
// Test 8: Is car equal to 'subaru' or 'honda'? I predict True.
console.log(car === "subaru" || car === "honda"); // True
// Test 9: Is car not equal to 'subaru' and not equal to 'ford'? I predict True.
console.log(car !== "subaru" && car !== "ford"); // True
// Question 24)More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("\n");
console.log("//////////QUESTION 24//////////////////");
// • Tests for equality and inequality with strings
let fruit = "apple";
// Test 1: Is fruit equal to 'apple'? I predict True.
console.log(fruit == "apple"); // True
// Test 2: Is fruit not equal to 'banana'? I predict True.
console.log(fruit != "banana"); // True
// Test 3: Is fruit strictly equal to 'Apple'? I predict False (case-sensitive).
console.log(fruit === "Apple"); // False
// Test 4: Is fruit strictly not equal to 'banana'? I predict True (case-sensitive).
console.log(fruit !== "banana"); // True
// Tests using the toLowerCase function:
let country = "Canada";
// Test 5: Is the lowercase of country equal to 'canada'? I predict True.
console.log(country.toLowerCase() === "canada"); // True
// Numerical tests:
let age = 25;
// Test 6: Is age equal to 25? I predict True.
console.log(age == 25); // True
// Test 7: Is age not equal to 30? I predict True.
console.log(age != 30); // True
// Test 8: Is age greater than 20? I predict True.
console.log(age > 20); // True
// Test 9: Is age less than or equal to 25? I predict True.
console.log(age <= 25); // True
//Test using "and" and "or" operator
let sunny = true;
let warm = false;
// Test 10: Is it sunny and warm? I predict False.
console.log(sunny && warm); // False
// Test 11: Is it sunny or warm? I predict True.
console.log(sunny || warm); // True
// Test whether item is in an array
let fruits = ["apple", "banana", "cherry"];
// Test 12: Is 'apple' in the fruits array? I predict True.
console.log(fruits.includes("apple")); // True
// test whether an item is not in an array
// Test 13: Is 'grape' not in the fruits array? I predict True.
console.log(!fruits.includes("grape")); // True
//Queston 25)Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\n");
console.log("/////////QUESTION 25 ////////////////");
// version1 : passes the if test
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
/// version2: fails the if test
let alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("The player just earned 5 points.");
}
// Question 26) Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\n");
console.log("/////////////QUESTION 26 ////////////");
//version1: Runs the if block
let alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("The player just earned 10 points for shooting the alien.");
}
//version2: Runs the else block
let alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("The player just earned 10 points for shooting the alien.");
}
//Question 27)Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n");
console.log("/////////QUESTION 27////////////////");
// Green Alien
let alien_colora = "green";
if (alien_colora === "green") {
    console.log("The player earned 5 points for shooting the green alien.");
}
else if (alien_colora === "yellow") {
    console.log("The player earned 10 points for shooting the yellow alien.");
}
else if (alien_colora === "red") {
    console.log("The player earned 15 points for shooting the red alien.");
}
//YEllow alien
let alien_colors = "yellow";
if (alien_colors === "green") {
    console.log("The player earned 5 points for shooting the green alien.");
}
else if (alien_colors === "yellow") {
    console.log("The player earned 10 points for shooting the yellow alien.");
}
else if (alien_colors === "red") {
    console.log("The player earned 15 points for shooting the red alien.");
}
//Red Alien
let Aliens_color = "red";
if (Aliens_color == "green") {
    console.log(" The player earned 5 points for shooting the green Alien.");
}
else if (Aliens_color == "yellow") {
    console.log("The player earned 10 points for shooting the yellow Alien.");
}
else if (Aliens_color == "red") {
    console.log("The player earned 15 points for shooting the red Alien.");
}
// Question 28) Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\n");
console.log("///////QUESTION 28////////////");
let age1 = 27;
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question 29)Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n");
console.log("////////QUESTION 29//////////////////");
let favorite_fruits = ["apples", "bananas", "strawberries"];
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwis")) {
    console.log("You really like kiwis!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
}
//Question 30) Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\n");
console.log("////////QUESTION 30 ///////////////");
let usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
//Question 31)No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\n");
console.log("////////QUESTION 31 /////////////////");
let usernamess = ["admin", "Eric", "Alice", "Bob", "Charlie"];
if (usernamess.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < usernamess.length; i++) {
        if (usernamess[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernamess[i]}, thank you for logging in again.`);
        }
    }
}
// Remove all usernames from the array to test the empty list condition
usernamess = [];
if (usernamess.length === 0) {
    console.log("We need to find some users!");
}
//QUESTION 32)Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n");
console.log("//////QUESTION 32 //////////");
let current_users = ["Alice", "Bob", "John", "Mike", "Sara"];
let new_users = ["John", "Tom", "Katie", "mike", "Grace"];
for (let i = 0; i < new_users.length; i++) {
    let isTaken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isTaken = true;
            break; // No need to check further, the username is already taken
        }
    }
    if (isTaken) {
        console.log(`The username "${new_users[i]}" is not available. Please choose a different one.`);
    }
    else {
        console.log(`The username "${new_users[i]}" is available.`);
        current_users.push(new_users[i]); // Add the new username to the current_users list
    }
}
//Question: 33) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\n");
console.log("///////QUESTION 33 ///////////////");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
//Question 34)Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n");
console.log("//////////QUESTION 34/////////////");
const pizzas = ["BBQ", "Creamy", "Pepperoni"];
pizzas.forEach((pizza) => {
    console.log(pizza);
});
pizzas.forEach((pizza) => {
    console.log(`i love ${pizza} pizza`);
});
console.log("i really love pizzas");
//Question 35)Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n");
console.log("////////QUESTION 35////////////");
let animals = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
    console.log("A " + animals[i] + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");
//Question 36 )T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\n");
console.log("///////////QUESTION 36/////////////////");
function make_shirt(size, message) {
    console.log(`The shirt is size ${size} and it has the message: "${message}".`);
}
// Call the function
make_shirt("Large", "I am learning Typescript!");
//Question 37)Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\n");
console.log("////////////QUESTION 37////////////");
const make_shirt2 = (size = "Large", text = "I love TypeScript") => {
    console.log(`the shirt is ${size} in size and ${text} is printed on it.`);
};
make_shirt2();
//Question 38)Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\n");
console.log("///////////QUESTION 38 //////////////");
const describe_city = (city, country) => {
    console.log(`${city} is in ${country}`);
};
describe_city("karachi", "pakistan");
//Question 39)City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this
console.log("\n");
console.log("///////QUESTION 39////////////");
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function
let result = city_country("Lahore", "Pakistan");
console.log(result);
//Question 40)Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\n");
console.log("///////////QUESTION 40///////////");
function make_album(Artist, Album, Tracks) {
    const album = {
        Artist: Artist,
        Album: Album,
    };
    if (Tracks !== undefined) {
        album.Tracks = Tracks;
    }
    return album;
}
const album1 = make_album("Ed Sheeran", "Divide");
const album2 = make_album("Taylor Swift", "Folklore", 16);
const album3 = make_album("Imagine Dragons", "Evolve", 12);
console.log(album1);
console.log(album2);
console.log(album3);
//Question 41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\n");
console.log("///////////QUESTION 41 ///////////");
function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicianNames = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
showMagicians(magicianNames);
//  Question 42, Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
console.log("\n");
console.log("//////////QUESTION 42////////////////");
// Define the showMagicians() function to display the list of magicians.
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the makeGreat() function to modify the list of magicians.
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Create an array of magicians.
const magicians = ["Alice", "Bob", "Charlie"];
// Call the makeGreat() function to modify the array.
makeGreat(magicians);
// Call the showMagicians() function to display the modified array.
showMagicians(magicians);
console.log("\n");
console.log("//////////QUESTION 43////////////");
// Define the showMagicians() function to display the list of magicians.
function showMagicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the makeGreat() function to modify the list of magicians.
function makeGreat1(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
// Create an array of magicians.
const originalMagicians = ["Alice", "Bob", "Charlie"];
// Create a copy of the original array.
const copiedMagicians = [...originalMagicians];
// Call the makeGreat() function with the copied array to modify it.
const greatMagicians = makeGreat1(copiedMagicians);
// Call the showMagicians() function to display the original and modified arrays.
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("Great Magicians:");
showMagicians(greatMagicians);
console.log("\n");
console.log("///////QUESTION 44//////////////");
const sandwiches = (...arr) => {
    console.log(`your sandwich has ${arr.join(", ")} as ingredients`);
};
sandwiches("bread", "mayonaise", "chicken", "ketchup");
sandwiches("bread", "sauces", "cucumber", "ketchup");
sandwiches("bread", "chicken", "ketchup");
//Question 45) Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\n");
console.log("//////QUESTION 45///////////////");
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    // Add optional properties using the provided keyword arguments.
    for (const option of options) {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information.
const myCar = createCar("Toyota", "Camry", {
    color: "blue",
    features: ["GPS", "Sunroof"],
});
// Print the car object to verify the information.
console.log(myCar);
