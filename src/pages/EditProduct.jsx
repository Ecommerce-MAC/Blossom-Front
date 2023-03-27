import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";

function EditProduct() {
    const { product } = useLoaderData();
    const id = product.id;
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedProduct = {title, description, price, image};
        productHandler.updateProduct(id, updatedProduct);
    };

    return (
        <>
          <form className="StyleForm mt-9 p-5" onSubmit={handleSubmit}>

<h1 className=" mb-4 text-3xl"> UPLOAD PRODUCT</h1>

<div className="mb-6">
  <label htmlFor="ProductName" className="block mb-2 text-sm font-medium dark:text-black">Product Name</label>
  <input type="text" id="ProductName" onChange={handleNameChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
</div>

<div className="mb-6">
  <label htmlFor="Brand" className="block mb-2 text-sm font-medium dark:text-black">Brand</label>
  <input type="text" id="Brand" onChange={handleBrandChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="KiKo" required />
</div>

<div className="mb-6">
  <label htmlFor="TypeProduct" className="block mb-2 text-sm font-medium dark:text-black">Type Product</label>
  <input type="text" id="TypeProduct" onChange={handlTypeProductChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Cream " required />
</div>

<div className="mb-6">
  <label htmlFor="Description" className="block mb-2 text-sm font-medium dark:text-black">Description</label>
  <input type="text" id="Description" onChange={handleDescriptionChange} className="shadow-sm bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
</div>

{/* <div className="mb-6">
    <label htmlFor="Image" className="block mb-2 text-sm font-medium dark:text-black">Image</label>
    <input type="file" id="Image" onChange={handleNameChange} accept="image/*" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
  </div>  */}


<div className="mb-6">
  <label htmlFor="Price" className="block mb-2 text-sm font-medium dark:text-black">Price</label>
  <input type="number" step="any"  id="Price" onChange={handlePriceChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$" />
</div>
<div className="mb-6">
  <label htmlFor="Cost" className="block mb-2 text-sm font-medium dark:text-black">Cost</label>
  <input type="number" step="any"  id="Price" onChange={handleCostChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$" />
</div>

<div className="mb-6">
  <label htmlFor="Stock" className="block mb-2 text-sm font-medium dark:text-black">Stock</label>
  <input type="number" id="Stock" onChange={handleStockChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="1" />
</div>


<button type="submit" className="text-dark  border  bg-orange border-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>

</form>  
        </>
    )
}

export default EditProduct;