import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./button";

export default class Detaile extends Component {  
  render() {
  
    return (
      <ProductConsumer>
        {(value) => {
          const { id,title,img, price, company,  info,  inCart,count,total } =
            value.detailProduct;console.log();
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product"></img>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong className="">
                      price:{price}
                      <span>$</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold  mt-3 mb-0 ">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <Link className=" btn btn-primary" to="/">
                    <ButtonContainer>back to product</ButtonContainer>
                  </Link>
                  <button onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                  }  
                    } disabled={inCart? true:false} className="btn btn-primary float-end">
                    <ButtonContainer >add to cart</ButtonContainer>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
