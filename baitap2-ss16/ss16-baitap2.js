const arr1 = [5, 2, -9, -1, 5, 6];
const arr2 = [3, 7, 4, 2, 8];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0];

function getMin(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(getMin(arr1)); // Output: -9
console.log(getMin(arr2)); // Output: 2
console.log(getMin(arr3)); // Output: undefined
console.log(getMin(arr4)); // Output: 0