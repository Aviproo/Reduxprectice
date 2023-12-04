import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../../store/CartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(cartAction.showCart());
  };
  return (
    <button className={classes.button} onClick={showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
