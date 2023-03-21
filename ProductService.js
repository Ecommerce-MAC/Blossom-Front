import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7112',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export const ProductService = {
    async getProducts() {
      let response = await apiClient.get("/products/GetAll");
      let allProducts = response.data;
      return allProducts;
  
    },
  
    async submitProduct(newProduct) {
      console.log("new product de servicio", newProduct);
      await apiClient.post("/products", newProduct);
    },
  
    async getProduct(id) {
      let response = await apiClient.get("/products/" + id);
      let product = response.data;
      return product;
    },
  
    async deleteProduct(id) {
      await apiClient.delete("/products/" + id)
    },
    async updateProduct(id, updatedProduct) {
      await apiClient.patch("/products/" + id, updatedProduct)
    }
  }
  