import * as request from "../utils/request";

export const SignUpApi = async (data) => {
  try {
    const response = await request.post("auth/register/", data);
    return response;
  } catch (error) {
    return error?.response;
  }
};
