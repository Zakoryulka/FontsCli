import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    appIsPremium: true,
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
  }
});

export const {
  setCurrentContent,
  setSketchesGroupList,
  deleteSketchesGroupList
} = contentSlice.actions;
export default contentSlice.reducer;
