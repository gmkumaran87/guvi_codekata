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