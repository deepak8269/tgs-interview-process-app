import {
  SET_LINKED_PROFILE_DATA,
  RESET_LINKED_PROFILE_DATA,
  UPDATE_LINKED_PROFILE_DATA,
  UPDATE_EXPERIENCE_DATA,
  UPDATE_CERTIFICATIONS_DATA,
  UPDATE_PROJECTS_DATA,
  UPDATE_EDUCATION_DATA,
  UPDATE_USER_INFO
} from "../actions/actionTypes";

const initialState = {
  userProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LINKED_PROFILE_DATA:
      return {
        ...state,
        userProfile: action.userProfile
      };
    case RESET_LINKED_PROFILE_DATA:
      return {
        ...state,
        userProfile: action.userProfile
      };
    case UPDATE_LINKED_PROFILE_DATA:
      return {
        ...state,
        userProfile: {
          // ...state.userProfile,
          ...action.userProfile
        }
      };
    case UPDATE_EXPERIENCE_DATA:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          experiences: action.experiences
        }
      };
    case UPDATE_CERTIFICATIONS_DATA:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          certifications: action.certifications
        }
      };
    case UPDATE_PROJECTS_DATA:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          accomplishment_projects: action.projects
        }
      };
    case UPDATE_EDUCATION_DATA:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          education: action.educations
        }
      };
    case UPDATE_USER_INFO:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.userInfo
        }
      };
    default:
      return state;
  }
};
