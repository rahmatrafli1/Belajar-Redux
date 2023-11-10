import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelector,
  updateProducts,
} from "../features/ProductSlice";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelector.selectById(state, id));

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProducts({ title, price, id }));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  return (
    <div>
      <form onSubmit={handleUpdate} className="box mt-5">
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
          <button className="button is-success">Update</button>
          <Link to="/" className="button is-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
