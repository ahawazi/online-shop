const Product = (props) => {
  const { id, ProductName, productImage, price } = props.data;
  return (
    <div className="col-3">
      <img alt="productImage" src={productImage} className="w-100" />
      <h5>{ProductName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm">-</button>
    </div>
  );
};
export default Product;
