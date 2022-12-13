import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    appIsPremium: false,
    currentContent: 'Fonts',
    sketchesGroupSelected: null,
  },
  reducers: {
    setCurrentContent: (state, action) => {
      state.currentContent = action.payload.currentContent;
    },
    setSketchesGroupList: (state, action) => {
      state.sketchesGroupSelected = action.payload.newSketchGroup;
    },
    deleteSketchesGroupList: (state) => {
      state.sketchesGroupSelected = null;
    },
    setPremiumStatus: (state, action) => {
      state.appIsPremium = action.payload.status;
    },
  }
});

export const {
  setCurrentContent,
  setSketchesGroupList,
  deleteSketchesGroupList,
  setPremiumStatus
} = contentSlice.actions;
export default contentSlice.reducer;
