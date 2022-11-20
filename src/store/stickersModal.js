import { createSlice } from "@reduxjs/toolkit";

const stickersModalSlice = createSlice({
  name: 'stickersModal',
  initialState: {
    stickersVisible: true,
    artsVisible: false,
    stickersSettingsVisible: false,
  },
  reducers: {
    openStickersList: (state) => {
      state.infoModalVisible = true;
    },
    closeStickersList: (state) => {
      state.infoModalVisible = false;
    },
    openArtsList: (state) => {
      state.showMoreModalVisible = true;
    },
    closeArtsList: (state) => {
      state.showMoreModalVisible = false;
    },
    openStickersSettings: (state) => {
      state.colorModalShow = true;
      state.fontSettingsModalShow = false;
    },
    closeStickersSettings: (state) => {
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
    openStickersModal: (state) => {
      state.stickersModalVisible = true;
    },
    closeStickersModal: (state) => {
      state.stickersModalVisible = false;
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
  openStickersModal,
  closeStickersModal
} = stickersModalSlice.actions;
export default stickersModalSlice.reducer;
