import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import serverState from '../serverState.json';

const freeFonts = serverState.data.fonts.freeFonts;
const premiumFonts = serverState.data.fonts.premiumFonts;
const iosTextHeight = 18;
const androidTextHeight = 18;
const maxNumberOfLines = 3;

const familyFreeFonts =
freeFonts.map((item) => {
  return {
    displayName: item.displayName,
    android: item.fontNameAndroid,
    ios: item.fontNameIos
  }
});

const familyPremiumFonts =
premiumFonts.map((item) => {
  return {
    displayName: item.displayName,
    android: item.fontNameAndroid,
    ios: item.fontNameIos
  }
});

const familyFonts = [...familyFreeFonts, ...familyPremiumFonts];

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
    familyFonts: familyFonts,
    fontsList: fonts,
    enteredText: '',
    numberOfLines: null,
    textHeight: Platform.OS === 'ios' ? iosTextHeight : androidTextHeight
  },
  reducers: {
    inputText: (state, action) => {
      state.enteredText = action.payload.newText;
    },
    clearText: (state, action) => {
      state.enteredText = '';
    },
    setNumberOfLines: (state, action) => {
      state.currentFontSize = action.payload.fontSize;
      if (action.payload > state.textHeight * 1.5 * maxNumberOfLines) {
        state.numberOfLines = maxNumberOfLines;
      } else {
        state.numberOfLines = null;
      }

      console.log(action.payload);
    }
  }
});

export const { inputText, clearText, setNumberOfLines } = textInputSlice.actions;
export default textInputSlice.reducer;
