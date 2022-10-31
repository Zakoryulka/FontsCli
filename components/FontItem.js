import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Pressable, Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { notifyShow, altSharingItemModalShow } from "../store/modal";
import { setImageURI, copyToClipboard } from "../store/shareingSettings";

import { appStyles } from '../styles/appStyles';

const FontItem = (props) => {
  const {title, font} = props;
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

  const viewShotRef = useRef();
  const dispatch = useDispatch();

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

  return (
    <Pressable
      style={{backgroundColor: 'transparent'}}
      onPress={async() => {
        if (Platform.OS = 'android') {
          await setNewImageURI();
          dispatch(copyToClipboard());
        }
        dispatch(notifyShow({notifyText: 'copy'}));
      }}

      onLongPress={() => {
        setNewImageURI();
        dispatch(altSharingItemModalShow());
      }}
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
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default FontItem;
