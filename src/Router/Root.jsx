import { Footer } from '../components/Footer'
import { Navbar } from "../components/Navbar"
import Nav from "../components/Nav"
import Slide from "../components/Slide"
import BrandList from "../components/BrandList"
import { Outlet, useNavigation } from "react-router-dom";

function Root() {
    const navigation = useNavigation()
  return (
    <>
     <Navbar/>
      <Nav/>
      <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-S">Loading...</div>
                )}
        <Outlet/>
        </main>
      <Slide />
      <BrandList/>
      
     <Footer/>
    </>
  )
}

export default Root
