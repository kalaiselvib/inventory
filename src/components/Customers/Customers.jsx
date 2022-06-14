/** @format */

import React, { useState, useEffect } from "react";
import { customerData } from "./CustomerData";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Modal } from "react-bootstrap";

function Customers() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    total_orders: "",
  });
  const [data, getData] = useState(
    JSON.parse(localStorage.getItem("customers")) || customerData
  );
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

  function addCustomer(event) {
    event.preventDefault();
    getData((prevData) => [...prevData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      total_orders: "",
    });
    handleClose();
  }

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <div className="screen-wrapper">
        <div className="screen-header">
          <h4 className="page-title">Customers List</h4>
          <button className="action-btn btn-bg-primary" onClick={handleShow}>
            Add Customer
          </button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h5 className="modal-title">Add Customer</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-wrapper addForm-wrapper">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="input-item mb-0">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-item mb-0">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-item">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-item">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-item">
                  <label>Total Orders</label>
                  <input
                    type="text"
                    name="total_orders"
                    id="total_orders"
                    value={formData.total_orders}
                    className="form-control"
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
                onClick={addCustomer}
                type="submit"
              >
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="screen-body">
          <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Full Name</th>
                <th width="20%">Email</th>
                <th>Phone</th>
                <th>Total Orders</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {item.firstName} {item.lastName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.total_orders}</td>
                    <td>
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
      </div>
    </>
  );
}

export default Customers;
