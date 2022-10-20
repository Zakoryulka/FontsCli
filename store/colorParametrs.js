import { createSlice } from "@reduxjs/toolkit";

const bgDefault = '#940081';
const fontColorDefault = '#ffffff';
const opacityDefault = 1;

const colorParametrsSlice = createSlice({
  name: 'colorParametrs',
  initialState: {
    currentBg: bgDefault,
    currentFontColor: fontColorDefault,
    currentOpacity: opacityDefault
  },
  reducers: {
    changeBg: (state, action) => {
      state.currentBg = action.payload.newColor;
    },
    changeFontColor: (state, action) => {
      state.currentFontColor = action.payload.newColor;
    },
    changeOpacity: (state, action) => {
      state.currentOpacity = action.payload.opacity;
    },
    resetColors: (state) => {
      state.currentBg = bgDefault;
      state.currentFontColor = fontColorDefault;
      state.currentOpacity = opacityDefault;
    }
  }
});

export const {
  changeBg,
  changeFontColor,
  changeOpacity,
  resetColors
} = colorParametrsSlice.actions;
export default colorParametrsSlice.reducer;
