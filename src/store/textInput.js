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
    ios: item.fontNameIos,
    cyrillicFont: item.cyrillicFont
  }
});

const familyPremiumFonts =
premiumFonts.map((item) => {
  return {
    displayName: item.displayName,
    android: item.fontNameAndroid,
    ios: item.fontNameIos,
    cyrillicFont: item.cyrillicFont
  }
});

const familyFonts0 = [...freeFonts, ...premiumFonts];
const familyFonts = [...familyFreeFonts, ...familyPremiumFonts];
const familyFontsRU = familyFonts.filter((item) => (item.cyrillicFont === 'true'));


// const familyFonts = [...freeFonts, ...premiumFonts];
const fonts = [
  {
    title: "Free Fonts",
    data: freeFonts.map((item) => (item.displayName))
  },
  {
    title: "Premium Fonts 💎",
    data: premiumFonts.map((item) => (item.displayName))
  }
];

const fontsRU = [
  {
    title: "Free Fonts",
    data: freeFonts.filter((item) => (item.cyrillicFont === 'true')).map((item) => (item.displayName))
  },
  {
    title: "Premium Fonts 💎",
    data: premiumFonts.filter((item) => (item.cyrillicFont === 'true')).map((item) => (item.displayName))
  }
];
// console.log(familyFreeFonts);

const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    familyFonts: familyFonts,
    fontsList: fonts,
    enteredText: '',
    numberOfLines: null,
    textHeight: Platform.OS === 'ios' ? iosTextHeight : androidTextHeight,
    cyrillicFont: false,
    keyboardVisible: false
  },
  reducers: {
    setFonts: (state) => {
      if (state.enteredText === '') {
        state.familyFonts = familyFonts;
        state.fontsList = fonts;
      } else {
        if (/[А-яЁё]/.test(state.enteredText)) {
          state.familyFonts = familyFontsRU;
          state.fontsList = fontsRU;
        } else {
          state.familyFonts = familyFonts;
          state.fontsList = fonts;
        }
      }
    },
    setFontsEng: (state) => {
      state.familyFonts = familyFonts;
      state.fontsList = fonts;
    },
    inputText: (state, action) => {
      state.enteredText = action.payload.newText;
    },
    clearText: (state) => {
      state.enteredText = '';
    },
    setNumberOfLines: (state, action) => {
      state.currentFontSize = action.payload.fontSize;
      if (action.payload > state.textHeight * 1.5 * maxNumberOfLines) {
        state.numberOfLines = maxNumberOfLines;
      } else {
        state.numberOfLines = null;
      }
    },
    setKeyboardVisible: (state) => {
      state.keyboardVisible = true;
    },
    setKeyboardNotVisible: (state) => {
      state.keyboardVisible = false;
    }
  }
});

export const { setFonts,
  inputText,
  clearText,
  setNumberOfLines,
  setKeyboardVisible,
  setKeyboardNotVisible
} = textInputSlice.actions;
export default textInputSlice.reducer;
