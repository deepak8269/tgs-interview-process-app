// // internal imports
// import routes from "../router/Urls";
// import { commonFetch } from "./api";
// import { setLinkedInProfileData, setSkillData, updateUserInfo } from "../store/actions/login";
// import { AUTH_TOKEN, TOKEN_VALUE } from "../utils/constants";
// import { AWS_PROFILE_API_URL } from "../utils/apiConstants";

// // mock data
// import { fullProfile } from "../mocks/mockData";
// import SkillsArray from "../mocks/mockAutoCompleteOptions";

// export const fallbackExecution = (dispatch, setLoader, navigate, navigateTo = null) => {
//   localStorage.setItem(AUTH_TOKEN, TOKEN_VALUE);
//   const { email: mockEmail, ...rest } = fullProfile;
//   dispatch(setLinkedInProfileData(mockEmail, rest));
//   setLoader(false);
//   navigate(navigateTo || routes.WELCOME.path);
// };

// export const fetchUserProfileData = (
//   dispatch,
//   setLoader,
//   navigate,
//   payload,
//   profile,
//   navigateTo = null
// ) => {
//   const method = "POST";
//   const url = AWS_PROFILE_API_URL;
//   const headers = {
//     "Content-Type": "application/json"
//   };

//   setLoader(true);
//   commonFetch(method, url, payload, headers)
//     .then((res) => {
//       if (res?.error) {
//         console.error(res.error);
//         fallbackExecution(dispatch, setLoader, navigate, navigateTo);
//       } else {
//         const { user_id: id = "", ...userProfile } = res?.profile || {};
//         const skillData = userProfile?.skillData || [];
//         dispatch(updateUserInfo({ id, ...profile, ...userProfile }));

//         // skill data massaging
//         const currentSkillData = skillData.map((item) => {
//           const currentItem = { ...item };
//           const selectedSkill = SkillsArray.find((i) => item?.name === i?.label);
//           if (selectedSkill) currentItem.name = selectedSkill;
//           return currentItem;
//         });
//         dispatch(setSkillData(currentSkillData));

//         navigate(navigateTo || routes.USER.PROFILE.path);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       fallbackExecution(dispatch, setLoader, navigate, navigateTo);
//     })
//     .finally(() => setLoader(false));
// };
