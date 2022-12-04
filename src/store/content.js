import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    fontsVisible: true,
    sketchsVisible: false,
    sketchesGroupListVisible: false,
    sketchesGroupSelected: null,
  },
  reducers: {
    showFonts: (state) => {
      state.fontsVisible = true;
      state.sketchsVisible = false;
      state.sketchesGroupListVisible = false;
    },
    showSketchs: (state) => {
      state.fontsVisible = false;
      state.sketchsVisible = true;
      state.sketchesGroupListVisible = false;
    },
    sketchesGroupListShow: (state, action) => {
      state.sketchesGroupSelected = action.payload.newSketchGroup;
      state.sketchsVisible = false;
      state.sketchesGroupListVisible = true;
    },
    sketchesGroupListHide: (state) => {
      state.sketchesGroupListVisible = false;
      state.sketchesGroupSelected = null;
    },
  }
});

export const {
  showFonts,
  showSketchs,
  sketchesGroupListShow,
  sketchesGroupListHide,
} = contentSlice.actions;
export default contentSlice.reducer;
