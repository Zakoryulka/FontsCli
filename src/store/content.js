import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    fontsVisible: true,
    sketchsVisible: false,
    artsVisible: false,
  },
  reducers: {
    showFonts: (state) => {
      state.fontsVisible = true;
      state.sketchsVisible = false;
      state.artsVisible = false;
    },
    showSketchs: (state) => {
      state.fontsVisible = false;
      state.sketchsVisible = true;
      state.artsVisible = false;
    },
    showArts: (state) => {
      state.fontsVisible = false;
      state.sketchsVisible = false;
      state.artsVisible = true;
    },
  }
});

export const {
  showFonts,
  showSketchs,
  showArts
} = contentSlice.actions;
export default contentSlice.reducer;
