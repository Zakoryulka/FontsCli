import { useEffect, useCallback } from "react";
import { Keyboard } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import { openInfoModal, closeInfoModal,
  openShowMoreModal, closeShowMoreModal,
  openColorModal, closeColorModal,
  openFontSettingsModal, closeFontSettingsModal,
  cPickerBGShow, cPickerFontColorShow,
  cPickerBGHide, cPickerFontColorHide,
} from "../store/modal";
import {  setColorsValuesForSliders,
  setColorsValuesForCPickers
} from "../store/colorParametrs";
import { setFontsValuesForSliders } from "../store/fontParametrs";
import { changeAlignSelf } from "../store/aligmentParametrs";
import { setKeyboardVisible, setKeyboardNotVisible } from "../store/textInput";
import { changeColorTheme } from "../store/colorTheme";
import { changeCurrentSketchColor, setColorValueForSketchCPicker } from "../store/sketchesScreen";
import { setCurrentContent } from "../store/content";

export const modalsHandlers = () => {
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const keyboardVisible = useSelector(state => state.textInput.keyboardVisible);
  const currentSketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);

  const dispatch = useDispatch();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      dispatch(setKeyboardVisible());
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      dispatch(setKeyboardNotVisible());
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardVisible]);

  const closeFontSettingsHandler = useCallback(() => {
    dispatch(closeFontSettingsModal());
    dispatch(setFontsValuesForSliders());
  }, []);

  const closeColorModalHandler = useCallback(() => {
    dispatch(closeColorModal())
    dispatch(setColorsValuesForSliders())
  }, []);

  const pressInfoBtnHandler = useCallback(() => {
    dispatch(openInfoModal());
  }, []);

  const closeInfoModalHandler = () => {    // не передается в дочерний компонент
    dispatch(closeInfoModal());
  };

  const pressShowMoreBtnHandler = useCallback(() => {
    dispatch(openShowMoreModal())
  }, []);

  const closeShowMoreHandler = () => {    // не передается в дочерний компонент
    dispatch(closeShowMoreModal())
  };

  const pressAlignSelfBtnHandler = useCallback(() => {
    dispatch(changeAlignSelf())
  }, []);

  const pressTextSettingsHandler = useCallback(() => {
    if (fontSettingsModalShow) {
      closeFontSettingsHandler();
    } else {
      Keyboard.dismiss();
      dispatch(openFontSettingsModal());
    }
  }, []);

  const pressColorSettingsHandler = useCallback(() => {
    if (colorModalShow) {
      closeColorModalHandler();
    } else {
      Keyboard.dismiss();
      dispatch(openColorModal());
    }
  }, []);

  const pressOpenCPickerFontHandler = useCallback(() => {
    dispatch(cPickerFontColorShow());
    dispatch(setColorsValuesForCPickers());
  }, []);

  const pressCloseCPickerFontHandler = useCallback(() => {
    dispatch(cPickerFontColorHide());
  }, []);

  const pressOpenCPickerBGHandler = useCallback(() => {
    dispatch(cPickerBGShow());
    dispatch(setColorsValuesForCPickers());
  }, []);

  const pressCloseCPickerBGHandler = useCallback(() => {
    dispatch(cPickerBGHide());
  }, []);

  const pressChangeColorTheme = useCallback(() => {
    dispatch(changeColorTheme());

    if (currentSketchColor === "#FFFFFF") {
      dispatch(changeCurrentSketchColor({newColor: "#000000"}));
      dispatch(setColorValueForSketchCPicker());
    } else if (currentSketchColor === "#000000") {
      dispatch(changeCurrentSketchColor({newColor: "#FFFFFF"}));
      dispatch(setColorValueForSketchCPicker());
    }
  }, []);

  const changeContentBtnHandler = (name) => {           // не передается в дочерний компонент
    dispatch(setCurrentContent({currentContent: name === "Favorites" ? "Fonts" : name}));
    closeFontSettingsHandler();
    closeColorModalHandler();
  };


  return {
    pressInfoBtnHandler,
    closeInfoModalHandler,
    pressShowMoreBtnHandler,
    closeShowMoreHandler,
    pressAlignSelfBtnHandler,
    pressTextSettingsHandler,
    closeFontSettingsHandler,
    pressColorSettingsHandler,
    closeColorModalHandler,
    pressOpenCPickerFontHandler,
    pressCloseCPickerFontHandler,
    pressOpenCPickerBGHandler,
    pressCloseCPickerBGHandler,
    pressChangeColorTheme,
    changeContentBtnHandler
  }
};
