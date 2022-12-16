import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

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
  socket: {},
  toggleDialogChannel: {
    isShow: false,
    _id: "",
  },
  toggleDialogSuggestions: {
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
    },
  },
});

const toggleDialogListFriendSlice = createSlice({
  name: "toggleDialogListFriend",
  initialState,
  reducers: {
    toggleDialogListFriend: (state) => {
      state.toggleDialogListFriend.isShow =
        !state.toggleDialogListFriend.isShow;
    },
  },
});

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});
const toggleDialogChannelSlice = createSlice({
  name: "toggleDialogChannel",
  initialState,
  reducers: {
    toggleDialogChannel: (state, action) => {
      state.toggleDialogChannel.isShow = !state.toggleDialogChannel.isShow;
      state.toggleDialogChannel._id = action.payload.idChannel;
    },
  },
});

const toggleDialogSuggestionsSlice = createSlice({
  name: "toggleDialogSuggestions",
  initialState,
  reducers: {
    toggleDialogSuggestions: (state) => {
      state.toggleDialogSuggestions.isShow =
        !state.toggleDialogSuggestions.isShow;
    },
  },
});

const store = configureStore({
  middleware: getDefaultMiddleware({
  	serializableCheck: false,
    }),
  reducer: {
    isShowInfo: showInfoSlice.reducer,
    isChangePass: isChangePassSlice.reducer,
    toggleDialogInfo: toggleDialogInfoSlice.reducer,
    toggleDialogListFriend: toggleDialogListFriendSlice.reducer,
    socket: socketSlice.reducer,
    toggleDialogChannel: toggleDialogChannelSlice.reducer,
    toggleDialogSuggestions: toggleDialogSuggestionsSlice.reducer,
  },
});

export const { toggleInfo } = showInfoSlice.actions;
export const { isChangePass } = isChangePassSlice.actions;
export const { toggleDialogInfo } = toggleDialogInfoSlice.actions;
export const { toggleDialogListFriend } = toggleDialogListFriendSlice.actions;
export const { setSocket } = socketSlice.actions;
export const { toggleDialogChannel } = toggleDialogChannelSlice.actions;
export const { toggleDialogSuggestions } = toggleDialogSuggestionsSlice.actions;

export default store;
