let name1 = prompt("First name?");
let name2 = prompt("Second name?");
let name3 = prompt("Third name?");

let nameOne = name1.length;
let nameTwo = name2.length;
let nameThree = name3.length;

if (nameOne > nameTwo && nameOne > nameThree) {
    console.log(`${name1} has the longest name.`);
} else if (nameOne === nameTwo && nameOne > nameThree) {
    console.log(`${name1} and ${name2} tie for the longest names.`);
} else if (nameOne === nameThree && nameOne > nameTwo) {
    console.log(`${name1} and ${name3} tie for the longest names.`);
} else if (nameOne === nameTwo && nameOne === nameThree) {
    console.log(`${name1}, ${name2} and ${name3} all tie for the longest names.`);
} else if (nameTwo > nameOne && nameTwo > nameThree) {
    console.log(`${name2} has the longest name.`);
} else if (nameTwo > nameOne && nameTwo === nameThree) {
    console.log(`${name2} and ${name3} tie for the longest name.`);
} else if (nameThree > nameOne && nameThree > nameTwo) {
    console.log(`${name3} has the longest name.`)
}