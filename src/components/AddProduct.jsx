import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/ProductSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const updateProduct = (e) => {
    e.preventDefault();
    dispatch(update({ title, price }));
  };

  return (
    <div>
      <form onSubmit={updateProduct} className="box mt-5">
        <div className="field">
          <label htmlFor="title" className="label">
            Title
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="price" className="label">
            Price
          </label>
          <div className="control">
            <input
              type="number"
              className="input"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
