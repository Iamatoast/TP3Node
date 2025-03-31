// Ej 1
console.log("Holi");
// Ej 2
let array = ["WHY DID YOU LET ME DO THIS?", "YOU'RE FIGHTING SO YOU CAN WATCH EVERYONE AROUND YOU DIE", "THINK MARK THINK", "YOU'LL LIVE LONG ENOUGH TO SEE THIS WORLD CRUMBLE TO DUST AND BLOW AWAY", "EVERYONE AND EVERYTHING YOU KNOW WILL BE GONE", "WHAT WILL YOU HAVE AFTER FIVE HUNDRED YEARS?"];
function owKneeMan(){
	for(let i = 0; i < array.length; i++){
		console.log(array[i]);
	}
}
const printMan = () => {
	console.log(array);
}
owKneeMan();
printMan();
// Ej 3
const addToArray = () => array.push("you dad");
addToArray();
owKneeMan();
// Ej 4
console.log(array.lastIndexOf("you dad"));
// Ej 5
let numArray = [1,2,3,48,11,1,6,-2,1,8,9,1,10];
sumNum = numArray.reduce(function (x,y) {return x + y;});
console.log(sumNum);
// Ej 6
let newArray = numArray.toReversed();
console.log(newArray);
// Ej 7
let sortedArray = numArray.toSorted(function(a,b){return a - b});
console.log(sortedArray);
// Ej 8
const filter = (num) => num > 8;
let filteredArray = numArray.filter(filter);
console.log(filteredArray);
// Ej 9
const filter2 = (num) => num == 1
let numTimes = numArray.filter(filter2);
console.log(numTimes.length);
