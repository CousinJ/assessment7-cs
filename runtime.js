const perf = require('execution-time')();
//for the doublerinsert function it takes 1.3321677 s 
//for the doublerappend function it takes 5.619 ms

/*
tiny array
insert - 86.5 micro seconds
append- 202.3 micro seconds
=========
smallarray
insert- 125.7 micro seconds
append- 311.8 micro seconds
============
mediumarray
insert- 373.8 micro seconds
append- 281.8 micro seconds
==========
largearray
insert- 12.0191 miliseconds
append- 901.8 micro seconds
=================
summary: 
the pattern is that when N is very small, the insert function (using unshift) is acutally faster in runtime. after the medium array which is about 1000n, the insert function gets a lot slower. 
it gets drastically slower when the array gets above 10,000.
EXTRA CREDIT: unshift is slower than push when n gets high because unshift adds the elemnent at index 0 and shifts EVERY value in the array by 1. you can see how when the array is a high value that this would be very time consuming versus just added one to the end. 
*/

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for arrays');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
//===============================================
//1 SUM ZERO 
function sumzero(array) {
    for(i = 0; i < array.length; i++) {
        for(z = 0; z < array.length; z++) {
            if(array[i] + array[z] === 0) {
                return true
            } 
                
            
        }
        
      

    } return false 
}

console.log(sumzero([1, 2, 3, -2]))
// this function I made is not  that time efficent. the runtime would be o(n^2) becuase the array could be any variable and the for loops are nested.
//====================================
function uniquecharacters(word) {
    let set = new Set(word)
    let array = word.split('')
    if(set.size === array.length) {
        return true
    } else {
        return false
    }
}
console.log(uniquecharacters('moonday'))
//this function is o(n) because it uses an array from the word variable. it uses multiple methods but not inside iterations so still o(n).
//=====================================
function pangram(sentence) {
    let modsent = sentence.split(' ').join('').toLowerCase().replaceAll('!')
    let set = new Set(modsent)
    console.log(set)
    if(set.size <= 26) {
        return true 
    } else {
        return false 
    }
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
//it is o(n) because there is no iterations of n. 
//================================
function longest(arrayofwords) {
    resultArr = []
    for(i = 0; i < arrayofwords.length; i++) {
        theset = new Set(arrayofwords[i])
        resultArr.push(theset.size)
    
    } console.log(resultArr)
      return Math.max(...resultArr)
}
console.log(longest(['hi', 'hello', 'sup']))
//this is o(n) 
//=====================================