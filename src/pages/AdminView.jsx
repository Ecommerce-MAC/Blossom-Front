import React, { Fragment } from "react";
import Login from "../components/Login"
import Registration from "../components/Registration"
import { useState } from "react";

function Admin() {
 const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
        <div>
        
           <button className= "text-green bg-blue-700 hover:bg-pink" onClick={() => setShowModal(true)}>
            Boton login
           </button>
               
            
           
        </div>
        <Login isVisible={showModal} onClose={() => setShowModal(false)}> 
          <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Esto es el login</h3>
          </div>
          <Registration/>
        </Login>
        </Fragment>
    );
                
}


export default Admin;
