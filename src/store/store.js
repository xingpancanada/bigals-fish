import { compose, createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
////168.Redux-Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "../middleware/logger";
////170. Redux-thunk
//import thunk from "redux-thunk";
////173. Redux-Saga, replace Redux-thunk
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";

////160. create re-usable Middleware: get user before next, to avoid conflict --> 169. move to middleware/logger.js
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("current state:", store.getState());

//   next(action);
//   console.log("next state:", store.getState());
// };

////168. block user

const persistConfig = {
  key: "root",
  storage,
  //blacklist: ["user"],
  whitelist: ["cart"], //not whiteList!!!!!!
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

////173.redux-saga
const sagaMiddleware = createSagaMiddleware();

////153
//root-reducer
//const middleWares = [loggerMiddleware]; //160
////169.
// eslint-disable-next-line no-undef
const middleWares = [
  // eslint-disable-next-line no-undef
  process.env?.NODE_ENV === "development" && loggerMiddleware,
  //thunk, //170.
  sagaMiddleware, ////173.redux-saga
].filter(Boolean);
// eslint-disable-next-line no-undef
console.log("process.env:", process.env);

////169
const composeEnhancer =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//const composedEnhancers = compose(applyMiddleware(...middleWares));
////169.use redux-dev-tool
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
//export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(
  persistedReducer, ////168.
  undefined,
  composedEnhancers
);

////173.redux-saga
sagaMiddleware.run(rootSaga);

////168
export const persistor = persistStore(store);
