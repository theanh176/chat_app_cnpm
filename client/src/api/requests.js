import * as request from "../utils/request";
import Cookies from "js-cookie";

export const GetListRequest = async () => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await request.get('request/list', options);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const AcceptRequest = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    // patch the request
    try {
        const response = await request.patch(`request/accept/${id}`, {}, options);
        return response;
    }
    catch (error) {
        return error?.response;
    }
};

export const RejectRequest = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    // patch the request
    try {
        const response = await request.patch(`request/reject/${id}`, {}, options);
        return response;
    }
    catch (error) {
        return error?.response;
    }
}

export const CancelRequest = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    // delete the request
    try {
        const response = await request.del(`request/cancel/${id}`, options);
        return response;
    }
    catch (error) {
        return error?.response;
    }
}

// Gửi yêu cầu kết bạn
export const SendRequest = async (data) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    // post the request
    try {
        const response = await request.post('request/send', data, options);
        return response;
    }
    catch (error) {
        return error?.response;
    }
}

// Xoá bạn bè
export const DeleteFriend = async (id) => {
    // get the access token from the cookie
    const access_token = Cookies.get("access_token");
    // set the authorization header
    const options = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    // delete the friend
    try {
        const response = await request.del(`request/delete/${id}`, options);
        return response;
    }
    catch (error) {
        return error?.response;
    }
}