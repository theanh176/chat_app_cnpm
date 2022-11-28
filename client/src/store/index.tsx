import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState = {
    isShowInfo: false,
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

const store = configureStore({
    reducer: showInfoSlice.reducer
})

export const {toggleInfo} = showInfoSlice.actions;

export default store;