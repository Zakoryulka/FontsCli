import { createSlice } from "@reduxjs/toolkit";

const alertSettingsSlice = createSlice({
  name: 'alertSettings',
  initialState: {
    x: null,
    y: null,
    itemFontHeight: null,
    alertHeight: null
  },
  reducers: {
    // setX: (state, action) => {
    //   state.x = action.payload.x;
    //   // console.log(state.x);
    // },
    setY: (state, action) => {
      state.y = action.payload.y;
    }
  }
});

export const {
  setY
} = alertSettingsSlice.actions;
export default alertSettingsSlice.reducer;
