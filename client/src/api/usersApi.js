import * as request from "../utils/request";
import Cookies from "js-cookie";

export const GetInfo = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`/user/get/${id}`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const GetMyInfo = async() => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`/user/getinfo`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const UpdateInfo = async (data) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.patch(`/user/update`, data, options);
        return response;
    } catch (error) {
        return error?.response;
    }
};

