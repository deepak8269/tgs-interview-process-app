import {
  SET_LINKED_PROFILE_DATA,
  RESET_LINKED_PROFILE_DATA,
  UPDATE_LINKED_PROFILE_DATA,
  UPDATE_EXPERIENCE_DATA,
  UPDATE_CERTIFICATIONS_DATA,
  UPDATE_PROJECTS_DATA,
  SET_SKILL_DATA,
  UPDATE_EDUCATION_DATA,
  UPDATE_USER_INFO,
  UPDATE_ROUTES
} from "./actionTypes";

export const setLinkedInProfileData = (email, profile) => ({
  type: SET_LINKED_PROFILE_DATA,
  userProfile: {
    email,
    ...profile
  }
});

export const resetLinkedInProfileData = () => ({
  type: RESET_LINKED_PROFILE_DATA,
  userProfile: {}
});

export const updateExperiencesData = (experiences) => ({
  type: UPDATE_EXPERIENCE_DATA,
  experiences
});

export const updateUserInfo = (userInfo) => ({
  type: UPDATE_USER_INFO,
  userInfo
});

export const updateCertificationsData = (certifications) => ({
  type: UPDATE_CERTIFICATIONS_DATA,
  certifications
});

export const updateProjectsData = (projects) => ({
  type: UPDATE_PROJECTS_DATA,
  projects
});

export const updateEducationData = (educations) => ({
  type: UPDATE_EDUCATION_DATA,
  educations
});

export const updateLinkedInProfileData = (data) => ({
  type: UPDATE_LINKED_PROFILE_DATA,
  userProfile: {
    ...data
  }
  // TODO: Have to work on data that are supposed to be passed
});

export const setSkillData = (skillData) => ({
  type: SET_SKILL_DATA,
  skillData
});

export const updateRoutes = (routes) => ({
  type: UPDATE_ROUTES,
  routes
});
