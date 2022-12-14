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

// Tạo channel
export const CreateChannel = async (data) => {
	// get the access token from the cookie
	const access_token = Cookies.get("access_token");
	// set the authorization header
	const options = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	};
	try {
		const response = await request.post("channel/create", data, options);
		return response;
	} catch (error) {
		return error?.response;
	}
};

// Thêm thành viên vào channel
export const AddMemberToChannel = async (dataAdd) => {
	const id = dataAdd._id;
	const data = dataAdd.listId;
	// get the access token from the cookie
	const access_token = Cookies.get("access_token");
	// set the authorization header
	const options = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	};
	try {
		const response = await request.patch(
			`channel/add/${id}`,
			data,
			options
		);
		return response;
	} catch (error) {
		return error?.response;
	}
};

// Rời khỏi channel
export const LeaveChannel = async (id) => {
	// get the access token from the cookie
	const access_token = Cookies.get("access_token");
	// set the authorization header
	const options = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	};
	try {
		const response = await request.patch(
			`channel/leave/${id}`,
			{},
			options
		);
		return response;
	} catch (error) {
		return error?.response;
	}
};
