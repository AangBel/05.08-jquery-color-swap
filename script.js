$(document).ready(onReady);
//when this button is clicked ...
function onReady() {
  console.log("I got this.");

  $("#generate-btn").on("click", generateRow);
} //end of onReady

//When this function is called i want it to do...
function generateRow(event) {
  const rowOneColorVar = $("#rowOne-btn");
  const rowTwoColorVar = $("#rowTwoColor");
  const rowThreeColorVar = $("#rowThreeColor");
  const rowFourColorVar = $("#rowFourColor");



$("#rowOneColorVar").on("click", ".block", rowOneColorAppend );
$("#rowOneColor").on("click", ".block", rowOneColorAppend);
$("#rowTwoColor").on("click", ".block", rowTwoColorAppend);
$("#rowThreeColor").on("click", ".block", rowThreeColorAppend);
$("#rowFourColor").on("click", ".block", rowFourColorAppend);

  event.preventDefault();
} //end of function generate row
 //---------------------------------------------------------------

function rowOneColorAppend() {
  $("#rowOneColor").append('<div class="block red-fill"></div>');
  // red++;
  // $('#red-count').append(red);
}
function rowTwoColorAppend() {
  $("#rowTwoColor").append('<div class="block red-fill"></div>');
  // blue++;
  // blueCount();
}
function rowThreeColorAppend() {
  $("#rowThreeColor").append('<div class="block red-fill"></div>');
  // green++;
  // greenCount();
}
function rowFourColorAppend() {
  $("#rowFourColor").append('<div class="block red-fill"></div>');
  //     yellow++;
  //     yellowCount();
}


// <!------------make it display a number (that changes when Generate is clicked)---->
    
//       <!-- first row --- make a yellow button ---->