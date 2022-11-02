import { createSlice } from "@reduxjs/toolkit";

const fontSizeDefault = 27;
const lineSpacingDefault = 1.3;
const letterSpacingDefault = 0;

const fontParametrsSlice = createSlice({
  name: 'fontParametrs',
  initialState: {
    currentFontSize: fontSizeDefault,
    currentLineSpacing: lineSpacingDefault,
    currentLetterSpacing: letterSpacingDefault,
    startValueForSliderFontSize: fontSizeDefault,
    startValueForSliderLineSpacing: lineSpacingDefault,
    startValueForSliderLetterSpacing: letterSpacingDefault,
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
      state.currentFontSize = fontSizeDefault;
      state.currentLineSpacing = lineSpacingDefault;
      state.currentLetterSpacing = letterSpacingDefault;
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
