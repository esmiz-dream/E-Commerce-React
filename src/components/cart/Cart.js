import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartEmpty from "./CartEmpty";
import PayPalButton from "./PayPalButton";
import {BrowserRouter} from 'react-router-dom'

export default function Cart() {
  const history = BrowserRouter();
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, company, info, inCart, count, total } =
          value.detailProduct;
        const { cart, cartSubTotal, cartTotal, cartTax, clearCart } =
          value;

        if (cart.length > 0) {
          return (
            <div className="row pt-3">
              <Title name="your" title="cart" />
              <CartColumns />
              {value.cart.map((item) => {
                return (
                  <div className="row mt-4">
                    <div className="col">
                      <Link
                        to="/detail"
                        onClick={() => {
                          value.handleDetail(item.id);
                        }}
                      >
                        <img src={item.img} alt="product img"></img>
                      </Link>
                    </div>
                    <div className="col">{item.title}</div>
                    <div className="col">{item.price}</div>
                    <div className="col">
                      <button
                        onClick={() => {
                          value.removeItem(item.id);
                        }}
                      >
                        -
                      </button>
                      <button>{item.count}</button>
                      <button
                        onClick={() => {
                          value.addItem(item.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="col">
                      <div
                        className="cart-icon"
                        onClick={() => value.removeProduct(item.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </div>
                    </div>
                    <div className="col">
                      Item Total : ${item.count * item.total}
                    </div>
                  </div>
                );
              })}

              <div className="row  align-end">
                <div className="col align-end">
                  <button
                    className=""
                    onClick={() => {
                      value.clearCart();
                    }}
                  >
                    Clear Cart
                  </button>
                  <h5>SUBTOTAL : $ {value.cartSubTotal} </h5>
                  <h5>TAX : ${value.cartTax} </h5>
                  <h5>TOTAL : ${value.cartTotal} </h5>
                  <PayPalButton
                    total={cartTotal}
                    clearCart={clearCart}
                    history={history}
                  ></PayPalButton>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <React.Fragment>
              <Title name="your" title="cart" />
              <CartEmpty />
            </React.Fragment>
          );
        }
      }}
    </ProductConsumer>
  );
}
