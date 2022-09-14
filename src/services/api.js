import { getToken } from "../utils/localStorageUtils";
import { fullProfile, emailResponse, liteProfile, nubelaProfileURL } from "../mocks/mockData";

const config = {
  clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
  redirectUrl: process.env.REACT_APP_REDIRECT_URL_LINKEDIN,
  clientSecret: process.env.REACT_APP_LINKEDIN_CLIENT_SECRET,
  oauthUrl: "https://www.linkedin.com/oauth/v2",
  scope: "r_liteprofile,r_emailaddress",
  state: "ANYTHING",
  proxyCurlUrl: "https://nubela.co/proxycurl/api",
  proxyCurlKey: "bfb133a2-1e6f-4dbc-84fb-feae98ff67b1"
};

export const authPopup = () => {
  const { clientId, redirectUrl, oauthUrl, scope, state } = config;

  const url = `${oauthUrl}/authorization?response_type=code&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`;
  const width = 450;
  const height = 730;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  window.open(
    url,
    "Linkedin",
    `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};

export const getAccessToken = async (code) => {
  let response;
  try {
    const { clientId, clientSecret, oauthUrl } = config;

    const url = `${oauthUrl}/accessToken?grant_type=authorization_code&client_id=${clientId}&code=${code}&client_secret=${clientSecret}`;

    response = await fetch(url, {
      method: "POST"
    }).then((res) => res.json());
  } catch (error) {
    console.error({ error });
  }

  return response;
};

export const getUserProfileFromLI = async () => {
  const token = getToken();
  let response;
  try {
    const { oauthUrl } = config;
    const url = `${oauthUrl}/me?projection=(id,profilePicture(displayImage~:playableStreams),localizedFirstName,localizedLastName,id)`;
    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json());
  } catch (error) {
    response = liteProfile;
    console.error({ error });
  }

  return response;
};

export const getUserProfileURL = async (email) => {
  try {
    const url = `${config.proxyCurlUrl}/linkedin/profile/resolve/email?email=${email}`;
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.proxyCurlKey}`
      }
    }).then((res) => res.json());

    return nubelaProfileURL.url; // response ? response.url : null
  } catch (error) {
    console.error({ error });
  }
  return null;
};

export const getUserProfileData = async (email) => {
  let response = {};
  try {
    const profileUrl = await getUserProfileURL(email);
    if (profileUrl) {
      const url = `${config.proxyCurlUrl}/v2/linkedin?url=${profileUrl}`;
      // eslint-disable-next-line no-unused-vars
      response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.proxyCurlKey}`
        }
      }).then((res) => res.json());
    }
  } catch (error) {
    console.error({ error });
  }
  return fullProfile;
};

export const getUserEmail = async () => {
  let response;
  try {
    const token = getToken();
    const { oauthUrl } = config;
    const url = `${oauthUrl}/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~,state))`;
    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json());
  } catch (error) {
    response = emailResponse;
    console.error({ error });
  }

  if (response && response.elements) {
    const { elements } = response || {};
    const elementsArray = (elements || []).filter((element) => element?.primary);
    if (elementsArray.length) {
      response = elementsArray[0]["handle~"].emailAddress;
    }
  }
  return response;
};
