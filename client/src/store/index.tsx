import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	isShowInfo: false,
	userInfor: {},
	isChangePass: false,
	toggleDialogInfo: { 
		isShow: false,
		_id: "",
	},
	toggleDialogListFriend: {
		isShow: false,
	},
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

const isChangePassSlice = createSlice({
	name: "isChangePass",
	initialState,
	reducers: {
		isChangePass: (state) => {
			state.isChangePass = !state.isChangePass;
		},
	},
});

const toggleDialogInfoSlice = createSlice({
	name: "toggleDialogInfo",
	initialState,
	reducers: {
		toggleDialogInfo: (state, action) => {
			state.toggleDialogInfo.isShow = !state.toggleDialogInfo.isShow;
			state.toggleDialogInfo._id = action.payload.idFriend;
		}
	},
});

const toggleDialogListFriendSlice = createSlice({
	name: "toggleDialogListFriend",
	initialState,
	reducers: {
		toggleDialogListFriend: (state) => {
			state.toggleDialogListFriend.isShow = !state.toggleDialogListFriend.isShow;
		}
	},
});

const store = configureStore({
	reducer: {
		isShowInfo: showInfoSlice.reducer,
		isChangePass: isChangePassSlice.reducer,
		toggleDialogInfo: toggleDialogInfoSlice.reducer,
		toggleDialogListFriend: toggleDialogListFriendSlice.reducer,
	},
});

export const { toggleInfo } = showInfoSlice.actions;
export const { isChangePass } = isChangePassSlice.actions;
export const { toggleDialogInfo } = toggleDialogInfoSlice.actions;
export const { toggleDialogListFriend } = toggleDialogListFriendSlice.actions;

export default store;
