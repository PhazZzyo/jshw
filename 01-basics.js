// Write the next functions with expressive form and then rewrite it with arrow functions,
// when you have to use loops you need to rewrite the same loop with different syntax
// (use for i, for of, for in, for each, while and do while)


//********** 1 */

console.log("1. Write a function to convert Celsius to Fahrenheit")

function convertToF(celsius) {
    return celsius * 1.8 + 32
}
console.log("Result:", convertToF(30), "F")

const convertToFArrow = celsius => celsius * 1.8 + 32
console.log("Result:", convertToFArrow(-273.15).toFixed(2), "F", '\n')

//********** 2 */

console.log("2. Write a function to find the area of a given Rectangle")

function area(length, width) {
    return length * width
}
console.log("Result:", area(2, 2));

const areaArrow = (length, width) => length * width
console.log("Result:", areaArrow(3, 3), '\n')

//********** 3 */

console.log("3. Write a function to reverse a number")

function reverse(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}
console.log("Result:", reverse(12345))

const reverseArrow = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log("Result:", reverseArrow(3.14159265), '\n')

//********** 4 */

console.log("4. Write a function to convert a string into title case")

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }
    )
}
console.log(toTitleCase("hello  world"))
console.log(toTitleCase("while she sleeps"), '\n')

//********** 5 */

console.log("5. Write a function to find a largest number in array, you have to use loops")

function largestNum(arr) {
    let maxValue = 0
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue
}
console.log("for i", largestNum([4, 2, 5, 6, 1]))

const largestNumArrow = arr => {
    let maxValue = 0
    for (let value of arr) {
        if (value > maxValue) {
            maxValue = value;
        }
    }
    return maxValue
}
console.log("for of", largestNumArrow([4, 2, 5, 6, 9]))

function largestNumInObj(obj) {
    let maxValue = 0
    for (const prop in obj) {
        if (obj[prop] > maxValue) {
            maxValue = obj[prop];
        }
    }
    return maxValue
}
console.log("for in", largestNumInObj({ a: 3, b: 5, c: 1 }))

const largestNumForEach = arr => {
    let maxValue = 0
    arr.forEach((element) => {
        if (element > maxValue) {
            maxValue = element
        }
    })
    return maxValue
}
console.log("for each", largestNumForEach([4, 2, 5, 6, 7]))

const largestNumWhile = arr => {
    let i = 0
    let maxValue = 0
    while (i < arr.length) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
        i += 1
    }
    return maxValue
}
console.log("while", largestNumWhile([2, 2, 3, 3, 4]))

const largestNumDoWhile = arr => {
    let i = 0
    let maxValue = 0
    do {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
        i += 1
    } while (i < arr.length)
    return maxValue
}
console.log("do while", largestNumDoWhile([5, 8, 3, 2, 1]), '\n')

//********** 6 */

console.log("6. Write a function to check if an input string is a palindrome")

function palindrome(str) {
    const re = /[\W_]/g
    const lowRegStr = str.toLowerCase().replace(re, '')
    const reverseStr = lowRegStr.split('').reverse().join('')
    return reverseStr === lowRegStr
}
console.log("Is TeNeT a palindrome?", palindrome("TeNeT"))
console.log("Is 'A man, a plan, a canal.Panama' a palindrome?", palindrome("A man, a plan, a canal. Panama"))
console.log("Is 'Hello World!' a palindrome?", palindrome("Hello World!"), '\n')

//********** 7 */

console.log("7. Write a function to find the number of zeros in 2D Matrix [[0,1,1],[0,1,0],[1,0,0]]")

let numberOfZeros = 0

function findZeros(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            findZeros(arr[i])
        } else {
            if (arr[i] === 0)
                numberOfZeros += 1
        }
    }
    return numberOfZeros
}
console.log("The total quantity of zeros is", findZeros([[0, 1, 1], [0, 1, 0], [1, 0, 0]]), '\n')

//********** 8 */

console.log("8. Write a function to find product of two arrays [3,5,8] * [3,2,10] // [9, 10, 80];")

const arrProduct = (arr1, arr2) => {
    let productArr = []
    for (var i = 0; i < arr1.length; i++) {
        let sum = 0
        sum += arr1[i] * arr2[i];
        productArr.push(sum)
    }
    return productArr
}

console.log("The result is", arrProduct([3, 5, 8], [3, 2, 10]))