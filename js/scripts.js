function Pizza(size, toppings, price ) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}
//new pizza constructor example
// var pizza = new Pizza("small", ["olives", "pepperoni"], );
// Ex of output:   Pizza {size: "small", toppings: Array(2), cost: undefined}
// debugger;

Pizza.prototype.totalPrice = function() {
  var pizzaPrice = 4;
  if (this.size === "Medium") {
   pizzaPrice += 2;
 } else if (this.size === "Large") {
   pizzaPrice += 4;
}
  this.price = pizzaPrice;
}


$(document).ready(function(){


  $("form#order-form").submit(function(event){
  event.preventDefault();
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var allToppings =[]

    $("input:checkbox[name=toppings]:checked").each(function(){
    var checkedToppings = $(this).val();
    allToppings.push(checkedToppings);
    // $("form-check").submit(function(event){
  });
  console.log(pizzaSize)

  });   // })

});
