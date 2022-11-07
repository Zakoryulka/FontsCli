import { createSlice } from "@reduxjs/toolkit";

import { FontItemStyles } from '../constants/stylesConst';

const fontParametrsSlice = createSlice({
  name: 'fontParametrs',
  initialState: {
    currentFontSize: FontItemStyles.fontSizeDefault,
    currentLineSpacing: FontItemStyles.lineSpacingDefault,
    currentLetterSpacing: FontItemStyles.letterSpacingDefault,
    startValueForSliderFontSize: FontItemStyles.fontSizeDefault,
    startValueForSliderLineSpacing: FontItemStyles.lineSpacingDefault,
    startValueForSliderLetterSpacing: FontItemStyles.letterSpacingDefault,
  },
  reducers: {
    changeFontSize: (state, action) => {
      state.currentFontSize = action.payload.fontSize;
    },
    changeLineSpacing: (state, action) => {
      state.currentLineSpacing = action.payload.lineSpacing;
    },
    changeLetterSpacing: (state, action) => {
      state.currentLetterSpacing = action.payload.letterSpacing;
    },
    setFontsValuesForSliders: (state) => {
      state.startValueForSliderFontSize = state.currentFontSize;
      state.startValueForSliderLineSpacing = state.currentLineSpacing;
      state.startValueForSliderLetterSpacing = state.currentLetterSpacing;
    },
    resetFontsSettings: (state) => {
      state.currentFontSize = FontItemStyles.fontSizeDefault;
      state.currentLineSpacing = FontItemStyles.lineSpacingDefault;
      state.currentLetterSpacing = FontItemStyles.letterSpacingDefault;
    }
  }
});

export const {
  changeFontSize,
  changeLineSpacing,
  changeLetterSpacing,
  resetFontsSettings,
  setFontsValuesForSliders
} = fontParametrsSlice.actions;
export default fontParametrsSlice.reducer;
