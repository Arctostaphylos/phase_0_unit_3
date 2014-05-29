// U3.W8-9: Challenge you're converting
//U3.W7: Build an electronic grocery list

// I worked on this challenge [by myself].

// 2. Pseudocode
// create an object that will be the list. Item name will be property and quantity will be value.
// functions add and remove items from the list
// function displays the list including quantity


// 3. Initial Solution

var list ={}
function addToList(item, quantity){
	list[item] = quantity
};

var removeList = function(item){
	delete list[item]
};
var display = function(){
	for (item in list){
		console.log(list[item] + " - " + item)
	}
};


// 4. Refactored Solution






// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

addToList("brocolli", 1)
addToList("tofu", 2)
addToList("steak", 1)


display()
removeList("brocolli")
display()


// 5. Reflection 