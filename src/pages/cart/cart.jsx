import React from "react";
import PRODUCTS from "../../data/products";


const Cart = () => {
    
    return (
        <React.Fragment>
            <h1>Your Cart Items</h1>
            <div className="row">
                {PRODUCTS.map((p)=>{

                })}
            </div>
        </React.Fragment>
    )
}
export default Cart;
