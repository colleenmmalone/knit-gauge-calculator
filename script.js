
function updateRate(){
	// get and report value for percentage rate
	var rateval = document.getElementById("rate").value
	document.getElementById("rate_val").innerText=rateval+"%";

}



function compute(){
	// set variable to principal input
	var principal = document.getElementById("principal").value;
	
	//validation for principal input
	if(principal <= 0){
	alert("Please enter a positive value");
	document.getElementById("principal").focus();
	return false;
	}
	
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate /100
	var year = new Date().getFullYear()+parseInt(years);


    p = document.getElementById("principal").value;
    document.getElementById("interest").innerText=interest;
    
  
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"</mark>% <br>You will receive an amount of <mark>"+interest+"</mark><br>in the year <mark>"+year+"</mark>";

    
    }



function calcGauge(){

var stitches = document.getElementById("A1").value;
var width = document.getElementById("A2").value;
var desWidth = document.getElementById("A3").value;

var gauge = stitches / width;
var castOn = stitches / width * desWidth;

document.getElementById("gauge").innerText=gauge;
document.getElementById("caston").innerText=castOn;


}

/*
function formNav{



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
 
 }
 

 
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

