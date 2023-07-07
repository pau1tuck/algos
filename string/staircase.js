/* This is a staircase of size n = 4:

   #
  ##
 ###
####

Write a function that takes parameter n and prints a right-aligned staircase of size n. */

const staircase = n => {
    let step = new Array(n).fill(" ");
    for (let i = 1; i <= n; i++) {
        step[n - i] = "#";
        console.log(step.join("")); // Use "" otherwise commas in output
    }
};
