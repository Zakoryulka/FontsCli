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
} = modalSlice.actions;
export default modalSlice.reducer;
