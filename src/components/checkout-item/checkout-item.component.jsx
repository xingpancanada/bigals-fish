import "./checkout-item.styles.scss";
//import { useContext } from "react";
//import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  addItemToCart,
  deductItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  ////167
  // const { addItemToCart, deductItemFromCart, removeItemFromCart } =
  //   useContext(CartContext);
  // const removeItemHandler = () => removeItemFromCart(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem);
  // const deductItemHandler = () => deductItemFromCart(cartItem);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const deductItemHandler = () =>
    dispatch(deductItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <button className="arrow" onClick={deductItemHandler}>
          -
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={addItemHandler}>
          +
        </button>
      </span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
