import * as request from "../utils/request";
import Cookies from "js-cookie";

export const SignInApi = async (data) => {
  try {
    const response = await request.post("auth/login/", data);
    response?.data && Cookies.set("access_token", response?.data?.access_token);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const SignUpApi = async (data) => {
  try {
    const response = await request.post("auth/register/", data);
    response?.data && Cookies.set("access_token", response?.data?.access_token);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const isSignIn = () => {
  const access_token = Cookies.get("access_token");
  if (access_token) {
    return true;
  }
  return false;
};

export const SignOutApi = () => {
  Cookies.remove("access_token");
};
