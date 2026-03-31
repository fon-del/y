function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// пример
let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // [1, 2, 3, 4, 5]