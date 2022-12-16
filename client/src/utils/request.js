import axios from "axios";

const request = axios.create({
	baseURL: "https://backendchatapp-production.up.railway.app",
});

export const get = async (path, options = {}) => {
	const response = await request.get(path, options);
	return response.data;
};

export const post = async (path, data, options = {}) => {
	const response = await request.post(path, data, options);
	return response;
};

// delete
export const del = async (path, options = {}) => {
	const response = await request.delete(path, options);
	return response;
};

// patch
export const patch = async (path, data, options = {}) => {
	const response = await request.patch(path, data, options);
	return response;
};

export default request;
