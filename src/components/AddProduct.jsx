import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  // const dispatch = useDispatch();

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const productSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/saveProduct", product)
      .then((res) => {
        console.log("Success:", res.data);
        navigation("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Add Product</div>
            <div className="card-body">
              <form className="mb-3" onSubmit={productSubmit}>
                <div className="mb-3">
                  <label>Enter product name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary col-md-12">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
