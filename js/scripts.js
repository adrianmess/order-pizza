function Pizza(size, toppings, price) {
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
  var finalCost= 0;


  $("form#order-form").submit(function(event){
  event.preventDefault();
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var allToppings =[]

    $("input:checkbox[name=toppings]:checked").each(function(){
    var checkedToppings = $(this).val();
    allToppings.push(checkedToppings);
  });

    var initPizza = new Pizza(pizzaSize, allToppings);
    initPizza.totalPrice();
    var finalPrice = initPizza.price
    $("#total-price").text(finalPrice.toFixed(2));

    console.log(finalCost)
    console.log(pizzaSize)
    console.log(initPizza)
    console.log(initPizza.price)
    console.log(finalPrice)
  });   // })

});
