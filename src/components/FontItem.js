import { useRef, memo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text,
  View,
  Pressable,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
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

import { appStyles } from '../styles/appStyles';

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
const ScreenHeight = windowHeight - statusBarHeight;

const FontItem = memo((props) => {
  const pressFontItemCounter = useSelector(state => state.alertSettings.pressFontItemCounter);
  const { fontDisplayName, font,
    fontColor,
    bg,
    opacity,
    padding,
    radius,
    fontSize,
    letterSpacing,
    lineSpacing,
    alignSelf,
    alignText,
    fontsList,
    enteredText,
  } = props;


  const viewShotRef = useRef();
  const dispatch = useDispatch();

  const statusFont = fontsList[0].data.includes(fontDisplayName) ? 'free' : 'premium';

  const choseLineHeight = () => {
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

  };

  const setNewImageURI = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 1
      })
      dispatch(setImageURI({ newImageURI: uri}));
    } catch(err) {
      console.log(err);
    }
  };

  const makeCopyToClipboard = async () => {
    if (Platform.OS = 'android') {
      await setNewImageURI();
      dispatch(copyToClipboard());
    }
    dispatch(notifyShow({notifyText: 'copy'}));
  };

  const onItemPressHandler = () => {
    if (pressFontItemCounter === appConts.countOfAddRate) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      if (statusFont === 'free') {
        dispatch(pressFreeFontItem());
        makeCopyToClipboard();
      } if (statusFont === 'premium') {
        dispatch(pressPremiumFontItem());
        dispatch(premiumAlertShow());
      }
    }
  };

  console.log('render Item ' + font);

  const setCoorAlert = () => {
    viewShotRef.current.measure( ( fx, fy, width, height, px, py) => {
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
    });
  }

  const onLongItemPressHandler = async() => {
    dispatch(setActiveFontDisplayName({displayName: fontDisplayName}));
    dispatch(setActiveFont({font: font}));
    if (pressFontItemCounter === 10) {
      dispatch(changeItemCounter());
      dispatch(rateAlertShow());
    } else {
      dispatch(changeItemCounter());
      setCoorAlert();
      dispatch(altSharingItemModalShow());
      if (statusFont === 'free') {
        dispatch(pressFreeFontItem());
      } if (statusFont === 'premium') {
        dispatch(pressPremiumFontItem());
      }
    }
  };

  return (
    <Pressable
      style={{backgroundColor: 'transparent'}}
      onPress={onItemPressHandler}
      onLongPress={onLongItemPressHandler}
    >
      <View
        ref={viewShotRef}
        collapsable={false}
        style={[
          {
            backgroundColor: bg,
            opacity: opacity,
            alignSelf: alignSelf,
            padding: padding,
            borderRadius: radius
          },
            appStyles.fontWrapper
        ]}
      >
        <Text
          style={[
            {
              fontFamily: font,
              color: fontColor,
              fontSize: fontSize,
              letterSpacing: letterSpacing,
              lineHeight: choseLineHeight(),
              textAlign: alignText
            }
          ]}
        >
          {enteredText === '' ? fontDisplayName : enteredText}
        </Text>
      </View>
    </Pressable>
  )
})

export default FontItem;