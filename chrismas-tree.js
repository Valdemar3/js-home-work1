// // Set the size of the tree
// const size = 10;

// // Create the tree trunk
// const trunkHeight = size / 3;
// const trunkWidth = size / 3;
// const trunkLeft = size / 2 - trunkWidth / 2;

// // Loop through each row of the tree
// for (let i = 0; i < size; i++) {
//   let row = "";

//   // Add spaces to center the tree
//   for (let j = 0; j < size - i; j++) {
//     row += " ";
//   }

//   // Add branches to the row
//   for (let j = 0; j < i * 2 + 1; j++) {
//     row += "*";
//   }

//   // Output the row to the console
//   console.log(row);
// }

// // Create the star
// const star = "*".repeat(trunkWidth + 1);

// // Output the trunk and star to the console
// for (let i = 0; i < trunkHeight; i++) {
//   let row = " ".repeat(trunkLeft) + "*".repeat(trunkWidth);
//   console.log(row);
// }

// console.log(" ".repeat(trunkLeft) + star);


// Set the size of the tree
const size = 10;

// Create the tree trunk
const trunkHeight = size / 3;
const trunkWidth = size / 3;
const trunkLeft = size / 2 - trunkWidth / 2;

// Loop through each row of the tree
for (let i = 0; i < size; i++) {
  let row = "";

  // Add spaces to center the tree
  for (let j = 0; j < size - i; j++) {
    row += " ";
  }

  // Add branches to the row
  for (let j = 0; j < i * 2 + 1; j++) {
    if (j % 2 === 0) {
      row += "-";
    } else {
      row += (i + 1) % 10; // Use modulus operator to keep the number within 0-9 range
    }
  }

  // Output the row to the console
  console.log(row);
}

// Create the star
const star = "-".repeat(trunkWidth + 1);

// Output the trunk and star to the console
for (let i = 0; i < trunkHeight; i++) {
  let row = " ".repeat(trunkLeft) + "|".repeat(trunkWidth);
  console.log(row);
}

console.log(" ".repeat(trunkLeft) + star);