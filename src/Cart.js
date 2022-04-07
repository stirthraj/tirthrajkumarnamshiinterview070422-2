import ProductCard from "./CartProductQty";

export default function Cart({ cart }) {
  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart Item</h2>
        <h4>No Item in cart</h4>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Cart Item</h3>
        {cart.map((res) => (
          <ProductCard data={res} />
        ))}
      </div>
    );
  }
}
