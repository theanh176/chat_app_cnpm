import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	isShowInfo: false,
	userInfor: {},
	isLoadingShow: false,
	isChangePass: false,
	isChangeProfile: false,
};

const showInfoSlice = createSlice({
	name: "isshowInfo",
	initialState,
	reducers: {
		toggleInfo: (state) => {
			state.isShowInfo = !state.isShowInfo;
		},
	},
});

const isLoadingShowSlice = createSlice({
	name: "isLoadingShow",
	initialState,
	reducers: {
		isLoadingShow: (state, action) => {
			state.isLoadingShow = action.payload;
		},
	},
});

const isChangePassSlice = createSlice({
	name: "isChangePass",
	initialState,
	reducers: {
		isChangePass: (state) => {
			state.isChangePass = !state.isChangePass;
		},
	},
});

const isChangeProfileSlice = createSlice({
	name: "isChangeProfile",
	initialState,
	reducers: {
		isChangeProfile: (state) => {
			state.isChangeProfile = !state.isChangeProfile;
		}
	},
})

const store = configureStore({
	reducer: {
		isShowInfo: showInfoSlice.reducer,
		isLoadingShow: isLoadingShowSlice.reducer,
		isChangePass: isChangePassSlice.reducer,
		isChangeProfile: isChangeProfileSlice.reducer,
	},
});

export const { toggleInfo } = showInfoSlice.actions;
export const { isLoadingShow } = isLoadingShowSlice.actions;
export const { isChangePass } = isChangePassSlice.actions;
export const { isChangeProfile } = isChangeProfileSlice.actions;

export default store;
