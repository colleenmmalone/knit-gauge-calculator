// document.getElementById("A1")
//     .addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//        //document.getElementById("myButton").click();
//        alert("A1");
//     	}
// });
// 
// document.getElementById("A2")
//     .addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//        //document.getElementById("myButton").click();
//        alert("A2");
//     	}
// });
// 
// document.getElementById("A3")
//     .addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//        //document.getElementById("myButton").click();
//        alert("A3");
//     	}
// });
// 
// function searchKeyPress(e)
// {
//     // look for window.event in case event isn't passed in
//     e = e || window.event;
//     if (e.keyCode == 13)
//     {
//         document.getElementById('myButton').click();
//         return false;
//     }
//     return true;
// }

function compute(){

	var stitches = document.getElementById("A1").value;
	var width = document.getElementById("A2").value;
	var desWidth = document.getElementById("A3").value;
	var unitL = document.getElementById("unitL").value;

	var gauge = parseFloat(stitches / width).toFixed(2);
	var castOn = parseInt(stitches / width * desWidth);

	document.getElementById("gauge").innerText=gauge+" st/"+unitL;
    document.getElementById("projected").innerText=castOn+" stitches";
    }



