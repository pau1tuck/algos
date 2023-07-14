// BINARY GAP
/* A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

// Convert N to binary and split to array [1,0,0,0,0,0,1,0,0,0,1]
const arr = N.toString(2).split();

let binaryGap = 0;
let a = null; // index of starting 1
let b = 0; // index of next 1 (0)

// for (i = 0; i < length; i++)     O[n]
// if x = null {
// if array[i] = "1" then x = index of array[i] }}
// else if i > x && array[i] = "1" {
//      then y = index of array[i] - 1
//      if y - x > L
//          then L = y - x
//  RESET:  x = index of array[i], y = 0 }}

// return L
