import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    isShowInfo: false,
    userInfor: {},
    isLoadingShow: false,
}

const showInfoSlice = createSlice({
    name: 'isshowInfo',
    initialState,
    reducers: {
        toggleInfo: (state) => {
            state.isShowInfo = !state.isShowInfo
        }

    }
})

const isLoadingShowSlice = createSlice({
    name: 'isLoadingShow',
    initialState,
    reducers: {
        isLoadingShow: (state, action) => {
            state.isLoadingShow = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        isShowInfo: showInfoSlice.reducer,
        isLoadingShow: isLoadingShowSlice.reducer
    }
})

export const {toggleInfo} = showInfoSlice.actions
export const {isLoadingShow} = isLoadingShowSlice.actions

export default store;