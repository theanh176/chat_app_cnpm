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
