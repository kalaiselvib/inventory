/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
function Products({ data, getData }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    img_thumbNail: "",
    productName: "",
    price: "",
    product_detail: "",
    images_collection: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }

  function addProduct(event) {
    event.preventDefault();
    getData((prevData) => [...prevData, formData]);
    setFormData({
      id: "",
      img_thumbNail: "",
      productName: "",
      price: "",
      product_detail: "",
      images_collection: [],
    });
    handleClose();
  }

  //   useEffect(() => {
  //     localStorage.setItem("products", JSON.stringify(data));
  //   }, [data]);
  return (
    <>
      <div className="screen-wrapper">
        <div className="screen-header">
          <h4 className="page-title">Products List</h4>
          <button className="action-btn btn-bg-primary" onClick={handleShow}>
            Add Product
          </button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h5 className="modal-title">Add Product</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-wrapper addForm-wrapper">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-item mb-0">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value={formData.productName}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-item mb-0">
                  <label>Product Image</label>
                  <input
                    type="file"
                    name="img_thumbNail"
                    id="img_thumbNail"
                    value={formData.img_thumbNail}
                    className="form-control"
                  />
                </div>
                <div className="input-item mb-0">
                  <label>Description</label>
                  <textarea
                    name="product_detail"
                    id="body"
                    rows="8"
                    cols="5"
                    className="form-control"
                    placeholder="Write your dessription here ..!"
                    value={formData.product_detail}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="input-item mb-0">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    className="form-control w-25"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button className="action-btn btn-bg-white" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="action-btn btn-bg-primary"
                onClick={addProduct}
                type="submit"
              >
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="screen-body">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Description </th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr
                    key={index}
                    // to={"/product-detail/" + item.id}
                    className="link-item"
                    onClick={() => navigate("/product-detail/" + item.id)}
                  >
                    <td>{item.productName}</td>
                    <td>
                      <img
                        src={require(`./products/${item.img_thumbNail}`)}
                        width={50}
                        alt="text"
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <span className="text-overflow">
                        {item.product_detail}
                      </span>
                    </td>
                    <td className="text-right">
                      <AiOutlineEdit className="mr-2" />
                      <BsTrashFill className="ml-2" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
