import { NativeModules, Platform } from 'react-native';
import { createSlice } from "@reduxjs/toolkit";
const { CopyImgToClipboardModule } = NativeModules;
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

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
    }
  }
});

export const {
  setImageURI, copyToClipboard, saveToPhoto
} = shareingSettingsSlice.actions;
export default shareingSettingsSlice.reducer;
