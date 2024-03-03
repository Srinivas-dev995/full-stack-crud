import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  // const dispatch = useDispatch();
  const [message, setMessage] = useState(false);

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/getProduct/" + id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const productUpdate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/saveProduct", product)
      .then((res) => {
        // console.log("Success:", res.data);
        setProduct(res.data);
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
            <div className="card-header fs-3 text-center">Edit Product</div>

            <div className="card-body">
              <form className="mb-3" onSubmit={productUpdate}>
                <div className="mb-3">
                  <label>Enter product name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    value={product.productName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={product.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    value={product.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter product status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    value={product.status}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary col-md-12">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
