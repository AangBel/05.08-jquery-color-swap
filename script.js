$(document).ready(onReady);

function onReady() {
    console.log("I got this.");
   
    $("#generate-btn").on("click", generateRow);




  } //end of onReady


  function generateRow(event) {
    const redButton = $("#red-btn");
    const blueButton = $("#blue-btn");
    const greenButton = $("#green-btn");
    const yellowButton = $("#yellow-btn");




    
    console.log(inputFirstName, inputLastName, inputID, inputTitle, inputSalary);
    //---------------------------------------------------------------
    event.preventDefault();

  }//end of function generate row 