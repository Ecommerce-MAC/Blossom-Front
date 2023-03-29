import React, {useEffect, useState} from "react";
import Slide from "../components/Slide"
import "../pages/Home.css" 
import { allProducts } from "../Functions/ProductServices";



function Home() {

    const [products, allProducts] =useState(null)

    useEffect(() =>{allProducts(allProducts) }, [])

    return (
        <div>
           <Slide/>
           <div className="contenedor" > 

           <h1></h1> 

            

           </div> 
        </div>
    );
}

export default Home;
