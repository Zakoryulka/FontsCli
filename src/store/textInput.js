import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import fontsData from '../fontsData.json';

const freeFonts = fontsData.data.fonts.freeFonts;
const premiumFonts = fontsData.data.fonts.premiumFonts;
const iosTextHeight = 18;
const androidTextHeight = 18;
const maxNumberOfLines = 3;

const familyFonts = [...freeFonts, ...premiumFonts];
const familyFontsRU = familyFonts.filter((item) => (item.cyrillicFont === 'true'));


const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    familyFonts: familyFonts,
    favoritesFamilyFonts: [],
    enteredText: '',
    numberOfLines: null,
    textHeight: Platform.OS === 'ios' ? iosTextHeight : androidTextHeight,
    cyrillicFont: false,
    keyboardVisible: false,
  },
  reducers: {
    setFonts: (state) => {
      if (state.enteredText === '') {
        state.familyFonts = familyFonts;
      } else {
        if (/[А-яЁё]/.test(state.enteredText)) {
          state.familyFonts = familyFontsRU;
        } else {
          state.familyFonts = familyFonts;
        }
      }
    },
    setFontsEng: (state) => {
      state.familyFonts = familyFonts;
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
    },
    toggleFavoriteFamilyFont: (state, action) => {
      // console.log(action.payload.font);
      console.log(state.favoritesFamilyFonts);
      // console.log(state.favoritesFamilyFonts.includes("Caveat"));
      // console.log(state.favoritesFamilyFonts.includes(action.payload.font));
      // console.log(state.favoritesFamilyFonts);
      if (state.favoritesFamilyFonts.includes(action.payload.font)) {
        console.log('gggg')
        state.favoritesFamilyFonts = state.favoritesFamilyFonts.filter((item) => (item != action.payload.font))
      } else {
        console.log('ddddd');
        state.favoritesFamilyFonts = [...state.favoritesFamilyFonts, action.payload.font];
      }
    },
  }
});

export const { setFonts,
  inputText,
  clearText,
  setNumberOfLines,
  setKeyboardVisible,
  setKeyboardNotVisible,
  toggleFavoriteFamilyFont
} = textInputSlice.actions;
export default textInputSlice.reducer;
