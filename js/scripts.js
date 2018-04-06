$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var numberInputInt = parseInt(numberInput);

  })

});
