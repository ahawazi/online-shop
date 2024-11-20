import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, ProductName, productImage, price } = props.data;

  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
  return (
    <div className="col-3">
      <img alt="productImage" src={productImage} className="w-100" />
      <h5>{ProductName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
      <span className="mx-1">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
      <button className="btn btn-info btn-sm" onClick={()=>removeFromCart(id)}>-</button>
    </div>
  );
};
export default Product;
