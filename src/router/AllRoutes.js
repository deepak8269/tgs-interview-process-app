// external imports
import React from "react";
import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// internal imports
import routes from "./Urls";
// import Loader from "../components/Loader";
// import PrivateRoutes from "./PrivateRoutes";
// import { fetchUserProfileData } from "../apis/loginAPI";
// import { getItemFromLocalStorage } from "../utils/localStorageUtils";
// import { USER_BASIC_PROFILE } from "../utils/constants";

const AllRoutes = () => {
  // const [loader, setLoader] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { FEEDBACK, REPORTS, HOME } = routes;
  // const { first_name: firstName } = useSelector(({ login }) => login.userProfile);

  // useEffect(() => {
  //   const userBasicProfile = JSON.parse(getItemFromLocalStorage(USER_BASIC_PROFILE));
  //   const userId = userBasicProfile?.id || "";
  //   if (!firstName && userId) {
  //     setLoader(true);

  //     const payload = {
  //       user_id: userId
  //     };
  //     const navigateTo = `${window.location.pathname}${window.location.search}`;
  //     fetchUserProfileData(dispatch, setLoader, navigate, payload, userBasicProfile, navigateTo);
  //   }
  // }, []);

  // useEffect(() => {
  //   setIsAuthenticated(!!firstName);
  // }, [firstName]);

  // if (loader) return <Loader />;

  return (
    <Routes>
      <Route index element={<HOME.Component />} />
      <Route exact path={REPORTS.path} element={<REPORTS.Component />} />
      <Route exact path={FEEDBACK.path} element={<FEEDBACK.Component />} />
      {/* <Route path="*" element={isAuthenticated ? <PrivateRoutes /> : <LOGIN.Component />} /> */}
    </Routes>
  );
};

export default AllRoutes;
