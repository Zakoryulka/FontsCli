import { createSlice } from "@reduxjs/toolkit";
import { Keyboard } from "react-native";

const messageCopy = 'Past in Story';
const messageSave = 'Saved in Photos'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    infoModalVisible: false,
    showMoreModalVisible: false,
    colorModalShow: false,
    fontSettingsModalShow: false,
    cPickerBGVisible: false,
    cPickerFontColorVisible: false,
    notifyVisible: false,
    altSharingItemModalVisible: false,
    notifyMessage: ''
  },
  reducers: {
    openInfoModal: (state) => {
      state.infoModalVisible = true;
    },
    closeInfoModal: (state) => {
      state.infoModalVisible = false;
    },
    openShowMoreModal: (state) => {
      state.showMoreModalVisible = true;
    },
    closeShowMoreModal: (state) => {
      state.showMoreModalVisible = false;
    },
    openColorModal: (state) => {
      state.colorModalShow = true;
      state.fontSettingsModalShow = false;
      console.log('Press openColorModal: colorModalShow === ' + state.colorModalShow);
    },
    closeColorModal: (state) => {
      state.colorModalShow = false;
      console.log('Press closeColorModal: colorModalShow === ' + state.colorModalShow);
    },
    openFontSettingsModal:  (state) => {
      state.fontSettingsModalShow = true;
      state.colorModalShow = false;
      console.log('Press openFontSettingsModal: fontSettingsModalShow === ' + state.fontSettingsModalShow);

    },
    closeFontSettingsModal: (state) => {
      state.fontSettingsModalShow = false;
      console.log('Press closeFontSettingsModal: fontSettingsModalShow === ' + state.fontSettingsModalShow);
    },
    cPickerBGShow: (state) => {
      state.cPickerBGVisible = true;
    },
    cPickerBGHide: (state) => {
      state.cPickerBGVisible = false;
    },
    cPickerFontColorShow: (state) => {
      state.cPickerFontColorVisible = true;
    },
    cPickerFontColorHide: (state) => {
      state.cPickerFontColorVisible = false;
    },
    notifyShow: (state, action) => {
      if (action.payload.notifyText === 'copy') {
        state.notifyMessage = messageCopy;
      } else if (action.payload.notifyText === 'save') {
        state.notifyMessage = messageSave;
      }
      state.notifyVisible = true;
    },
    notifyHide: (state) => {
      state.notifyVisible = false;
      state.notifyMessage = '';
    },
    altSharingItemModalShow: (state) => {
      state.altSharingItemModalVisible = true;
    },
    altSharingItemModalHide: (state) => {
      state.altSharingItemModalVisible = false;
    }

  }
});

export const {
  openInfoModal,
  closeInfoModal,
  openShowMoreModal,
  closeShowMoreModal,
  openColorModal,
  closeColorModal,
  openFontSettingsModal,
  closeFontSettingsModal,
  cPickerBGShow,
  cPickerBGHide,
  cPickerFontColorShow,
  cPickerFontColorHide,
  notifyShow,
  notifyHide,
  altSharingItemModalShow,
  altSharingItemModalHide
} = modalSlice.actions;
export default modalSlice.reducer;
