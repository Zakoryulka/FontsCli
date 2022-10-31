import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Pressable, PermissionsAndroid, Platform, NativeModules } from 'react-native';
// import ViewShot, { captureScree, captureRef } from "react-native-view-shot";
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';

import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFetchBlob from 'rn-fetch-blob';
// import ImgToBase64 from 'react-native-image-base64';
import Clipboard, {useClipboard} from '@react-native-clipboard/clipboard';

import { pastInStoryNotifShow, altSharingItemModalShow } from "../store/modal";
import { setImageURI, copyToClipboard } from "../store/shareingSettings";

const { CopyImgToClipboardModule } = NativeModules;

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
  const dispatch = useDispatch();

//  // запрос разрешения на Android
//   async function hasAndroidPermission() {
//     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

//     const hasPermission = await PermissionsAndroid.check(permission);
//     if (hasPermission) {
//       return true;
//     }

//     const status = await PermissionsAndroid.request(permission);
//     return status === 'granted';
//   }

//   async function savePicture() {
//     try {
//       if (Platform.OS === "android" && !(await hasAndroidPermission())) {
//         return;
//       }

//       const imageURI = await captureRef(viewShotRef, {
//         format: 'png',
//         quality: 1
//       });
//       await CameraRoll.save(imageURI, 'photo');
//     } catch(err) {
//       console.log(err);
//     }
//   };

  // const handleDownload = async () => {
  //   const imageURI = await captureRef(viewShotRef, {
  //     format: 'png',
  //     quality: 1
  //   });

  //   const task =  RNFetchBlob.config({
  //     fileCache: true,
  //     appendExt: 'png',
  //   })
  //     .fetch('GET', imageURI)
  //     .then((res) => {
  //       // the temp file path
  //       console.log('The file saved to ', res.path());
  //       console.log(res);
  //     })
  //     .catch(error => console.log(error));

  //   await task;
  // }

  // const handleDownload = async () => {
  //   const imageURI = await captureRef(viewShotRef, {
  //     format: 'png',
  //     quality: 1
  //   });

  //   return RNFetchBlob.config({
  //     fileCache: true,
  //     appendExt: 'png',
  //   })
  //     .fetch('GET', imageURI)
  //     .then(res => {
  //       let status = res.info().status;

  //       if (status == 200) {
  //         return res.path();
  //       } else {
  //         Promise.reject();
  //       }
  //     })
  //     .catch(errorMessage => {
  //       Promise.reject(errorMessage);
  //     });
  //   };



  // --------Correct Function!!!--------
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
      // onPress={async () => {
      //   // await savePicture();
      //   // await writeImageToClipboard();
      //   // await captureViewShot();

      //   // dispatch(pastInStoryNotifShow());
      // }}
      onPress={async() => {
        if (Platform.OS = 'android') {
          await setNewImageURI();
          dispatch(copyToClipboard());
        }
        dispatch(pastInStoryNotifShow());
      }}

      onLongPress={() => {
        setNewImageURI();
        dispatch(altSharingItemModalShow());
      }}
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
