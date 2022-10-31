import { createSlice } from "@reduxjs/toolkit";

const bgDefault = '#940081';
const fontColorDefault = '#ffffff';
const opacityDefault = 1;
const paddingDefault = 15;
const radiusDefault = 8;

const colorParametrsSlice = createSlice({
  name: 'colorParametrs',
  initialState: {
    currentBg: bgDefault,
    currentFontColor: fontColorDefault,
    currentOpacity: opacityDefault,
    currentPadding: paddingDefault,
    currentRadius: radiusDefault
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
    changePadding: (state, action) => {
      state.currentPadding = action.payload.padding;
    },
    changeRadius: (state, action) => {
      state.currentRadius = action.payload.radius;
    },
    resetColors: (state) => {
      state.currentBg = bgDefault;
      state.currentFontColor = fontColorDefault;
      state.currentOpacity = opacityDefault;
      state.currentPadding = paddingDefault;
      state.currentRadius = radiusDefault;
    }
  }
});

export const {
  changeBg,
  changeFontColor,
  changeOpacity,
  changePadding,
  changeRadius,
  resetColors
} = colorParametrsSlice.actions;
export default colorParametrsSlice.reducer;
