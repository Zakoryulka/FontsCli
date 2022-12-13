import { createSlice } from "@reduxjs/toolkit";

import { DarkTheme, LightTheme } from '../constants/stylesConst';

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: {
    theme: "dark",
    colorsStyle: DarkTheme
  },
  reducers: {
    changeColorTheme: (state) => {
      switch (state.theme) {
        case "dark":
          state.theme = "light";
          state.colorsStyle = LightTheme;
          return;
        case "light":
          state.theme = "dark";
          state.colorsStyle = DarkTheme;
          return;
      }
    }
  }
});
export const {
  changeColorTheme
} = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
