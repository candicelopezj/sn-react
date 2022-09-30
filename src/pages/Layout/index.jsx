import React from "react";
// import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Hero from "../../components/Hero";
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Outlet /> */}
     <div>
       {children}
      </div> 
      <Footer />
    </>
  );
};

export default Layout;