import { useEffect } from "react";

import {
  Keyboard
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";
import { openInfoModal,
  openShowMoreModal, closeShowMoreModal,
  openColorModal, closeColorModal,
  openFontSettingsModal, closeFontSettingsModal,
  cPickerBGHide, cPickerFontColorHide
} from "../store/modal";
import {  setColorsValuesForSliders,
  setColorsValuesForCPickers
} from "../store/colorParametrs";
import { setFontsValuesForSliders } from "../store/fontParametrs";
import { changeAlignSelf } from "../store/ aligmentParametrs";
import { setKeyboardVisible, setKeyboardNotVisible } from "../store/textInput";


export const modalsHandlers = () => {
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const keyboardVisible = useSelector(state => state.textInput.keyboardVisible);

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

  const closeFontSettingsHandler = () => {
    dispatch(closeFontSettingsModal());
    dispatch(setFontsValuesForSliders());
  };

  const closeColorModalHandler = () => {
    dispatch(closeColorModal())
    dispatch(setColorsValuesForSliders())
    dispatch(setColorsValuesForCPickers())
  };

  const pressInfoBtnHandler = () => {
    dispatch(openInfoModal())
  };

  const pressShowMoreBtnHandler = () => {
    dispatch(openShowMoreModal())
  };

  const closeShowMoreHandler = () => {
    dispatch(closeShowMoreModal())
  };


  const pressAlignSelfBtnHandler = () => {
    dispatch(changeAlignSelf())
  };

  const pressTextSettingsHandler = () => {
    if (fontSettingsModalShow) {
      closeFontSettingsHandler();
    } else {
      Keyboard.dismiss();
      dispatch(openFontSettingsModal());
    }
  };

  const pressColorSettingsHandler = () => {
    if (colorModalShow) {
      closeColorModalHandler();
    } else {
      Keyboard.dismiss();
      dispatch(openColorModal());
    }
  };

  const pressCloseCPickerFontHandler = () => {
    dispatch(cPickerFontColorHide());
    dispatch(setColorsValuesForCPickers());
  };

  const pressCloseCPickerBGHandler = () => {
    dispatch(cPickerBGHide());
    dispatch(setColorsValuesForCPickers());
  };

  // const newFunc = () => {};
  // const newFunc = () => {};
  // const newFunc = () => {};
  // const newFunc = () => {};
  // const newFunc = () => {};
  // const newFunc = () => {};


  return {
    pressInfoBtnHandler,
    pressShowMoreBtnHandler,
    closeShowMoreHandler,
    pressAlignSelfBtnHandler,
    pressTextSettingsHandler,
    closeFontSettingsHandler,
    pressColorSettingsHandler,
    closeColorModalHandler,
    pressCloseCPickerFontHandler,
    pressCloseCPickerBGHandler
  }
}
