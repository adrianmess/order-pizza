// BackEnd

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

Pizza.prototype.totalPrice = function() {
  var pizzaPrice = 4;
  if (this.size === "Medium") {
    pizzaPrice += 2;
  } else if (this.size === "Large") {
    pizzaPrice += 4;
  } if (this.toppings.length >= 1)  {
    pizzaPrice += .75 * this.toppings.length
  }
  this.price = pizzaPrice;
}

//FrontEnd
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
  });
});
