/* This is a staircase of size n = 4:

   #
  ##
 ###
####

Write a function that takes parameter n and prints a staircase of size n. */

const staircase = n => {
    let array = new Array(n).fill(" ");
    for (let i = 1; i <= n; i++) {
        array[n - i] = "#";
        console.log(array.join(""));
    }
};
