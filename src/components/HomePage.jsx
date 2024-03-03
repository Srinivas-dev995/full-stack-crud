import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  axios
    .get("http://localhost:8080/getProduct")
    .then((res) => {
      setProductList(res.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    const handleDelete = (id) => {
        axios
    .delete("http://localhost:8080/deleteProduct/" + id)
    .then((res) => {
      console.log("delted successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "30px" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Manuals</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((p) => (
            <tr>
              <th scope="row">{p.productId}</th>
              <td scope="row">{p.productName}</td>
              <td scope="row">{p.description}</td>
              <td scope="row">{p.price}</td>
              <td scope="row">{p.status}</td>

              <td>
                <Link
                  className="btn btn-warning"
                  style={{ marginRight: "5px" }}
                    to={'/editProduct/' + p.productId}
                >
                  Edit
                </Link>
                <button className="btn btn-danger"
                
                onClick={() => handleDelete(p.productId)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
