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
