/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ data }) {
  const { id } = useParams();

  //   const currentProduct = data.find((product) => {
  //     return product.id === id;
  //   });

  const currentProduct = data.find((product) => {
    return product.id === id;
  });

  return (
    <div className="screen-wrapper">
      <div className="image-container">
        <div className="screen-header">
          <h4 className="page-title">Product Details</h4>
          <button className="action-btn btn-bg-primary">Edit Product</button>
        </div>
        <div className="screen-body d-flex">
          <div className="image-section">
            <img
              src={require(`./products/${currentProduct.img_thumbNail}`)}
              alt="test"
              height={500}
            />
          </div>
          <div className="text-section">
            <h3 className="text-title">{currentProduct.productName}</h3>
            <p className="text-description">{currentProduct.product_detail}</p>
            <div>
              <label className="text-muted">Price : </label>
            </div>
            <h3>$ {currentProduct.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
