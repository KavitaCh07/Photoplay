import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    photo: string;
    favourites: any;
}

const initialState = {
    photo: [],
    // favourites: JSON.parse(localStorage.getItem("fav") || "[]"),
}

const PhotoSlice = createSlice({
    name: 'photoVideos',
    initialState,
    reducers: {
        AddPhoto: (state: any, action: any) => {
            state.photo = action.payload;
            console.log("2", state.photo)
        },
    },
    // extraReducers: {
    //     [getWeatherData.fulfilled]: (state : any, action: any) =>{
    //         return action.payload.weather;
    //     }
    // }
});

export const { AddPhoto } = PhotoSlice.actions;
export default PhotoSlice.reducer;