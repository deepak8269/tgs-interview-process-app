const getRequest = async (url, headers) => {
  let response;
  try {
    response = await fetch(url, headers).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`failed due to status ${res.status}`);
    });
  } catch (err) {
    response = {
      error: err.message
    };
  }
  return response;
};

const postRequest = async (method, url, payload, headers) => {
  const options = {
    method,
    headers,
    body: JSON.stringify(payload)
  };
  let response;
  try {
    response = await fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`failed due to status ${res.status}`);
    });
  } catch (err) {
    response = {
      error: err.message
    };
  }
  return response;
};

export const commonFetch = (method, url, payload, headers) => {
  switch (method) {
    case "GET":
      return getRequest(url, headers);
    case "PUT":
    case "POST":
    case "PATCH":
    case "DELETE":
      return postRequest(method, url, payload, headers);
    default:
      return getRequest(url, headers);
  }
};
