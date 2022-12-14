import { createSlice } from "@reduxjs/toolkit";
import { ScetchItemStyles } from '../constants/stylesConst';

const sketchesScreenSlice = createSlice({
  name: 'sketchesScreen',
  initialState: {
    currentSketchColor: null,
    startValueForCPickerSketchColor: ScetchItemStyles.colorDefault,
    cPickerSketchVisible: false,
    sketchSettingsModalShow: false,
    currentSketchOpacity: ScetchItemStyles.opacityDefault,
    startValueForSliderSketchOpacity: ScetchItemStyles.opacityDefault,
  },
  reducers: {
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
    },
    closeSketchSettingsModal: (state) => {
      state.sketchSettingsModalShow = false;
    },
    changeSketchOpacity: (state, action) => {
      state.currentSketchOpacity = action.payload.opacity;
    },
    resetSketchSettings: (state) => {
      state.currentSketchColor = null;
      state.currentSketchOpacity = ScetchItemStyles.opacityDefault;
    }
  }
});

export const {
  changeCurrentSketchColor,
  setColorValueForSketchCPicker,
  cPickerSketchShow,
  cPickerSketchHide,
  openSketchSettingsModal,
  closeSketchSettingsModal,
  changeSketchOpacity,
  resetSketchSettings
} = sketchesScreenSlice.actions;
export default sketchesScreenSlice.reducer;
