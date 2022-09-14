function apiUrlFormatter(resourcePath) {
  /* eslint-disable prefer-destructuring */
  const REACT_APP_AWS_API_URL = process.env.REACT_APP_AWS_API_URL;
  const REACT_APP_AWS_API_STAGE = process.env.REACT_APP_AWS_API_STAGE;
  return `${REACT_APP_AWS_API_URL}${REACT_APP_AWS_API_STAGE}${resourcePath}`;
}

export const AWS_SKILL_API_URL = apiUrlFormatter("/skill");
export const AWS_PROFILE_API_URL = apiUrlFormatter("/profile");
export const AWS_PROJECT_API_URL = apiUrlFormatter("/project");
export const AWS_LINKEDIN_API_URL = apiUrlFormatter("/linkedin");
export const AWS_EDUCATION_API_URL = apiUrlFormatter("/education");
export const AWS_EXPERIENCE_API_URL = apiUrlFormatter("/experience");
export const AWS_CERTIFICATION_API_URL = apiUrlFormatter("/certification");
