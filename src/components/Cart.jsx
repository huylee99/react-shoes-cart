import { useSelector } from "react-redux";
import CartItem from "./CartItem";
export default function Cart() {
  const carts = useSelector((state) => state.carts);

  const totalAmount =
    carts &&
    carts.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);

  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {carts && carts.length}</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${totalAmount || 0}</span>
      </div>

      <div className="cardBody">
        <CartItem />
      </div>
    </div>
  );
}
