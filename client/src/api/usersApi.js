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
        const response = await request.get(`user/get/${id}`, options);
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

export const GetMyFriends = async () => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`/user/getfiend`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}

export const GetInfoFriend = async (_id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`user/get/${_id}`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}

export const GetMySuggestions = async () => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`/user/suggestion?num=20`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}

export const GetNotFriend = async () => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`/user/not/friend`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}

// C???p nh???t th??ng tin ng?????i d??ng
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
        const response = await request.patch(`user/update`, data, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}

// T??m ki???m ng?????i d??ng
export const SearchUser = async (data) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get(`user/search?data=${data}`, options);
        return response;
    } catch (error) {
        return error?.response;
    }
}
