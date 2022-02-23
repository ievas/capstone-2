import React, { useContext, useState, useEffect} from "react";

// cart from https://mdbootstrap.com/docs/standard/extended/shopping-carts/


function Cart({ items }) {
    return (
        <section class="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>

<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    </div>
                
                {/* //for item in items: */}
                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2019/03/31/15/42/easter-4093364_1280.jpg"
                        className="img-fluid rounded-3" alt="cookies"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      {/* <h6 className="textMuted">Cookies</h6> */}
                      <h6 className="text-black mb-0">Easter Sugar Cookies</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />

                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">$ 15.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>
{/* stop for loop */}
                  

                  <div className="pt-5">
                    <h6 className="mb-0"><a href="/" class="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                 

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items 1</h5>
                    <h5>$ 15.00</h5>
                    
                    
                </div>
                <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Tax</h5>
                        <h5>$ 0.50</h5>
                </div>
                    

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Standard-Delivery- $ 5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>


                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>$ 20.50</h5>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Proceed to checkout</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            
        </section>
    )

}

export default Cart;