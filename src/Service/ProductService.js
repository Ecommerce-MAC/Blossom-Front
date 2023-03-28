import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7112/', 
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export const productService = {
    async getProducts() {
      let response = await apiClient.get("/Product/GetAll");
      let allProducts = response.data;
      return allProducts;
  
    },
    async getProductById(id) {
      let response = await apiClient.get("/Product/GetProductById=" + id);
      let product = response.data;
      return product;
  },
  
    async submitProduct(newProduct) {
      console.log("new product de servicio", newProduct);
      await apiClient.post("/Product/Post",newProduct);

    },
  
    async deleteProduct(id) {
      await apiClient.delete("/Product/Delete?id=" + id)
    },
   
  }
  