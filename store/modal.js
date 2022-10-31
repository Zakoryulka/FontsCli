import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    infoModalVisible: false,
    showMoreModalVisible: false,
    colorModalShow: false,
    fontSettingsModalShow: false,
    cPickerBGVisible: false,
    cPickerFontColorVisible: false,
    pastInStoryNotifVisible: false,
    altSharingItemModalVisible: false
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
    openFontSettingsModal: (state) => {
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
    pastInStoryNotifShow: (state) => {
      state.pastInStoryNotifVisible = true;

    },
    pastInStoryNotifHide: (state) => {
      state.pastInStoryNotifVisible = false;
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
  pastInStoryNotifShow,
  pastInStoryNotifHide,
  altSharingItemModalShow,
  altSharingItemModalHide
} = modalSlice.actions;
export default modalSlice.reducer;
