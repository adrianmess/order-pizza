function Pizza(size, toppings, cost ) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

//new pizza constructor example
// var pizza = new Pizza("small", ["olives", "pepperoni"], );
// Ex of output:   Pizza {size: "small", toppings: Array(2), cost: undefined}

$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var numberInputInt = parseInt(numberInput);

  })

});
