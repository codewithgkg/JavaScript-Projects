let foodInput = document.getElementById("food");

let calculateBtn = document.getElementById("calculateBtn");

let total = document.getElementById("total");

let travelInput = document.getElementById("travel");

let shoppingInput = document.getElementById("shopping");

let otherInput = document.getElementById("other");

calculateBtn.addEventListener("click", function() {

    let totalExpense = Number(foodInput.value) + Number(travelInput.value) + Number(shoppingInput.value) + Number(otherInput.value);

    total.textContent = totalExpense;

});