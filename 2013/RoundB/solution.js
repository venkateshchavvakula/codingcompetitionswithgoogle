const fs = require('fs')
const input = fs.readFileSync('./testcases.txt', 'utf8').trim().split('\n');

let currentline = 0;

function readline() {
    return input[currentline++]
}

let T = readline();
for (let i = 1; i <= T; i++) {
    let N = Number(readline());
    let M=[]
    for(let j=1;j<= N * N;j++) {
        let S = readline().split(' ')
        M.push(S)
    }
    let isValidSquares = checksquareBox(M,N);
    let isValidRow  = checkRows(M,N)
    let isValidCoumn = checkRows(transposeArray(M),N)
     if(isValidSquares && isValidRow && isValidCoumn) {
      console.log(`Case #${i}: Yes`)
     } else {
      console.log(`Case #${i}: No`)
     }
}


function validNumer(arr,N) {
    let isValidNumber = false;
    for(let number of arr) {
        if (Number(number) > 0 && Number(number) <= (N*N)) {
            isValidNumber = true;
         } else {
            isValidNumber = false;
            break;
         }
    }
   return isValidNumber;
} 

 function uniqueRow(array) {
    let arr = [...new Set(array)];
    if (equalArray(array, arr)) {
        return array;
     }  
 }

 function equalArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
          return false;
       }
    }
    return true;
 }
 
 
 function validIndividualRow(row,N) {
    let uniqRow = uniqueRow(row);
    if (uniqRow && validNumer(row,N) && equalArray(row, uniqRow)) {
       return true;
    } else {
       return false;
    }
 }
 
 function checksquareBox(arr,N) {
    for (let i = 0; i < arr.length; i += N) {
       for (let j = 0; j < arr.length; j += N) {
          square = [];
          for (let k = i; k < i + N; k++) {
             for (let l = j; l < j + N; l++) {
                square.push(arr[k][l]);
             }
          }
          if (!validIndividualRow(square,N)) {
             return false;
          }
       }
    }   
    return true;
 }
 

 function transposeArray(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push([]);
       for (let j = 0; j < array.length; j++) {
        arr[i].push(array[j][i]);
       }
    }
    return arr;
 }
 
 function checkRows(arr,N) {
     for(let row of arr) {
        if (validIndividualRow(row,N)) {
            return true;
         } else {
            return false;
         }
     }
   
 }
 