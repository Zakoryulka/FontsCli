import { useCallback } from "react";

import {
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

import { captureRef } from 'react-native-view-shot';

import { notifyShow,
  altSharingItemModalShow,
  pressFreeFontItem,
  pressPremiumFontItem,
  premiumAlertShow,
  changeItemCounter,
  rateAlertShow
} from "../store/alertSettings";
import { setImageURI, copyToClipboard } from "../store/shareingSettings";
import { setY, setXItem, setYItem,   setActiveFontDisplayName,
  setActiveFont } from '../store/alertSettings';

import { appConts } from "../constants/appConst";

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
const ScreenHeight = windowHeight - statusBarHeight;

export const fontItemHandlers = () => {
  const pressFontItemCounter = useSelector(state => state.alertSettings.pressFontItemCounter);

  const dispatch = useDispatch();

  const setNewImageURI = async (ref) => {
    try {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 1
      })
      dispatch(setImageURI({ newImageURI: uri}));
    } catch(err) {
      console.log(err);
    }
  };

  const makeCopyToClipboard = async (ref) => {
    if (Platform.OS = 'android') {
      await setNewImageURI(ref);
      dispatch(copyToClipboard());
    }
    dispatch(notifyShow({notifyText: 'copy'}));
  };

  const onItemPressHandler = useCallback((ref) => {
    if (pressFontItemCounter === appConts.countOfAddRate) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      if (statusFont === 'free') {
        dispatch(pressFreeFontItem());
        makeCopyToClipboard(ref);
      } if (statusFont === 'premium') {
        dispatch(pressPremiumFontItem());
        dispatch(premiumAlertShow());
      }
    }
  });

  const setCoorAlert = (ref) => {
    ref.current.measure( ( fx, fy, width, height, px, py) => {
      const fontItemY = py;
      const fontItemHeight = height;
      let y = fontItemY - statusBarHeight;
      const topScreentRest = ScreenHeight - (ScreenHeight - y);
      const bottomScreentRest = ScreenHeight - y - fontItemHeight;
      let newY;

      dispatch(setXItem({ xItem: px }));
      dispatch(setYItem({ yItem: y }));

      if (topScreentRest > ScreenHeight/3) {
        newY = y - 125;
        dispatch(setY({ y: newY }));
      } else if (bottomScreentRest > ScreenHeight/3) {
        newY = y + fontItemHeight + 10;
        dispatch(setY({ y: newY }));
      } else {
        dispatch(setY({ y: null }));
      }
    })
  };

  const onLongItemPressHandler = async(ref) => {
    dispatch(setActiveFontDisplayName({displayName: fontDisplayName}));
    dispatch(setActiveFont({font: font}));
    if (pressFontItemCounter === 10) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      setCoorAlert(ref);
      dispatch(altSharingItemModalShow());
      if (statusFont === 'free') {
        dispatch(pressFreeFontItem());
      } if (statusFont === 'premium') {
        dispatch(pressPremiumFontItem());
      }
    }
  };








  return {
    onItemPressHandler,
    onLongItemPressHandler
  }
}
