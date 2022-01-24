
'use strict';

const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')


let stringToSplit = '';
let result = [];
// string to array
function splitString(string, newarray){
  let array = string.split(',');
  for (let n of array){
      let num = parseInt(n, 10);
      newarray.push(num);}
  return newarray;
}

splitString(input, result);


result.sort((a, b) => a - b);


// only unique numbers
let uniqueNums = [];
function uniqueNumsArray(array, newArray){
  for  (let num of array){
    if (!newArray.includes(num)){
      newArray.push(num);}
  }
  return newArray;
}

uniqueNumsArray(result, uniqueNums);


let resultArray = [];
let arrayToString = [];
let strClear = '';

function solve(numbers, result, string, array){
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === numbers[0]){
      result.push(numbers[i]);}
    else if (numbers[i] !== numbers[i-1] + 1 && numbers[i] === numbers[i+1] - 1){
      result.push(numbers[i]);}
    else if (numbers[i] !== numbers[i-1] + 1 && numbers[i] !== numbers[i+1] - 1){
      result.push(numbers[i]);}
    else if (numbers[i] === numbers[i+1] - 1){
      continue;}
    else if ((numbers[i] !== numbers[i+1] - 1) && (numbers[i] === numbers[i - 1] + 1)){
      result.push('-');
      result.push(numbers[i]);}
    else if (numbers[i] === numbers[numbers.length - 1]){
      result.push(numbers[numbers.length - 1]);}}
  array = result.join();
  string = array.replace(/,-,/g, '-');
return string;}


let filePath = 'output.txt'

try {fs.writeFileSync(filePath, solve(uniqueNums, resultArray, strClear, arrayToString));
  console.log('DONE');
} catch (Error) {
  console.log('Error of output', Error);
}
