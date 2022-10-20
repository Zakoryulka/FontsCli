import { createSlice } from "@reduxjs/toolkit";
import serverState from '../serverState.json';

const freeFonts = serverState.data.fonts.freeFonts;
const premiumFonts = serverState.data.fonts.premiumFonts;

const fonts = [
  {
    title: "Free Fonts",
    data: freeFonts.map((item, i) => (item.displayName))
  },
  {
    title: "Premium Fonts 💎",
    data: premiumFonts.map((item) => (item.displayName))
  }
];

const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    fontsList: fonts,
    enteredText: '',
  },
  reducers: {
    inputText: (state, action) => {
      state.enteredText = action.payload.newText;
    },
    clearText: (state, action) => {
      state.enteredText = '';
    }
  }
});

export const { inputText, clearText } = textInputSlice.actions;
export default textInputSlice.reducer;
