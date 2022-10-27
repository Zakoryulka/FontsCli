import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Pressable, PermissionsAndroid, Platform, NativeModules } from 'react-native';
// import ViewShot, { captureScree, captureRef } from "react-native-view-shot";
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';

import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFetchBlob from 'rn-fetch-blob';
// import ImgToBase64 from 'react-native-image-base64';
import Clipboard, {useClipboard} from '@react-native-clipboard/clipboard';

import { pastInStoryNotifShow } from "../store/modal";

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

  // async function savePicture() {
  //   try {
  //     if (Platform.OS === "android" && !(await hasAndroidPermission())) {
  //       return;
  //     }

  //     const imageURI = await captureRef(viewShotRef, {
  //       format: 'png',
  //       quality: 1
  //     });
  //     await CameraRoll.save(imageURI, 'photo');
  //   } catch(err) {
  //     console.log(err);
  //   }
  // };

  // const handleDownload = async () => {
  //   const imageURI = await captureRef(viewShotRef, {
  //     format: 'png',
  //     quality: 1
  //   });
  //   console.log(imageURI);

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

  // const [copiedText, setCopiedText] = useState('');

  // const copyToClipboard = () => {
  //   Clipboard.setString('hello world');
  // };

  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getString();
  //   setCopiedText(text);
  // };


  // const handleDownload = async () => {
  //   const imageURI = await captureRef(viewShotRef, {
  //     format: 'png',
  //     quality: 1
  //   });

    // console.log(RNFetchBlob.base64.encode(imageURI));
    // console.log(imageURI);
    // console.log(RNFetchBlob.fs.dirs.CacheDir);
    // console.log(RNFetchBlob.fs.dirs.DCIMDir);

    // const fs = RNFetchBlob.fs;
    // const base64 = RNFetchBlob.base64;
    // await RNFetchBlob.fs.writeFile(RNFetchBlob.fs.dirs.CacheDir, RNFetchBlob.base64.encode(imageURI), 'base64')
    //       .then((res) => {
    //     // the temp file path
    //     console.log('The file saved to ', res.path());
    //     console.log(res);
    //   })
    //   .catch(error => console.log(error));

  //   RNFetchBlob.fs.mv(imageURI, RNFetchBlob.fs.dirs.CacheDir)
  //   .then(() => {
  //     console.log('Image Moved');
  // }).catch((e)=>{      console.log("FAILED:= "+e.message) });

  // }

  // ++ шаринг в соцсети
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


  // const [text, setText] = useState('');
  // const [isURL, setIsURL] = useState(false);
  // const [data, setString] = useClipboard();
  // const [image, setImage] = useState(null);
  // const [imageString, setImageString] = useState('');

  // const checkStringType = async () => {
  //   const checkClipboard = await Clipboard.hasURL();
  //   setIsURL(checkClipboard);
  // };

  // const pasteImageAndroid = async () => {
  //   const base64 = await Clipboard.getImage();
  //   setImageString(base64);
  // };

  // useEffect(() => {
  //   checkStringType();
  // }, [data]);

  // useEffect(() => {
  //   if (Platform.OS === 'ios' || Platform.OS === 'android') {
  //     const listener = Clipboard.addListener(changeListener);

  //     return () => {
  //       listener.remove();
  //     };
  //   }
  // }, []);

  // const writeToClipboard = async () => {
  //   setString(text);
  //   console.log(`Copied to clipboard: ${text}`);
  // };

  // const writeImageToClipboard = async () => {

    // const imageURI = await captureRef(viewShotRef, {
    //   format: 'png',
    //   quality: 1
    // });
  // }

    // Clipboard.setString('12345');

  //   await ImgToBase64.getBase64String(imageURI)
  //     .then(base64String => {
  //       Clipboard.setImage(`data:image/jpeg;base64,${base64Image}`);
  //       console.log('setImage');
  //       console.log(base64String);
  //     })
  //     .catch(err => console.log(err));

  //   // const testImage = RNFetchBlob.base64.encode(imageURI);

  //   // Clipboard.setImage(RNFetchBlob.base64.encode(imageURI));
  // };

  // const getImage = async () => {
  //   if (await Clipboard.hasImage()) {
  //     const image = await Clipboard.getImagePNG();
  //     setImage(image);
  //   } else {
  //     console.warn('No image in clipboard');
  //   }
  // };


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

  const handleOnPress = async () => {
    const imageURI = await captureRef(viewShotRef, {
      format: 'png',
      quality: 1
    });
    await CopyImgToClipboardModule.makeCopy(imageURI);
  };

  return (
    <Pressable
      // onPress={async () => {
      //   // await savePicture();
      //   // await writeImageToClipboard();
      //   // await captureViewShot();

      //   // dispatch(pastInStoryNotifShow());
      // }}
      onPress={handleOnPress}
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
