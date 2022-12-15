import * as request from "../utils/request";
import Cookies from "js-cookie";

export const SignInApi = async (data) => {
  try {
    const response = await request.post("auth/login/", data);
    response?.data && Cookies.set("access_token", response?.data?.access_token);
    // save response data to SessionStorage
    sessionStorage.setItem("user", JSON.stringify(response?.data));
    // save response data to localStorage
    localStorage.setItem("user", JSON.stringify(response?.data));
    
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

// Đổi mật khẩu
export const ChangePasswordApi = async (data) => {
  // get the access token from the cookie
  const access_token = Cookies.get("access_token");
  // set the authorization header
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    console.log(options,data);
    const response = await request.patch(`auth/changepass`, data, options);
    return response;
  } catch (error) {
    return error?.response;
  }
}
