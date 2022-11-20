import { createSlice } from "@reduxjs/toolkit";
import { ScetchItemStyles } from '../constants/stylesConst';

const sketchesScreenSlice = createSlice({
  name: 'sketchesScreen',
  initialState: {
    sketchContentGroupVisible: "All",
    currentSketchColor: ScetchItemStyles.colorDefault,
    startValueForCPickerSketchColor: ScetchItemStyles.colorDefault,
    cPickerSketchVisible: false,
    sketchSettingsModalShow: false,
    currentSketchOpacity: ScetchItemStyles.opacityDefault,
    startValueForSliderSketchOpacity: ScetchItemStyles.opacityDefault,
  },
  reducers: {
    changeSketchContentGroupVisible: (state, action) => {
      state.sketchContentGroupVisible = action.payload.newSketchContent;
    },
    changeCurrentSketchColor: (state, action) => {
      state.currentSketchColor = action.payload.newColor;
    },
    setColorValueForSketchCPicker: (state) => {
      state.startValueForCPickerSketchColor = state.currentSketchColor;
    },
    cPickerSketchShow: (state) => {
      state.cPickerSketchVisible = true;
    },
    cPickerSketchHide: (state) => {
      state.cPickerSketchVisible = false;
    },
    openSketchSettingsModal:  (state) => {
      state.sketchSettingsModalShow = true;
      console.log(state.sketchSettingsModalShow);
    },
    closeSketchSettingsModal: (state) => {
      state.sketchSettingsModalShow = false;
    },
    changeSketchOpacity: (state, action) => {
      state.currentSketchOpacity = action.payload.opacity;
    },

    // resetFontsSettings: (state) => {
    //   // state.currentFontSize = FontItemStyles.fontSizeDefault;
    //   // state.currentLineSpacing = FontItemStyles.lineSpacingDefault;
    //   // state.currentLetterSpacing = FontItemStyles.letterSpacingDefault;
    // }
  }
});

export const {
  changeSketchContentGroupVisible,
  changeCurrentSketchColor,
  setColorValueForSketchCPicker,
  cPickerSketchShow,
  cPickerSketchHide,
  openSketchSettingsModal,
  closeSketchSettingsModal,
  changeSketchOpacity,
  // resetFontsSettings
} = sketchesScreenSlice.actions;
export default sketchesScreenSlice.reducer;
