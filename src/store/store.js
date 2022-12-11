import { configureStore } from '@reduxjs/toolkit';

import contentReducer from './content';
import modalReducer from './modal';
import colorParametrsReducer from './colorParametrs';
import fontParametrsReducer from './fontParametrs';
import aligmentParametrsReducer from './aligmentParametrs';
import textInputReducer from './textInput';
import shareingSettingsReducer from './shareingSettings'; // test
import alertSettingsReducer from './alertSettings';
import colorThemeReducer from './colorTheme';
import sketchesScreenReducer from './sketchesScreen';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    modals: modalReducer,
    colorParametrs: colorParametrsReducer,
    fontParametrs: fontParametrsReducer,
    aligmentParametrs: aligmentParametrsReducer,
    textInput: textInputReducer,
    shareingSettings: shareingSettingsReducer, // test
    alertSettings: alertSettingsReducer,
    colorTheme: colorThemeReducer,
    sketchesScreen: sketchesScreenReducer
  }
});
