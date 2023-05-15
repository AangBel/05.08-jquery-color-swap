$(document).ready(onReady);
//when this button is clicked ...
function onReady() {
  console.log("I got this.");

  $("#generate-btn").on("click", generateRow);
} //end of onReady

$('#generate-btn').on('click', )

//When this function is called i want it to do...
function generateRow(event) {
  const rowOneColorVar = $("#rowOne-btn");
  const rowTwoColorVar = $("#rowTwoColor");
  const rowThreeColorVar = $("#rowThreeColor");
  const rowFourColorVar = $("#rowFourColor");



$("#rowOne-btn").on("click", ".block", rowOneColorAppend );
// $("#rowTwoColor").on("click", ".block", rowOneColorAppend);
$("#rowTwoColor").on("click", ".block", rowTwoColorAppend);
$("#rowThreeColor").on("click", ".block", rowThreeColorAppend);
$("#rowFourColor").on("click", ".block", rowFourColorAppend);

  event.preventDefault();
} //end of function generate row
 //---------------------------------------------------------------

function rowOneColorAppend() {
  $("#firstContainer").append('<div class="block red-fill"></div>');
  // red++;
  // $('#red-count').append(red);
}
function rowTwoColorAppend() {
  $("#secondContainer").append('<div class="block red-fill"></div>');
  // blue++;
  // blueCount();
}
function rowThreeColorAppend() {
  $("#thirdContainer").append('<div class="block red-fill"></div>');
  // green++;
  // greenCount();
}
function rowFourColorAppend() {
  $("#fourthContainer").append('<div class="block red-fill"></div>');
  //     yellow++;
  //     yellowCount();
}


// <!------------make it display a number (that changes when Generate is clicked)---->
    
//       <!-- first row --- make a yellow button ---->