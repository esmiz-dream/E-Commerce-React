import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    return (
      <div className="row mx-auto text-center py-5" style={{ width: "80rem" }}>
        <Title name="our" title="products" />
        <hr />
        <ProductConsumer>
         {value=>{
          return value.products.map(item=>{
            return <Product product={item} key={item.id}/>
          })
         }}
        </ProductConsumer>
      </div>
    )
      }
  }
