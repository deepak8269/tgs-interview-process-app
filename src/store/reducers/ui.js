import { SET_TOASTER } from "../actions/actionTypes";

export const initialToasterState = {
  message: "",
  show: false,
  severity: "",
  vertical: "top",
  horizontal: "center"
};

const initialState = {
  toaster: initialToasterState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOASTER:
      return {
        ...state,
        toaster: action.payload
      };
    default:
      return state;
  }
};
