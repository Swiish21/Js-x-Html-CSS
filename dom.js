const test = document.getElementById('test');
test.innerHTML = 'Hello World';

// in the code below we are creating a new html element in javascript(h1), then in the next line we are adding text to that element and given it a variable name headingTitle"
const new_item = document.createElement("h1")
const headingTitle = document.createTextNode("This is a heading");

// now we are adding the headingTitle text in green to the new_item element created in line 5
new_item.appendChild(headingTitle);

// now we are pushing the added element to the html page
const print_todom = document.getElementById('new_element');
print_todom.appendChild(new_item);

// Asssignment starts from here

const food = document.createElement("h2");
const foodTitle = document.createTextNode("My favourite food is Pizza! ");
food.appendChild(foodTitle);
const print_todom1 = document.getElementById('food_elements');
print_todom.appendChild(food)

const food1 = document.createElement("h2");
const foodTitle1 = document.createTextNode("My favourite food is Ugali! ");
food.appendChild(foodTitle1);
const print_todom2 = document.getElementById('food_elements');
print_todom.appendChild(food1)

// pets

const pets = document.createElement("h5");
const petsTitle = document.createTextNode("My favourite pet is a Cat! ");
pets.appendChild(petsTitle);
const print_todom4 = document.getElementById('pets_elements');
print_todom.appendChild(pets)

const pets1 = document.createElement("h5");
const petsTitle1 = document.createTextNode("My favourite pet is a Cat! ");
pets1.appendChild(petsTitle1);
const print_todom5 = document.getElementById('pets_elements');
print_todom.appendChild(pets1)

//colors

const color = document.createElement("h6");	
const colorTitle = document.createTextNode("My favourite color is Blue! ");
color.appendChild(colorTitle);
const print_todom6 = document.getElementById('pets_elements');
print_todom.appendChild(color)

const color1 = document.createElement("h6");	
const colorTitle1 = document.createTextNode("My favourite color is Blue! ");
color1.appendChild(colorTitle1);
const print_todom7 = document.getElementById('pets_elements');
print_todom.appendChild(color1)