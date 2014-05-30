$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})
 
//RELEASE 1:
  //Add code here to select elements of the DOM 
  var bodyElement = $('body')
  var header = $('h1')
 
 
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 $('h1').css({'color': 'red', 'border': 'solid black 5px'})
 $("div h1").html("<h1>Chorus Frogs</h1>")

 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 $('img').on('mouseover', function(e){
 	e.preventDefault()
 	$(this).attr('src', 'http://soundofcritters.com/wp-content/uploads/2010/04/pacific-chorus-frog.jpg')
 })

 $('img').on('mouseleave', function(){
 	$(this).attr('src', "dbc_logo.jpg")
 })
 
//RELEASE 4 : Experiment on your own
 
 $('div img').css({'border': 'solid blue 5px'})
 $(document).ready(function(){
 	$('div img').animate({borderWidth:'50px'});
 });
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.
