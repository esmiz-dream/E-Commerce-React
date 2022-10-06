import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Detaile from "./Detaile";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

export default function Product({ product, key }) {
  const { id, title, img, price, inCart } = product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
      <div className="card ms-4 my-2" style={{ width: "18rem" }}>
        <ProductConsumer>
          {(value) => {
            return (
              <div className="card-body">
                <div className="row">
                  <Link
                    to="/detail"
                    onClick={() => {
                      value.handleDetail(id);
                    }}
                  >
                    <img
                      src={img}
                      className="card-img-top"
                      alt="product image"
                    ></img>
                  </Link>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  <h5 className="text-blue font-italic mb-0">{price}$</h5>
                </div>
                <button
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  className="btn btn-info float-end"
                >
                  {inCart ? (
                    "In Cart"
                  ) : (
                    <i className="fas fa-shopping-cart"></i>
                  )}
                </button>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const img = styled.div`
  background-color: green;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
const ProductWrapper = styled.div`
.card{
   background:transparent;
   transition : all is linear;
}
.card-footer{
  background: transparent
  border-top: transparent;
  transition: all is linear;
}
&.hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
}
`;
