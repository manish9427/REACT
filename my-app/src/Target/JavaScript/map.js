const fruits = ["apple", "banana", "orange"];

const result = fruits.map((fruit, index, array) => {
  console.log(`Processing element: ${fruit}`);
  console.log(`Index of element: ${index}`);
  console.log(`Original array: ${array}`);
  return fruit.toUpperCase();
});

console.log(result);

/*
The map function is a higher-order function in JavaScript that is commonly used to iterate over an array and transform each element into a new value. It creates a new array with the results of calling a provided function on every element in the original array.

Here is the syntax for using the map function:
array.map(callback(element, index, array))

Let's break down each part of the map function:

array: The original array that you want to iterate over.
callback: A function that is called for each element in the array. It takes three arguments:
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array on which map was called.
The callback function is invoked for each element in the array, and the return value of the callback function is used as the corresponding element in the new array that map creates. The new array has the same length as the original array.

Here's an example to illustrate the usage of the map function:


*/
console.log("==============================");

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]
