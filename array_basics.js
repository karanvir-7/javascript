const fruits = ["Banana", "Orange", "Apple"];

console.log('typeof example:',typeof fruits); // returns object
console.log(Array.isArray(fruits));  // returns true

/* toString() */
// converts an array to a string of (comma separated) array values.
console.log(fruits.toString()); // Banana,Orange,Apple

/* join() */
/*The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator: */
console.log(fruits.join(" * ")); // Banana * Orange * Apple 
console.log(fruits.join()) // Banana,Orange,Apple
console.log(fruits.join("")) // BananaOrangeApple 

/* Insert/Delete Operations */

// The pop() method returns the value that was "popped out":
// The pop() method returns the value that was "popped out":
console.log(fruits.pop()); // Apple

// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:
console.log(fruits.push("Apple"))  // 3

// Shifting is equivalent to popping, but working on the first element instead of the last.