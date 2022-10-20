import { useRef } from 'react';
import { useSelector } from "react-redux";
import { Text, View, Pressable, PermissionsAndroid, Platform } from 'react-native';
// import ViewShot, { captureScree, captureRef } from "react-native-view-shot";
// import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';

import { CameraRoll } from "@react-native-camera-roll/camera-roll";

import { appStyles } from '../styles/appStyles';

const FontItem = (props) => {
  const {title, font} = props;
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const opacity = useSelector(state => state.colorParametrs.currentOpacity);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const alignText = useSelector(state => state.aligmentParametrs.currentAlignText);

  const viewShotRef = useRef();

 // запрос разрешения на Android
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture() {
    try {
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }

      const imageURI = await captureRef(viewShotRef, {
        format: 'png',
        quality: 1
      });
      await CameraRoll.save(imageURI, 'photo');
    } catch(err) {
      console.log(err);
    }
  };

  // const captureViewShot = async () => {
  //   try {
  //     const imageURI = await captureRef(viewShotRef, {
  //       format: 'png',
  //       quality: 1
  //     });
  //     await Share.open({url: imageURI});
  //     console.log(imageURI);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }


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
      onPress={async () => {
        await savePicture();
      }}
      style={{backgroundColor: 'transparent'}}
    >
      <View
        ref={viewShotRef}
        collapsable={false}
        // options={{ fileName: 'Image', format: "png", quality: 1.0, result: 'base64' }}
        // options={{ height: 30, width: 100}}
        style={[
          {
            backgroundColor: bg,
            opacity: opacity,
            alignSelf: alignSelf,
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
