const fruits = ["Banana", "Orange", "Apple"];
const _ = v => console.log(v)


_('typeof example:',typeof fruits); // returns object
_(Array.isArray(fruits));  // returns true


/* toString() */
// converts an array to a string of (comma separated) array values.
_(fruits.toString()); // Banana,Orange,Apple


/* join() */
/*The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator: */
_(fruits.join(" * ")); // Banana * Orange * Apple 
_(fruits.join()) // Banana,Orange,Apple
_(fruits.join("")) // BananaOrangeApple 



/* Insert/Delete Operations */
// The pop() method returns the value that was "popped out":
// The pop() method returns the value that was "popped out":
_(fruits.pop()); // Apple

// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:
_(fruits.push("Apple"))  // 3

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
_(fruits.shift()); // Banana

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// returns the new array length:
_(fruits.unshift("Banana")); // 3

/* delete() */
// Using delete() leaves undefined holes in the array.
_(delete fruits[0]);  // true
_(fruits) // [ <1 empty item>, 'Orange', 'Apple' ]
fruits[0] = 'Banana'

/* concat() */
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
_(myChildren)  // [ Cecilie', 'Lone', 'Emil','Tobias', 'Linus', 'Robin', 'Morgan']

/* flat() */
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
_(newArr) // [ 1, 2, 3, 4, 5, 6 ]