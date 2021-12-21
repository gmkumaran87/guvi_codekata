let userInput = ["5", "1 9 16 25 46", "2 3 4 5 6"];
const compareAsc = (a, b) => a - b;
const len = +userInput[0];
const [arr1, arr2] = [
    userInput[1].split(" ").map(Number),
    userInput[2].split(" ").map(Number),
];

const newArr = [...arr1, ...arr2].sort(compareAsc);
const middleElem = newArr.slice(len - 1, len + 1);
const sumOfMiddle = middleElem.reduce((a, b) => a + b);
console.log(sumOfMiddle);

//Ramesh is a student and wants to find out if there is any other student in his class who has got the same marks as his, in maths.
// Help him to find out.

userInput = ["3 2", "1 4 3"];
const [noStudents, mathsMark] = userInput[0].split(" ").map(Number);
const marks = userInput[1].split(" ").map(Number);

const output = marks
    .map((el, ind) => {
        if (mathsMark === el) {
            return ind;
        }
    })
    .filter((el) => el !== undefined);

if (output.length > 0) {
    console.log(output.join(" "));
} else {
    console.log(-1);
}

// Easiest way to find the INDEX
const indexOfStd = marks.findIndex((el) => el === mathsMark);

console.log(indexOfStd);

/* Find the number of occurence of String
INPUT 
code code code
learn
Output - 1 */

const [sentence, str] = userInput;
var occurence = 0;

if (!sentence.includes(str)) {
    console.log(-1);
} else {
    const newArr = sentence.split(" ");
    for (let word of newArr) {
        if (word === str) {
            occurence++;
        }
    }
    console.log(occurence);
}

/* Sort and concatenate the unequal dimensional Array
  Sample Input :
3 -- No of arrays given
2  -- Size of the array
98 12
6
1 2 3 8 5 9
1
11
Sample Output :
12 98 1 2 3 5 8 9 11 */

userInput = ["3", "2", "98 12", "6", "1 2 3 8 5 9", "1", "11"];

let outputArr = [];

for (let i = 1; i <= userInput.length; i++) {
    if (i % 2 === 0) {
        outputArr.push(...userInput[i].split(" ").map(Number).sort(compareAsc));
    }
}
console.log("Output Array ", outputArr);

let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let lastNum = sumArr[9];

let shuffledArr = [3, 4, 2, 1, 6, 10, 5, 8, 7];

let totalSum = lastNum * ((lastNum + 1) / 2);

let shuffledSum = shuffledArr.reduce((a, b) => a + b);
let missingNum = totalSum - shuffledSum;
console.log("Missing number in the array", missingNum);

function sum(a, b) {
    console.log("2params");
}

function sum(a) {
    console.log("1params");
}

/*function sum() {
    console.log("0params");
}*/

sum(1, 2);

let arrToRemove = [2, 5, 9, 1, 5, 8, 5];
let itemToRemove = 5;

const newArrAftRemoval = arrToRemove.filter((el) => el !== 5);

console.log("After removing item 5 ", newArrAftRemoval);

// Removing more items
let forDeletion = [2, 3, 5];

let origArr = [1, 2, 3, 4, 5, 3];

const afterRemoval = origArr.filter((el) => {
    // console.log("Item exists ?", forDeletion.includes(el));
    return !forDeletion.includes(el);
});

console.log("After deleting multiple elements", afterRemoval);

// Updating Array element
const stateObj = [{
        userId: 1,
        id: 100,
        title: "delectus aut autem",
        completed: false,
    },
    {
        userId: 1,
        id: 101,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
    {
        userId: 1,
        id: 102,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        userId: 1,
        id: 103,
        title: "et porro tempora",
        completed: true,
    },
];

const changedState = stateObj.map((el) =>
    el.id === 101 ? {...el, title: "Updated by Muthu" } : el
);

/*{
    if (el.id === 101) {
        el.title = "Updated title by me...";
        return el;
    } else {
        return el;
    }
}*/

console.log(changedState);