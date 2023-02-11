import {
  Fragment,
  //useContext
} from "react";
import { Outlet } from "react-router-dom";
//import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import "./navigation.styles.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
//import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  LogoImg,
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  WelcomeSpan,
} from "./navigation.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setCurrentUser, signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  //console.log(currentUser);

  ////155. React-Redux: Selectors
  //const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = useSelector(selectCurrentUser);

  ////169
  //const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  //for user context
  //const { setCurrentUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    // await signOutUser();
    // //setCurrentUser(null);
    // dispatch(setCurrentUser(null));

    ////181. set null in user.reducer.js
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoImg src="/assets/images/BigAlsCanada.png" />
        </LogoContainer>
        <NavLinkContainer>
          <WelcomeSpan as="span">
            WELCOME {currentUser?.email?.toUpperCase()}
          </WelcomeSpan>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* render child router shop/* via Outlet */}
      <Outlet />
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <div className="navigation">
  //       <Link className="logo-container" to="/">
  //         <img className="logo" src="/assets/images/BigAlsCanada.png" />
  //       </Link>
  //       <div className="nav-links-container">
  //         <Link className="nav-link" to="/shop">
  //           SHOP
  //         </Link>
  //         {<h3>{currentUser?.email}</h3>}
  //         {currentUser ? (
  //           <span className="nav-link" onClick={signOutHandler}>
  //             SIGN OUT
  //           </span>
  //         ) : (
  //           <Link className="nav-link" to="/authentication">
  //             SIGN IN
  //           </Link>
  //         )}
  //         <CartIcon />
  //       </div>
  //       {isCartOpen && <CartDropdown />}
  //     </div>
  //     {/* render child router shop/* via Outlet */}
  //     <Outlet />
  //   </Fragment>
  // );
};

export default Navigation;
