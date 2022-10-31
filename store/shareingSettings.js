import { NativeModules, Platform } from 'react-native';
import { createSlice } from "@reduxjs/toolkit";
const { CopyImgToClipboardModule } = NativeModules;
import Share from 'react-native-share';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

//test
// import ImgToBase64 from 'react-native-image-base64';

const shareingSettingsSlice = createSlice({
  name: 'shareingSettings',
  initialState: {
    imageURI: null,
  },
  reducers: {
    setImageURI: (state, action) => {
      state.imageURI = action.payload.newImageURI;
    },
    copyToClipboard: (state) => {
      if (Platform.OS = 'android') {
        CopyImgToClipboardModule.makeCopy(state.imageURI, (err, message) => {
          if (err) return console.log(err)
          console.log('Android: ' + message);
        });
        console.log(state.imageURI);
      }
    },
    saveToPhoto: (state) => {
      CameraRoll.save(state.imageURI, 'photo');
      console.log('saveToPhoto')
    }

    // shareToSocial: async (state) => {         // Исправить!!! сделать в PNG
    //   await ImgToBase64.getBase64String(state.imageURI)
    //     .then(base64String => {
    //       // console.log(base64String);
    //       // Clipboard.setImage(`data:image/jpeg;base64,${base64Image}`);
    //       Share.open({url: `data:image/png;base64,${base64Image}`});
    //       // console.log('setImage');
    //       // console.log(base64String);
    //     })
    //     .catch(err => console.log(err));
    //   // Share.open({url: state.imageURI});
    //   console.log(state.imageURI);
    // },

    // shareToSocial: (state, action) => {
    //   Share.open({url: action.payload.base64Img});
    // }

  }
});

export const {
  setImageURI, copyToClipboard, saveToPhoto
  // shareToSocial
} = shareingSettingsSlice.actions;
export default shareingSettingsSlice.reducer;
