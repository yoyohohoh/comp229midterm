import React, { useState } from "react";
import "./addproduct.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="description">
        Description:
      </label>
      <input
        type="text"
        id="description"
        className="multiple__input"
        name="description"
        value={formData.desscription}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="category">
        Category:
      </label>
      <input
        type="text"
        id="category"
        className="multiple__input"
        name="category"
        value={formData.desscription}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="number"
        id="quantity"
        className="multiple__input"
        name="quantity"
        value={formData.desscription}
        onChange={handleChange}
      />


      <label className="multiple__text" htmlFor="price">
        Price:
      </label>
      <input
        type="number"
        id="price"
        className="multiple__input"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button className="submit__button" type="submit">
        SUBMIT
      </button>

      <button className="cancel__button" type="cancel">
        CANCEL
      </button>
    </form>
  );
}
