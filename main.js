// 1-masala

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// class Dogs {
//   constructor(breed, age) {
//     this.breed = breed;
//     this.age = age;
//   }

//   bark() {
//     return "Woof!";
//   }

//   getBreed() {
//     return this.breed;
//   }

//   getAge() {
//     return this.age;
//   }
// }

// let dogss = new Dogs("Labrador", 3);




// 3-masala

// function factory(x) {
//   return function (arr) {
//     return arr.map(num => num * x);
//   };
// }

// const multiplyBy2 = factory(2);
// console.log(multiplyBy2([1, 2, 3]));

// const multiplyBy5 = factory(5);
// console.log(multiplyBy5([1, 2, 3]));



// 4-masala

// String.prototype.myNewMethod = function () {
//   return this.toUpperCase();
// };

// const myString = "abc";

// console.log(myString.myNewMethod());


// 7-masala

// function pitchClass(note) {
//   const pitchClasses = {
//     'C': 0,  'C#': 1,
//     'D': 2,  'D#': 3,
//     'E': 4,
//     'F': 5,  'F#': 6,
//     'G': 7,  'G#': 8,
//     'A': 9,  'A#': 10,
//     'B': 11, 'Db': 1,
//     'Eb': 3, 'Gb': 6,
//     'Ab': 8, 'Bb': 10
//   };

//   return pitchClasses[note.toUpperCase()] || null;
// }

// 8-masala

// function toCamelCase(str) {
//   let result = "";
//   let capitalizeNext = false;

//   for (let char of str) {
//     if (char === "-" || char === "_") {
//       capitalizeNext = true;
//     } else {
//       if (capitalizeNext) {
//         result += char.toUpperCase();
//         capitalizeNext = false;
//       } else {
//         result += char;
//       }
//     }
//   }

//   return result;
// }


// chatGPT bor bolsoon (*_^);