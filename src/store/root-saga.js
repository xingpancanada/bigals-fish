import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

////173. The function* declaration ( function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]); //178.user saga
}
