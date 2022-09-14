import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateRoutes } from "../store/actions/login";

export const useNavigateUtil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (endpoint) => {
    navigate(endpoint);
    dispatch(updateRoutes({ ...window.location }));
  };
};
