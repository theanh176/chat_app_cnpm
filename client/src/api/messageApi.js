import * as request from "../utils/request";
import Cookies from "js-cookie";

export const GetMessageOnChannel = async (idChannel) => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await request.get(`message/channel/${idChannel}`, options);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const SendMessage = async (data) => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const id = data.id;
  delete data.id;
  try {
    const response = await request.post(`message/send/${id}`, data, options);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const RemoveMessage = async (id) => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await request.patch(`message/remove/${id}`, options);
    return response;
  } catch (error) {
    return error?.response;
  }
}
