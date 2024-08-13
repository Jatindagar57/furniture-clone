import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
function Cart() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{highlight:"cart"}}/>
      <Hero two={{title:"Cart"}}/>
      <h1>cart</h1>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Cart;