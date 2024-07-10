function greet() {
  // block of code
  console.log("JavaScript Functions Hello world");
}
greet();

const greet2 = (fName, lName, gender, age) => {
  console.log(fName, lName, gender, age);
};
greet2("Evans \n", "Mutuku \n", "male \n", 25);

var name = "Evans";

function displaySum(a, b) {
  // let sum = a + b
  console.log(a + b);
}

displaySum(12, 34);

function addSum(a, b) {
  return a + b;
}

console.log(addSum(67, 34));

//
