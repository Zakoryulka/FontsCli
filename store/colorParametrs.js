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
    currentPadding: paddingDefault,
    currentRadius: radiusDefault,
    currentOpacity: opacityDefault,
    startValueForSliderPadding: paddingDefault,
    startValueForSliderRadius: radiusDefault,
    startValueForSliderOpacity: opacityDefault,
  },
  reducers: {
    changeBg: (state, action) => {
      state.currentBg = action.payload.newColor;
    },
    changeFontColor: (state, action) => {
      state.currentFontColor = action.payload.newColor;
    },
    changePadding: (state, action) => {
      state.currentPadding = action.payload.padding;
    },
    changeRadius: (state, action) => {
      state.currentRadius = action.payload.radius;
    },
    changeOpacity: (state, action) => {
      state.currentOpacity = action.payload.opacity;
    },
    setColorsValuesForSliders: (state) => {
      state.startValueForSliderPadding = state.currentPadding;
      state.startValueForSliderRadius = state.currentRadius;
      state.startValueForSliderOpacity = state.currentOpacity;
    },
    resetColors: (state) => {
      state.currentBg = bgDefault;
      state.currentFontColor = fontColorDefault;
      state.currentPadding = paddingDefault;
      state.currentRadius = radiusDefault;
      state.currentOpacity = opacityDefault;
    }

  }
});

export const {
  changeBg,
  changeFontColor,
  changePadding,
  changeRadius,
  changeOpacity,
  setColorsValuesForSliders,
  resetColors
} = colorParametrsSlice.actions;
export default colorParametrsSlice.reducer;
