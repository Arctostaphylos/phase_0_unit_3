// U3.W8-9: 


// I worked on this challenge [by myself].

// 2. Pseudocode

//three functions: list, add, and remove.
// list prints out the list of items to purchase with their quantities
// add adds a new item to the list with a default quantity of 1
// remove removes the item from the list

// 3. Initial Solution

var list = new Object()
list["brocolli"] = 2
list["bok choy"] = 1

var print_list = function(){
	document.getElementById("list").innerHTML = ''
	for (var key in list){
	 var elem = document.createElement("li");
	 elem.innerHTML = key;
	 document.getElementById("list").appendChild(elem);
	};
	
}

var addItem = function(item, quantity=1){
	list[item] = quantity;
}

var removeItem = function(item){
	delete list[item];
}

var addButton = function(form_data){
	data = form_data.inputbox.value;
	addItem(data);
	print_list();
}

var deleteButton = function(form_data){
	data = form_data.inputbox.value;
	removeItem(data);
	print_list();
}
// 4. Refactored Solution


// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE


// 5. Reflection 
// This represented a lot of google time to figure out how to integrate the
// javascript with the html. The key element was learning how to create a form
// in html and then pass the form data to the javascript. Specifically, line
// 38 in addButton where I am extracting the value from the form field called 
// "inputbox". It also took me a long time to sort out how to get my list to
// print using a for/in loop. The key was to create an unordered list in the html
// and then use "appendChild" to add another li element to the list. 

// This version of the script doesn't incorporate any information about quantity
// even though my list object is collecting that data. I think I would have to 
// output my list in the form of a table, and I'd need another input box to collect
// quantity information from the user. 
