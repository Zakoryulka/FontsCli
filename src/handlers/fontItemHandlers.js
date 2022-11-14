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
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);

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

  const onItemPressHandler = useCallback((ref, isPremium) => {
    if (pressFontItemCounter === appConts.countOfAddRate) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      if (isPremium === 'free') {
        dispatch(pressFreeFontItem());
        makeCopyToClipboard(ref);
      } if (isPremium === 'premium') {
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

  const onLongItemPressHandler = useCallback( async(ref2, fontDisplayName, font, isPremium) => {
    dispatch(setActiveFontDisplayName({displayName: fontDisplayName}));
    dispatch(setActiveFont({font: font}));
    if (pressFontItemCounter === 10) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      setCoorAlert(ref2);
      dispatch(altSharingItemModalShow());
      if (isPremium === 'free') {
        dispatch(pressFreeFontItem());
        setNewImageURI(ref2);
      } if (isPremium === 'premium') {
        dispatch(pressPremiumFontItem());
      }
    }
  });

  const choseLineHeight = useCallback((font) => {
    // console.log('choseLineHeight');
    switch (font) {
      case 'BadScript':
        return (fontSize + 9) * lineSpacing;
      case 'ColorTube':
        return (fontSize + 9) * lineSpacing;
      case 'Storytella':
        return (fontSize + 1.4) * lineSpacing;
      case 'TagType':
        return (fontSize + 5) * lineSpacing;
      default:
        return fontSize * lineSpacing;
    }
  }, [lineSpacing, fontSize]);

  return {
    choseLineHeight,
    onItemPressHandler,
    onLongItemPressHandler
  }
}
