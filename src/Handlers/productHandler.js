import { productService } from "../Service/productService";

export const productHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }
        let newProductStructure = {

            "name": newProduct.name,
            "brand": newProduct.brand,
            "typeProduct": newProduct.typeProduct,
            "description": newProduct.description,
            "cost": newProduct.cost,
            "price": newProduct.price,
            "stock": newProduct.stock,        
            
        }
        return productService.submitProduct(newProductStructure);
    },
    
    deleteProduct(id){
        return productService.deleteProduct(id);
    },
    
    updateProduct(id, updatedProduct){
        if(!updatedProduct){
            return;
        }
        let updatedProductStructure = {
            "id": "",
            "name": updateProduct.name,
            "brand": updateProduct.brand,
            "typeProduct": updateProduct.typeProduct,
            "description": updateProduct.description,
            "price": updateProduct.price,
            "cost": updateProduct.cost,
            "stock": updateProduct.stock,        

        }
        return productService.updateProduct(id, updatedProductStructure);
    }
}