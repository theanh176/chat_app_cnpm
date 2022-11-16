import * as request from "../utils/request";
import Cookies from "js-cookie";

export const CreatePostApi = async (data) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.post("post/", data, options);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const ListPostApi = async (page, limit) => {
    try {
        const response = await request.get(`post/?page=${page}&limit=${limit}`);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const ListClassApi = async () => {
    try {
        const response = await request.get('iclass');
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const ListSubjectApi = async () => {
    try {
        const response = await request.get('subject');
        return response;
    } catch (error) {
        return error?.response;
    }
};

//delete post
export const DeletePostApi = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.del(`post/delete/${id}`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
};


