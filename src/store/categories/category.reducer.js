import { CATEGORIES_ACTION_TYPES } from "./category.types";

////156. Catgories Reducer
export const CATEGORIES_INITIAL_STATE = {
  //categoriesMap: {},
  categories: [], //158 Array[] here!!! not object{}
  isLoading: false, ////170. Redux-Thunk for async redux
  error: null, //170
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    // case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
    //   return { ...state, categoriesMap: payload };
    // case CATEGORIES_ACTION_TYPES.SET_CATEGORIES: //158
    //   return { ...state, categories: payload };

    ////170. Redux-Thunk for async redux
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
