// /* returning function */
// function three() {
//   return function() {
//     console.log("three");
//   };
// }
// let myFunc = three();
// myFunc();


// /* object graph */
// let a = {
//   b: [
//     {c: "everything"},
//     {d: "is"},
//     {e: "awesome"}
//   ]
// }
// console.log(a.b[2].e);

// /* module pattern 1 */
// var counter = (function() {
//   let a = "first";

//   return {
//     value: a
//   }
// })();
// console.log(counter.value);

// /* module pattern 2 */
// var counter = (function() {

//   // Private properties and methods
//   let count = 0;
//   function print(message) {
//     console.log(message + " ---- " + count);
//   }

//   // Return an object
//   return {
//     value: count,
//     increment: function() {
//       count += 1;
//       print("After increment: ");
//     },
//     reset: function() {
//       print("Before reset: ");
//       count = 0;
//       print("After reset: ");
//     }
//   }
// })();
// counter.increment();

// /* not incremented, count is behind a closure which means when w try to access count it gets reset to 0 */
// console.log(counter.value); 

// /* module pattern 2 */
// var counter = (function() {

//   // Private properties and methods
//   let count = 0;
//   function print(message) {
//     console.log(message + " ---- " + count);
//   }

//   // Return an object
//   return {
//     get: function() {
//       return count;
//     },
//     set: function(value) {
//       count = value;
//     },
//     increment: function() {
//       count += 1;
//       print("After increment: ");
//     },
//     reset: function() {
//       print("Before reset: ");
//       count = 0;
//       print("After reset: ");
//     }
//   }
// })();
// counter.increment();
// counter.set(7);
// console.log(counter.get()); 
// counter.reset();

// /* this keyword */ 
// function one() {
//   return this;
// }
// console.log(one() === global);

// /* this keyword */ 
// function one() {
//   "use strict"
//   return this;
// }
// console.log(one() === global);

// /* Module Pattern */
// var counter = (function() {
//   // Private properties and methods
//   let count = 0;

//   function print(message) {
//     console.log(message + " --- " + count);
//   }

//   // Return objects
//   return {
//     value: function() {
//       return count;
//     },
//     add: function() {
//       count += 1;
//       print("After increment: ");
//     },
//     reset: function() {
//       print("Before reset: ");
//       count = 0;
//       print("After reset: ");
//     }
//   }
// })();

// counter.add();
// counter.add();
// counter.add();
// counter.add();
// counter.add();
// // Despite replacing the value property to 10, counter.value's value remains constant and does not change. This feature is one of the advantage of module pattern.
// counter.value = 10;
// console.log(counter.value);
// counter.add();
// counter.reset();
// counter.add();
// counter.add();
// counter.add();


// /* Revealing Pattern */

// var counter = (function() {
//   // Private properties and methods
//   let count = 0;

//   // Function declarations
//   function print(message) {
//     console.log(message + " --- " + count);
//   };

//   function getCount() {
//     return count;
//   };

//   function addCount() {
//     count += 1;
//     print("After increment:")
//   };

//   function resetCount() {
//     print("Before reset:");
//     count = 0;
//     print("After reset:");
//   };

//   // Revealing part
//   return {
//     get: getCount,
//     add: addCount,
//     reset: resetCount
//   }

// })();


// counter.add();
// counter.add();
// counter.add();
// counter.add();
// // Overrides the get property, downside of revealing pattern
// counter.get = 7;
// counter.get();
// counter.add();
// counter.reset();

// /* https://javascript.info/function-basics */
// (function checkAge(age) {
//   return (age > 18) ? true : confirm("Do you have permission?");
// })();

// /* Destructuring objects */
// let year, model;
// ({year, model} = {
//   model: "745li",
//   year: 2010,
//   make: "bmw",
//   value: 5000
// });


// /* Regular Expressions */
// let pattern = /xyz/;
// let value = "This is xyz test";

// console.log(pattern.test(value));
// console.log(value.replace(pattern, "myString"));
// console.log(value.match(pattern));

// /* Constructor Function - a template for creating new objects */
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// let myCar = new Car("bmw", "745li", 2010);

// console.log(myCar); // Car {make: "bmw", model: "745li", year: 2010}


// /* Objects and Prototype Chain */ 
// // Prototype
// let OriginalCar = {
//   make: "bmw",
//   model: "745li",
//   year: "2010"
// };

// // Create new object from existing object
// let MyCar = Object.create(OriginalCar);

// console.log(MyCar.make) // "bmw"

// /* Event Handler and Listeners */
// let body = document.querySelector("body");

// body.addEventListener("click", () => {
//   alert("Hello World!");
// });