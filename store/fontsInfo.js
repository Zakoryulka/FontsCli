import { createSlice } from "@reduxjs/toolkit";
import serverState from '../serverState.json';

const freeFonts = serverState.data.fonts.freeFonts;
const premiumFonts = serverState.data.fonts.premiumFonts;

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

const fontsInfoSlice = createSlice({
  name: 'fontsInfo',
  initialState: {
    familyFonts: familyFonts
  },
  reducers: {
  }
});

export default fontsInfoSlice.reducer;
