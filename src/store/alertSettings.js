import { createSlice } from "@reduxjs/toolkit";
import { appConts } from "../constants/appConst";

const alertSettingsSlice = createSlice({
  name: 'alertSettings',
  initialState: {
    notifyVisible: false,
    notifyMessage: '',
    altSharingItemModalVisible: false,
    fontPremiumItemPressed: false,
    premiumAlertVisible: false,
    rateAlertVisible: false,
    pressFontItemCounter: 1,
    y: null,
    xItem: null,
    yItem: null,
    widthItem: null,
    heightItem: null,
    activeFontDisplayName: '',
    activeFont: '',
    activeSvgID: null,

  },
  reducers: {
    notifyShow: (state, action) => {
      if (action.payload.notifyText === 'copy') {
        state.notifyMessage = appConts.messageCopy;
      } else if (action.payload.notifyText === 'save') {
        state.notifyMessage = appConts.messageSave;
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
    changeItemCounter: (state) => {
      if (state.pressFontItemCounter <= appConts.countOfAddRate) {
        state.pressFontItemCounter = state.pressFontItemCounter + 1;
      } else {
        state.pressFontItemCounter = 1;
      }
    },
    rateAlertShow: (state) => {
      state.rateAlertVisible = true;
      console.log("rateAlertShow" + state.rateAlertVisible);
    },
    rateAlertHide: (state) => {
      state.rateAlertVisible = false;
    },
    setY: (state, action) => {
      state.y = action.payload.y;
    },
    setXItem: (state, action) => {
      state.xItem = action.payload.xItem;
    },
    setYItem: (state, action) => {
      state.yItem = action.payload.yItem;
    },
    setWidthItem: (state, action) => {
      state.widthItem = action.payload.width;
    },
    setHeightItem: (state, action) => {
      state.heightItem = action.payload.height;
    },
    setActiveFontDisplayName: (state, action) => {
      state.activeFontDisplayName = action.payload.displayName;
    },
    setActiveFont: (state, action) => {
      state.activeFont = action.payload.font;
    },
    setActiveSvgID: (state, action) => {
      state.activeSvgID = action.payload.svgID;
      console.log(state.activeSvgID);
    },
  }
});

export const {
  notifyShow,
  notifyHide,
  altSharingItemModalShow,
  altSharingItemModalHide,
  pressFreeFontItem,
  pressPremiumFontItem,
  premiumAlertShow,
  premiumAlertHide,
  changeItemCounter,
  rateAlertShow,
  rateAlertHide,
  setY,
  setXItem,
  setYItem,
  setWidthItem,
  setHeightItem,
  setActiveFontDisplayName,
  setActiveFont,
  setActiveSvgID
} = alertSettingsSlice.actions;
export default alertSettingsSlice.reducer;
