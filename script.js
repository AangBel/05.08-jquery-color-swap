$(document).ready(onReady);

function onReady() {

  // let generateBtn = $("#generate-btn");

  // let rowOneBtn = $("#rowOne-btn");
  // let rowTwoBtn = $("#rowTwo-btn");
  // let rowThreeBtn = $("#rowThree-btn");
  // let rowFourBtn = $("#rowFour-btn");

  // let deleteBtn = $("#delete-btn");

  $("#generate-btn").on("click", generateRow);

  $("#rowOne-btn").on("click", ".yellow-btn", changeColor);
  $("#rowTwo-btn").on("click", ".yellow-btn", changeColor);
  $("#rowThree-btn").on("click", ".yellow-btn", changeColor);
  $("#rowFour-btn").on("click", ".yellow-btn", changeColor);

  $("#container").on("click", ".delete-btn", deleteRow);
}

let rowCounter = 1;

function generateRow() {
 
  $("#firstContainer").append(`
    <div class="row" data-row="${rowCounter}">
    <section style="background-color: red")
      <p>Row ${rowCounter}</p>
      <button class="yellow-btn">Yellow</button>
      <button class="delete-btn">Delete</button>
    </div>
   `);
  rowCounter++;
  console.log(generateRow);
}
// rowFourBtn

  // $("block").on("click", changeColor);
function changeColor() {
  $(this).parent().append("red-fill");
  console.log(changeColor);
}

function deleteRow() {
  $(this).parent().remove();
  rowCounter--;
  }

// function onReady() {
//   console.log("I got this.");

//   $("#generate-btn").on("click", function () {
//     const div = $("<div></div>").addClass("block red-fill");
//     // Append the div to the appropriate container
//     $("#firstContainer").append(div);

//   });
//   $('#generate-btn').on('click', function () {
//     const div = $('<div></div>').addClass('block red-fill');
// })

//   $("#generate-btn").on("click", rowTwoColorAppend);
//   $("#generate-btn").on("click", rowThreeColorAppend);
//   $("#generate-btn").on("click", rowFourColorAppend);
//   } 


//   $("#rowOne-btn").on("click", ".block", rowOneColorAppend);
//   // $("#rowTwoColor").on("click", ".block", rowOneColorAppend);
//   $("#rowTwoColor").on("click", ".block", rowTwoColorAppend);
//   $("#rowThreeColor").on("click", ".block", rowThreeColorAppend);
//   $("#rowFourColor").on("click", ".block", rowFourColorAppend);

//   event.preventDefault();
//  //end of onReady 
// //end of function generate row
// //---------------------------------------------------------------
// //I want a red block section to appear when the rowOne button is clicked
// function rowOneColorAppend() {
//   //here i want to append a div with a class of block and red-fill
//   // $("#firstContainer").append(`
//   // <div class="block red-fill"></div>
  
//   // `);

//   // ${'#first'}


//   $("#firstContainer").append(`<div class="block color-fill"></div>`);

// } //end of rowOneColorAppend
// //I want a blue block section to appear when the rowTwo button is clicked
// //what do i do to make the blue appear?
// function rowTwoColorAppend() {
//   //why is the line 43 not working?
//   $("#secondContainer").append(`
//   <div class="block red-fill"></div>

 
//   `);
//   // blue++;
//   // blueCount();
// }
// //I want a green block section to appear when the rowThree button is clicked
// //why does line 49 have the red underlined?
// function rowThreeColorAppend() {
//   $("#thirdContainer").append(`
//   <div class="block red-fill"></div>
//   `);
//   // green++;
//   // greenCount();
// }
// //I want a yellow block section to appear when the rowFour button is clicked
// function rowFourColorAppend() {
//   $("#fourthContainer").append(`
//   <div class="block red-fill"></div>
//   `);
//   //     yellow++;
//   //     yellowCount();
// }

// // <!------------make it display a number (that changes when Generate is clicked)---->

// //       <!-- first row --- make a yellow button ---->
