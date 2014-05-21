// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [by myself]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode
// for/in loop going through votes. At each iteration, update the property of voteCount.president to be 
// the value associated with votes.president and the value of voteCount.president to increment by one. Do the 
// same for each position.

//for/in loop going through voteCount. Set the winner to the first student in the object, and then compare subsequent
// students to the first. If any student has more votes, set that student to be the winner, and continue.

// __________________________________________
// Initial Solution


for (var key in votes){
 
  if (voteCount.president[votes[key].president] >= 1){
    voteCount.president[votes[key].president] += 1
  }else{
  voteCount.president[votes[key].president] = 1;
  }

  if (voteCount.vicePresident[votes[key].vicePresident] >= 1){
    voteCount.vicePresident[votes[key].vicePresident] += 1
  }else{
    voteCount.vicePresident[votes[key].vicePresident] = 1;
  }
  
  if (voteCount.secretary[votes[key].secretary] >= 1){
    voteCount.secretary[votes[key].secretary] +=1;
  }else{
    voteCount.secretary[votes[key].secretary] = 1
  }

  if (voteCount.treasurer[votes[key].treasurer] >= 1){
    voteCount.treasurer[votes[key].treasurer] +=1;
  }else{
    voteCount.treasurer[votes[key].treasurer] = 1;
  }
  
}

voteCount.president[winner] = 0
for (var key in voteCount.president){
  if (voteCount.president[key] > voteCount.president[winner]){
    winner = key
  }
}
officers.president = winner

voteCount.vicePresident[winner] = 0
for (var key in voteCount.vicePresident){
  if (voteCount.vicePresident[key] > voteCount.vicePresident[winner]){
    winner = key
  }
}
officers.vicePresident = winner

voteCount.secretary[winner] = 0
for (var key in voteCount.secretary){
  if (voteCount.secretary[key] > voteCount.secretary[winner]){
    winner = key
  }
}
officers.secretary = winner

voteCount.treasurer[winner] = 0
for (var key in voteCount.treasurer){
  if (voteCount.treasurer[key] > voteCount.treasurer[winner]){
    winner = key
  }
}
 officers.treasurer = winner



// __________________________________________
// Refactored Solution
for (var office in voteCount){
  for (var key in votes){
 
  if (voteCount[office][votes[key][office]] >= 1){
    voteCount[office][votes[key][office]] += 1
  }else{
  voteCount[office][votes[key][office]] = 1;
  }

}

  
}
for (var office in voteCount){
  voteCount[office][winner] = 0
  for (var key in voteCount[office]){
    if (voteCount[office][key] > voteCount[office][winner]){
      winner = key
    }
  }
officers[office] = winner
}



// __________________________________________
// Reflection
// My initial solution worked, but wasn't very DRY. It took me a while to work out how to 
// access the different nested objects, but the key thing I realized is that you have to use
// bracket notation when the property you're looping through is a string. Once I was able to
// get some code that passed all the tests, it was obvious that I had a lot of repetition that
// could be cleaned up by nesting my for loops inside another for loop.





// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)