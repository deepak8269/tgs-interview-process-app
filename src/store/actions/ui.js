import { SET_TOASTER } from "./actionTypes";
import { initialToasterState } from "../reducers/ui";

export const setToaster = (payload) => ({
  type: SET_TOASTER,
  payload
});

export const handleShowToaster = (toasterProps, dispatch) => {
  const payload = {
    ...toasterProps,
    show: true
  };
  dispatch(setToaster(payload));
};

export const handleHideToaster = (dispatch) => {
  dispatch(setToaster(initialToasterState));
};
