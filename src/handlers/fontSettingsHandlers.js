import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {resetFontsSettings,
  changeFontSize,
  changeLineSpacing,
  changeLetterSpacing
} from '../store/fontParametrs'

export const fontSettingsHandlers = () => {
  const dispatch = useDispatch();

  const onPressResetHandler = useCallback(() =>
    dispatch(resetFontsSettings()
  ), []);

  const onChangeFontSizeHandler = useCallback((value) =>
    dispatch(changeFontSize({ fontSize: value })
  ), []);

  const onChangeLetterSpacingHandler = useCallback((value) =>
    dispatch(changeLetterSpacing({ letterSpacing: value })
  ), []);

  const onChangeLineSpacingHandler = useCallback((value) =>
    dispatch(changeLineSpacing({ lineSpacing: value })
  ), []);

  return {
    onPressResetHandler,
    onChangeFontSizeHandler,
    onChangeLetterSpacingHandler,
    onChangeLineSpacingHandler
  }
};
