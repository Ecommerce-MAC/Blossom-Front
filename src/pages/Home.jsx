import React, { useEffect, useState } from "react";
import Slide from "../components/Slide"
import { allProducts } from "../Functions/ProductServices";
import { Baner } from "../components/Baner";
import { Content } from "../components/Content";



function Home() {

    const [products, allProducts] = useState(null)

    useEffect(() => { allProducts(allProducts) }, [])

    return (
        <div>

            <div className="contenedor mx-0 " >
                <Slide />
                <Baner />
               <Content/>
                </div>
          

        </div>


    );
}

export default Home;
/* section className="flex justify-center">
                    <div className="pt-2 flex flex-wrap w-1/2">
                    <div className="bg-red bg-cover bg-no-repeat just" style={{ backgroundImage: `url('https://img.freepik.com/free-psd/beauty-product-mockup-pastel-set_53876-98720.jpg?w=1060&t=st=1680180160~exp=1680180760~hmac=2e0ffbf85b05876a452d0d0136268c3c43c054c959ecf56195ac658fe2175b0d)`, }}>
                        <h1 className=" text-lg text-white p-8 m-8">At Blossom, we take pride in being a company committed to skin and environmental care. Our goal is to offer high-quality products that meet all your personal care needs while respecting and preserving the planet. <br /> <br />
                            Our signature identity is the Sakura flower, a beautiful and delicate flower that represents beauty and renewal. This flower is the inspiration behind each of our products, which are designed to help you achieve radiant and healthy skin.</h1>
                <div className="">
                    <div className="bg-red bg-cover bg-no-repeat"
                     style={{ backgroundImage: `url('https://img.freepik.com/free-psd/beauty-product-mockup-pastel-set_53876-98720.jpg?w=1060&t=st=1680180160~exp=1680180760~hmac=2e0ffbf85b05876a452d0d0136268c3c43c054c959ecf56195ac658fe2175b0d)`, }}>
                        <h1 className=" text-lg text-white p-8 m-8">At Blossom, we take pride in being a company committed to skin and environmental care. Our goal is to offer high-quality products that meet all your personal care needs while respecting and preserving the planet. <br /> <br />
                            Our signature identity is the Sakura flower, a beautiful and delicate flower that represents beauty and renewal. This flower is the inspiration behind each of our products, which are designed to help you achieve radiant and healthy skin.</h1>
                    </div>
                    </div></div>
               
                </div>   
                </section> */