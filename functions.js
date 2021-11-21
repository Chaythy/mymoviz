/* Basic Functions */
/* ------------------------------------------- */

function myFunction (a, b) {
    if (a === 1) {
        return b;
    }

    return a + b;
}

// console.log(myFunction(1, 2));
// console.log(myFunction(2, 3));

const myArrowFunction = (a, b) => {
    if (a === 1) {
        return b;
    }

    return a + b;
}

const add = (a, b) => {
    return a + b;
}

const addBis = (a, b) => a + b

const nestedFunction = (a, b, c) => add(a, b) + c

const nestedFunctionBis = (a, b, c) => {
    return add(a, b) + c;
}

function myFunctionWithNoParam () {
    return true;
}

// console.log(myArrowFunction(1, 2));
// console.log(myArrowFunction(2, 3));


/* Array functions */
/* ------------------------------------------- */

const table = ["pomme", "cerise", "banane", "peche", "abricot"];
console.log(table)

const table2 = table.map((value, index) => {
    return `Miam les ${value} c'est bon !`;
})

console.log(table2)

const square = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
    const a = add(value, 3);
    return value * a
})

console.log(square)
