import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    appIsPremium: true,
    fontsVisible: true,
    sketchsVisible: false,
    favoritesVisible: false,
    sketchesGroupListVisible: false,
    sketchesGroupSelected: null,
  },
  reducers: {
    showFonts: (state) => {
      state.fontsVisible = true;
      state.sketchsVisible = false;
      state.favoritesVisible = false;
      state.sketchesGroupListVisible = false;
    },
    showSketchs: (state) => {
      state.fontsVisible = false;
      state.favoritesVisible = false;
      state.sketchsVisible = true;
      state.sketchesGroupListVisible = false;
    },
    showFavorites: (state) => {
      state.fontsVisible = false;
      state.sketchsVisible = false;
      state.sketchesGroupListVisible = false;
      state.favoritesVisible = true;
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
  showFonts,
  showSketchs,
  showFavorites,
  sketchesGroupListShow,
  sketchesGroupListHide,
} = contentSlice.actions;
export default contentSlice.reducer;
