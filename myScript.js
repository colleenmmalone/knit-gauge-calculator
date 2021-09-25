
calcGauge(){
var stitches = document.getElementById("A1");
var width = document.getElementById("A2");
var desWidth = document.getElementById("A3");

var gauge = stitches / width;
var castOn = stitches / width * desWidth;

document.getElementById("gauge").innerText=gauge;
document.getElementById("caston").innerText=castOn;


}





/*
// Get the input field
var input1 = document.getElementById("A1");
//var winput = document.getElementById("width");
//var dinput = document.getElementById("desWidth");
 
 

// Execute a function when the user releases a key on the keyboard
input1.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("A2").focus();
  }
})
 
 

 
 // Execute a function when the user releases a key on the keyboard
winput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("desWidth").focus();
  }
});
 
 
 
 
// Execute a function when the user releases a key on the keyboard
dinput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
*/

