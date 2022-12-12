import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {changeBg,
  changeFontColor,
  changeOpacity,
  resetColors,
  changePadding,
  changeRadius
} from '../store/colorParametrs'

export const fontColorModalSettingsHandlers = () => {
  const dispatch = useDispatch();

  const onPressResetHandler = useCallback(() =>
    dispatch(resetColors()
  ), []);

  const onPressChangeFontColorHandler = useCallback((color) =>
    dispatch(changeFontColor({ newColor: color})
  ), []);

  const onPressChangeBGColorHandler = useCallback((color) =>
    dispatch(changeBg({ newColor: color})
  ), []);

  const onChangePaddingHandler = useCallback((padding) =>
    dispatch(changePadding({ padding: padding})
  ), []);

  const onChangeRadiusHandler = useCallback((radius) =>
    dispatch(changeRadius({ radius: radius})
  ), []);

  const onChangeOpacityHandler = useCallback((opacity) =>
    dispatch(changeOpacity({ opacity: opacity})
  ), []);

  return { onPressResetHandler,
    onPressChangeFontColorHandler,
    onPressChangeBGColorHandler,
    onChangePaddingHandler,
    onChangeRadiusHandler,
    onChangeOpacityHandler
  }
};
