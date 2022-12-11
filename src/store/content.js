import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    appIsPremium: true,
    currentContent: 'Fonts',
    sketchesGroupListVisible: false,
    sketchesGroupSelected: null,
  },
  reducers: {
    setCurrentContent: (state, action) => {
      state.currentContent = action.payload.currentContent;
    },
    sketchesGroupListShow: (state, action) => {
      state.sketchesGroupSelected = action.payload.newSketchGroup;
      state.sketchesGroupListVisible = true;
    },
    sketchesGroupListHide: (state) => {
      state.sketchesGroupListVisible = false;
      state.sketchesGroupSelected = null;
    },
  }
});

export const {
  setCurrentContent,
  sketchesGroupListShow,
  sketchesGroupListHide,
} = contentSlice.actions;
export default contentSlice.reducer;
