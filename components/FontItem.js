import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Pressable, Platform, Alert, StatusBar, Dimensions } from 'react-native';
import { captureRef } from 'react-native-view-shot';


import { notifyShow,
  altSharingItemModalShow,
  pressFreeFontItem,
  pressPremiumFontItem,
  premiumAlertShow
} from "../store/modal";
import { setImageURI, copyToClipboard } from "../store/shareingSettings";
import { setY } from '../store/alertSettings';

import { appStyles } from '../styles/appStyles';

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;
const ScreenHeight = windowHeight - statusBarHeight;

const FontItem = ({ fontDisplayName, font }) => {
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const opacity = useSelector(state => state.colorParametrs.currentOpacity);
  const padding = useSelector(state => state.colorParametrs.currentPadding);
  const radius = useSelector(state => state.colorParametrs.currentRadius);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const alignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const fontsList = useSelector(state => state.textInput.fontsList);
  const enteredText = useSelector(state => state.textInput.enteredText);

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
    if (statusFont === 'free') {
      dispatch(pressFreeFontItem());
      makeCopyToClipboard();
    } if (statusFont === 'premium') {
      dispatch(pressPremiumFontItem());
      dispatch(premiumAlertShow());
    }
  };

  const setCoorAlert = () => {
    viewShotRef.current.measure( ( fx, fy, width, height, px, py) => {
      const fontItemY = py;
      const fontItemHeight = height;
      let y = fontItemY - statusBarHeight;
      const topScreentRest = ScreenHeight - (ScreenHeight - y);
      const bottomScreentRest = ScreenHeight - y - fontItemHeight;
      let newY;

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
    setCoorAlert();
    dispatch(altSharingItemModalShow());
    if (statusFont === 'free') {
      dispatch(pressFreeFontItem());
    } if (statusFont === 'premium') {
      dispatch(pressPremiumFontItem());
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
}

export default FontItem;
