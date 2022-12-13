import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { captureRef } from 'react-native-view-shot';
import { Platform, StatusBar, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { notifyShow,
  altSharingItemModalShow,
  pressFreeFontItem,
  pressPremiumFontItem,
  premiumAlertShow,
  changeItemCounter,
  rateAlertShow
} from "../store/alertSettings";
import { setY,
  setXItem,
  setYItem,
  setWidthItem,
  setHeightItem,
  setActiveFontDisplayName,
  setActiveFont,
  setActiveSketchID
} from '../store/alertSettings';
import { setImageURI, copyToClipboard } from "../store/shareingSettings";
import { setfavoritesFamilyFonts } from "../store/textInput";

import { appConts } from "../constants/appConst";

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
const ScreenHeight = windowHeight - statusBarHeight;

export const contentItemHandlers = () => {
  const pressFontItemCounter = useSelector(state => state.alertSettings.pressFontItemCounter);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);
  const currentContent = useSelector(state => state.content.currentContent);
  const favoritesFamilyFonts = useSelector(state => state.textInput.favoritesFamilyFonts);

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

  const setCoorAlert = (ref) => {
    ref.current.measure( ( fx, fy, width, height, px, py) => {
      const fontItemY = py;
      const fontItemHeight = height;
      let y = currentContent === "Sketches" ? fontItemY + statusBarHeight : fontItemY ;

      const topScreenRest = ScreenHeight - (ScreenHeight - y);
      const bottomScreentRest = ScreenHeight - y - fontItemHeight;
      let newY;

      dispatch(setXItem({ xItem: px }));
      dispatch(setYItem({ yItem: y }));
      dispatch(setWidthItem({ width: width }));
      dispatch(setHeightItem({ height: fontItemHeight }));

      if (topScreenRest > ScreenHeight/3) {
        newY = y - 125;
        dispatch(setY({ y: newY }));
      } else if (bottomScreentRest > ScreenHeight/3) {
        if (currentContent === 'Fonts') {
          newY = y + fontItemHeight + 10;
          dispatch(setY({ y: newY }));
        } else if (currentContent === 'Sketches') {
          newY = y + fontItemHeight + 10 * 4;
          dispatch(setY({ y: newY }));
        }
      } else {
        dispatch(setY({ y: null }));
      }
    })
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

  const onLongFontItemPressHandler = useCallback( async(ref2, fontDisplayName, font, isPremium) => {
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

  const onLongSketchItemPressHandler = useCallback( async(ref2, isPremium, id) => {
    dispatch(setActiveSketchID({sketchID: id}));
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

  const onPressFontFavoriteBtnHandler = useCallback( async(font) => {
    const addFavoriteFont = () => {
      if (favoritesFamilyFonts.includes(font)) {
        return favoritesFamilyFonts.filter((item) => (item != font));
      } else {
        return [...favoritesFamilyFonts, font];
      }
    };
    const jsonFavorites = JSON.stringify(addFavoriteFont());

    dispatch(setfavoritesFamilyFonts({favoritesFonts: addFavoriteFont()}));

    await AsyncStorage.setItem('favorites', jsonFavorites);
  }, [favoritesFamilyFonts]);

  return {
    choseLineHeight,
    onItemPressHandler,
    onLongFontItemPressHandler,
    onLongSketchItemPressHandler,
    onPressFontFavoriteBtnHandler
  }
}
