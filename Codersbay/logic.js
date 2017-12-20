// Initialize Firebase

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBx4Er96YhfcIBr6C965UgptMa0b20UpI",
    authDomain: "test-project-2-52977.firebaseapp.com",
    databaseURL: "https://test-project-2-52977.firebaseio.com",
    projectId: "test-project-2-52977",
    storageBucket: "test-project-2-52977.appspot.com",
    messagingSenderId: "951879364098"
  };
  firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
//var database = ...

var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on("value", function(snapshot) {
	console.log(snapshot.val());
	if (snapshot.val().bid > 0) {
	highBidder = snapshot.val().bidder;
	highPrice = snapshot.val().bid;
	$('#highest-bidder').text(highBidder);
	$('#highest-price').text(highPrice);
}
else {
	database.ref().set({
		bidder: highBidder,
		bid: highPrice
	});
}
});


// If Firebase has a highPrice and highBidder stored (first case)






// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...


// Change the HTML to reflect the stored values


// Print the data to the console.


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.





// Change the HTML to reflect the initial values


// Print the data to the console.




// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

$('#submit-bid').on("click", function(event) {
event.preventDefault();
var newBidder = $('#bidder-name').val();
var newPrice = $('#bidder-price').val();
console.log(newBidder);
console.log(newPrice);

if (parseInt(newPrice) > highPrice) {
	highPrice = newPrice;
	highBidder = newBidder;
	database.ref().set({
		bidder: highBidder,
		bid: highPrice
	});
	alert("You are the highest bidder");
}

else {
	alert("Sorry that bid is to low");
}
});

// prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert