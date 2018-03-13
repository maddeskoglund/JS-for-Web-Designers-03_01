(function() {
"use strict";

var state = document.getElementById("s-state");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-hplus').addEventListener("submit", estimateTotal);


    var btnEstimate = document.getElementById('btn-estimate');

    btnEstimate.disabled = true;

    state.addEventListener("change", function() {

        if(state.value === "") {
            btnEstimate.disabled = true;
        } else {
            btnEstimate.disabled = false;
        }
    
      //  btnEstimate.disabled = (state.value === "");

    });
 });

    

  



	function estimateTotal(event) {
        event.preventDefault();

       

        if (state.value === "") {
            alert("Choose shipping state");

            state.focus();
        }

        var itemBball = parseInt(document.getElementById('txt-q-bball').value), 
            itemJersey = parseInt(document.getElementById('txt-q-jersey').value),
            itemPower = parseInt(document.getElementById('txt-q-power').value),
            itemWater = parseInt(document.getElementById('txt-q-water').value),
            shippingState = state.value,
            shippingMethod = document.querySelector('[name=r_method]:checked').value;
        
console.log(itemBball, itemJersey, itemPower, itemWater, shippingState, shippingMethod);

        var totalQty = itemBball + itemJersey + itemPower + itemWater,
            shippingCostPer,
            shippingCost,
            taxFactor = 1,
            estimate,
            totalItemPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower) + (4 * itemWater);

        if (shippingState === 'CA') {
            taxFactor = 1.075;
        }   else if  (shippingState === 'WA') {
            taxFactor = 1.065;
        }   

        if (shippingMethod == "pickup") {
            shippingCostPer = 0;
        } else if (shippingMethod == "usps") {
            shippingCostPer = 2;
        } else if (shippingMethod == "ups") {
            shippingCostPer = 3;
        }

        shippingCost = shippingCostPer * totalQty;

        estimate =  '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);

        document.getElementById('txt-estimate').value = estimate; 

        var results = document.getElementById('results');

        results.innerHTML = 'Total items: ' + totalQty + '<br>';
        results.innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
        results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';  // 7,50%

        // total items
        // total shipping cost
        // tax


        

    }
    
    
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/