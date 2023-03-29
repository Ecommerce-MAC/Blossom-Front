import React, {useEffect, useState} from "react";
 import Slide from "../components/Slide"
import Carrousel from "../components/Carrousel";


function Home() {

    const [products, allProducts] =useState(null)

    useEffect(() =>{allProducts(allProducts) }, [])

    return (
        <div>
            <Carrousel/>
           <Slide/>
           <div className="contenedor" > 

           <h1></h1> 

            

           </div> 
        </div>
    );
}

export default Home;
