$(document).ready(onReady);
//when this button is clicked ...
function onReady() {
  console.log("I got this.");

  $("#generate-btn").on("click", generateRow);
} //end of onReady

//When this function is called i want it to do...
function generateRow(event) {
  const rowOneColor = $("#rowOne-btn");
//   const rowTwoColor = $("#rowTwoColor");
//   const rowThreeColor = $("#rowThreeColor");
//   const rowFourColor = $("#rowFourColor");

  event.preventDefault();
} //end of function generate row
 //---------------------------------------------------------------



 
$("#rowOneColor").on("click", rowOneColorAppend);
$("#rowTwoColor").on("click", rowTwoColorAppend);
$("#rowThreeColor").on("click", rowThreeColorAppend);
$("#rowFourColor").on("click", rowFourColorAppend);

function rowOneColorAppend() {
  $("#rowOneColor").append('<div class="block red-fill"></div>');
  // red++;
  // $('#red-count').append(red);
}
function rowTwoColorAppend() {
  $("#rowTwoColor").append('<div class="block blue-fill"></div>');
  // blue++;
  // blueCount();
}
function rowThreeColorAppend() {
  $("#rowThreeColor").append('<div class="block green-fill"></div>');
  // green++;
  // greenCount();
}
function rowFourColorAppend() {
  $("#rowFourColor").append('<div class="block yellow-fill"></div>');
  //     yellow++;
  //     yellowCount();
}
