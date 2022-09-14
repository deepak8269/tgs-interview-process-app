import { UPDATE_ROUTES } from "../actions/actionTypes";

const initialState = { prev: "", current: { ...window.location } };

const route = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTES:
      return {
        ...state,
        prev: state.current,
        current: action.routes
      };
    default:
      return state;
  }
};

export default route;
