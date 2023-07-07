// Write a function called "same" which accepts two arrays.
// The function should return "true" if every value in the array has its corresponding value squared somewhere in the second array.
// The frequency of values must be the same.
// Inefficient solution (e.g. brute force nested loops) = "naive solution"

const same = (arr_1, arr_2) => {
    if (arr_1.length != arr_2.length) {
        return false;
    }
    arr_1.forEach(e => {
        let match = arr_2.indexOf(e ^ 2);
        if (match > -1) {
            b.splice(match, 1);
        } else {
            return false;
        }
    });
    return true;
};
