"use strict";
//Question. 1
let max = (a, b) => {
    return a > b? a: b;
}
console.log("Max is: " + max(10, 20));
console.log("Max is: " + max(30, 20));
console.log("Max is: " + max(10, 10));

//Question. 2
let maxOfThree = function(a, b, c) {
    if(a > b)
        if(a > c) 
            return a;
        else
            return c;
    else
        if(b > c)
            return b;
        else
            return c;
}

console.log("Max of 3 is: " + maxOfThree(10, 20, 30));
console.log("Max of 3 is: " + maxOfThree(30, 20, 10));
console.log("Max of 3 is: " + maxOfThree(10, 20, 10));

//Question. 3
const isVowel = (str) => {
    const vowel = "aeiou";
    const lowerCase = str.toLowerCase();
    for(let i=0; i<lowerCase.length; i++)
        if(vowel.indexOf(lowerCase.charAt(i)) > -1)
            return true;
    return false;
}

console.log('Is Vowel ' + isVowel('Hello'));
console.log('Is Vowel ' + isVowel('GBDFH'));

//Question. 4
const calculator = {
    sum: (arr) => {
        let total = 0;
        arr.forEach(x => {
            total += x;
        });
        return total;
    },
    multiply: (arr) => {
        let total = 1;
        arr.forEach(x => {
            total *= x; 
        });
        return total;
    }
}

console.log("Total of SUM: " + calculator.sum([1,2,3,4]));
console.log("Total of Multiply: " + calculator.multiply([1,2,3,4]));

//Question. 5
const reverseString = (str) => {
    let newString = "";
    for(let i=str.length-1; i>=0; i--)
        newString += str.charAt(i);
    return newString;
}

console.log('Revere String: ' + reverseString('jag testar'));

//Question. 6
const findLongestWord = (words) => {
    let longest = words[0];
    for(let i=1; i<words.length; i++)
        if(longest.length < words[i].length)
            longest = words[i];
    return longest;
}

console.log("The longest word is: " + findLongestWord(["Hello", "Hello World", "Lorem Sum Lorem Sum", "I enjoy coding"]));

//Question. 7
const filterLongWords = (words, count) => {
    let newWords = []
    for(let i=0; i<words.length; i++)
        if(words[i].length > count)
            newWords.push(words[i]);
    return newWords;
}

console.log('Long Words are: ' + filterLongWords(["Hellos", "i", "me", "Worlds"], 5));

//Question. 8
const computeSumOfSquares = (nums) => {
    let total = 0;
    nums.forEach(num => {
        total += Math.pow(num, 2);
    });
    return total;
}
console.log("Compute Sum of Squares: " + computeSumOfSquares([1,2,3]));

//Question. 9
const printOddNumbersOnly = (arr) => {
    arr.forEach(x => {
        if((x % 2) != 0)
            console.log("odd Number: " + x);
    });
}

printOddNumbersOnly([1,2,3,4,5,6,7,8,9,10]);

//Question. 10
const computeSumOfSquaresOfEvensOnly = (nums) => {
    let total = 0;
    nums.forEach(num => {
        if((num % 2) == 0) 
            total += Math.pow(num, 2);
    });
    return total;
}
console.log("Compute Sum of Even Number Squares: " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

//Question. 11
const reducerCalculator = {
    sum: (arr) => {
        return arr.reduce((accum, value) => accum + value, 0);
    },
    multiply: (arr) => {
        return arr.reduce((accum, value) => accum * value, 1);
    }
}

console.log("Total of SUM (Reducer): " + reducerCalculator.sum([1,2,3,4]));
console.log("Total of Multiply (Reducer): " + reducerCalculator.multiply([1,2,3,4]));

//Question. 12
const findSecondBiggest = (arr) => {
    let firstBiggest = arr[0], secondBiggest = 0;
    for(let i=1; i<arr.length; i++) {
        if(firstBiggest < arr[i]) {
            secondBiggest = firstBiggest;
            firstBiggest = arr[i];
        } else if(secondBiggest < arr[i])
            secondBiggest = arr[i];
    }
    return secondBiggest;
}

console.log("Second Biggest Number is: " + findSecondBiggest([1,2,3,4,5]));
console.log("Second Biggest Number is: " + findSecondBiggest([19,9,11,0,12]));

//Question. 13
const printFibo = (n, a, b) => {
    if(n < 1) return;
    console.log(a);
    for(let i=1; i<n; i++) {
        console.log(b);
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibo(1, 0, 1);
printFibo(2, 0, 1);
printFibo(3, 0, 1);
printFibo(6, 0, 1);
printFibo(10, 0, 1);







