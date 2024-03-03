import axios from "axios";

const API_URL = "http://localhost:8080";

class productService {
  saveProduct(product) {
    axios.post(API_URL + "/saveProduct", product);
  }

  getAllProduct() {
    return axios.get(API_URL + "/getProduct");
  }

  getProductById(id) {
    return axios.get(API_URL + "/getProduct/" + id);
  }
  deleteProduct(id) {
    return axios.delete(API_URL + "/deleteProduct/" + id);
  }
  editProduct(product) {
    return axios.post(API_URL + "/editProduct/" + product.id, product);
  }
}

export default new productService;