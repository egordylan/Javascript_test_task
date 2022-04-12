
'use strict';

const fs = require('fs')
const input = fs.readFileSync('D:\/WarGamingForge\/Javascript_test_task\/input.txt', 'utf-8')


const result = [];
// string to array
function splitString(string, newArray){
  let array = string.split(',');
  for (let n of array){
      //let num = parseInt(n, 10);
      newArray.push(Number(n));}
  return newArray;
}

// only unique numbers
const uniqueNums = [];
function uniqueNumsArray(array, newArray){
  array.sort((a, b) => a - b);
  for  (let num of array){
    if (!newArray.includes(num)){
      newArray.push(num);}
  }
  return newArray;
}


const resultArray = [];
const arrayToString = [];

function solve(numbers, result, array){
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
  let string = array.replace(/,-,/g, '-');
return string;}

splitString(input, result);
uniqueNumsArray(result, uniqueNums);

const filePath = 'output.txt'


try {fs.writeFileSync(filePath, solve(uniqueNums, resultArray, arrayToString));
  console.log('DONE');
  //console.log(String(resultArray));
} catch (Error) {
  console.log('Error of output', Error);
}