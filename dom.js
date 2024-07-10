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