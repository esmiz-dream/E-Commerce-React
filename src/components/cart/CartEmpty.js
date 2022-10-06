import React from "react";
import Title from "../Title";

export default function CartEmpty() {
  return (
    <div className="container mt-5">
     <div className="row">
      <div className="col-10 mx-auto text-center text-title text-capitalize">
        <h1 > your cart is currenty empty </h1>
      </div>
     </div>
    </div>
  );
}
