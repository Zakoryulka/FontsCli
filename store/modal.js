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
    notifyMessage: '',
    fontPremiumItemPressed: false,
    premiumAlertVisible: false
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
    },
    closeColorModal: (state) => {
      state.colorModalShow = false;
    },
    openFontSettingsModal:  (state) => {
      state.fontSettingsModalShow = true;
      state.colorModalShow = false;
    },
    closeFontSettingsModal: (state) => {
      state.fontSettingsModalShow = false;
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
    },
    pressFreeFontItem: (state) => {
      state.fontPremiumItemPressed = false;
    },
    pressPremiumFontItem: (state) => {
      state.fontPremiumItemPressed = true;
    },
    premiumAlertShow: (state) => {
      state.premiumAlertVisible = true;
    },
    premiumAlertHide: (state) => {
      state.premiumAlertVisible = false;
    },
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
  altSharingItemModalHide,
  pressFreeFontItem,
  pressPremiumFontItem,
  premiumAlertShow,
  premiumAlertHide
} = modalSlice.actions;
export default modalSlice.reducer;
