const test = document.getElementById("test");
test.innerText = "My name is Evans";

// Creating new elements
const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("This is  a new element");

newItem.appendChild(headingTitle);

const printToDom = document.getElementById("newElement");
printToDom.appendChild(newItem);

//  ASSIGNMENT
// - Create a new element that prints out your favorite dish, pets, colors
// - Make sure to push this code to github
