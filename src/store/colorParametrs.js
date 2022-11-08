import { createSlice } from "@reduxjs/toolkit";
import { FontItemStyles } from '../constants/stylesConst';

const colorParametrsSlice = createSlice({
  name: 'colorParametrs',
  initialState: {
    currentBg: FontItemStyles.bgDefault,
    currentFontColor: FontItemStyles.fontColorDefault,
    currentPadding: FontItemStyles.paddingDefault,
    currentRadius: FontItemStyles.radiusDefault,
    currentOpacity: FontItemStyles.opacityDefault,
    startValueForCPickerBg: FontItemStyles.bgDefault,
    startValueForCPickerColor: FontItemStyles.fontColorDefault,
    startValueForSliderPadding: FontItemStyles.paddingDefault,
    startValueForSliderRadius: FontItemStyles.radiusDefault,
    startValueForSliderOpacity: FontItemStyles.opacityDefault,
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
    setColorsValuesForCPickers: (state) => {
      state.startValueForCPickerBg = state.currentBg;
      state.startValueForCPickerColor = state.currentFontColor;
      // console.log(state.startValueForCPickerBg);
      // console.log(state.startValueForCPickerColor);
    },
    setColorsValuesForSliders: (state) => {
      state.startValueForSliderPadding = state.currentPadding;
      state.startValueForSliderRadius = state.currentRadius;
      state.startValueForSliderOpacity = state.currentOpacity;
    },
    resetColors: (state) => {
      state.currentBg = FontItemStyles.bgDefault;
      state.currentFontColor = FontItemStyles.fontColorDefault;
      state.currentPadding = FontItemStyles.paddingDefault;
      state.currentRadius = FontItemStyles.radiusDefault;
      state.currentOpacity = FontItemStyles.opacityDefault;
    }

  }
});

export const {
  changeBg,
  changeFontColor,
  changePadding,
  changeRadius,
  changeOpacity,
  setColorsValuesForCPickers,
  setColorsValuesForSliders,
  resetColors
} = colorParametrsSlice.actions;
export default colorParametrsSlice.reducer;
