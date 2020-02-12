import React from "react";
const Basket = props => {
  //console.log(props.basketArray);
  let total = 0;
  for (let i = 0; i < props.basketArray.length; i++) {
    total = total + props.basketArray[i].qty * props.basketArray[i].price;
  }

  return (
    <div class="flex-basket">
      <div class="basket">
        <button class="btn-validate"> Valider Mon Panier</button>

        {props.basketArray.map(function(element, index) {
          return (
            <div class="flex-column">
              <div class="display-flex-items-basket margin-top">
                <div class="flex-start-items">
                  <div class="flex-icons-start">
                    <span
                      class="circle"
                      onClick={() => {
                        const basketArrayCopy = [...props.basketArray];
                        basketArrayCopy[index].qty++;
                        props.setBasketArrayItems(basketArrayCopy);
                      }}
                    >
                      +
                    </span>
                    <div> {element.qty}</div>
                    <span
                      class="circle"
                      onClick={() => {
                        const basketArrayCopy = [...props.basketArray];
                        if (basketArrayCopy[index].qty > 0) {
                          basketArrayCopy[index].qty--;
                          props.setBasketArrayItems(basketArrayCopy);
                        }
                      }}
                    >
                      -
                    </span>
                  </div>
                  <div class="flex-center-title">
                    <div class="font-bold"> {element.title}</div>
                  </div>
                </div>
                <div class="flex-end-items">
                  <div>{element.price}</div>
                </div>
              </div>
            </div>
          );
        })}

        <hr></hr>
        <div class="flex-items-basket-space-between margin-top">
          <div> Sous Total</div>
          <div>{Math.round(total)}</div>
        </div>
        <div class="flex-items-basket-space-between margin-top">
          <div> Frais de Livraison</div>
          <div>2,50</div>
        </div>

        <hr></hr>
        <div class="flex-items-basket-space-between">
          <div> Total</div>
          <div>{Math.round(total) + 2.5}</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
