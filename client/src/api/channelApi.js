import * as request from "../utils/request";
import Cookies from "js-cookie";

export const GetMyChannel = async () => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await request.get("channel/get/mylist", options);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const GetInfoChannel = async (id) => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await request.get(`channel/${id}`, options);
    return response;
  } catch (error) {
    return error?.response;
  }
};
