import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';
import colorParametrsReducer from './colorParametrs';
import fontParametrsReducer from './fontParametrs';
import aligmentParametrsReducer from './ aligmentParametrs';
import textInputReducer from './textInput';
import fontsInfoReducer from './fontsInfo';

export const store = configureStore({
  reducer: {
    modals: modalReducer,
    colorParametrs: colorParametrsReducer,
    fontParametrs: fontParametrsReducer,
    aligmentParametrs: aligmentParametrsReducer,
    textInput: textInputReducer,
    fontsInfo: fontsInfoReducer
  }
});
