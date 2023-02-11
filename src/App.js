import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
////154
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCurrentUser,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from "./store/user/user.action";

const App = () => {
  ////154. React-Redux: Creating User Reducer: move below from user.context.jsx
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubsrcibe = onAuthStateChangedListener((user) => {
  //     //console.log(user);
  //     if (user) {
  //       createUserDocumentFromAuth(user); //create use data in firebase store
  //     }
  //     dispatch(setCurrentUser(user)); //createAction first in user.action.js, and then use dispatch
  //   });
  //   return unsubsrcibe;
  // }, []);

  ////176. Redux-Saga: Convert onAuthStateChanges Listner to Promise
  useEffect(() => {
    //getCurrentUser().then((user) => console.log(user));
    ////178.user saga
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
