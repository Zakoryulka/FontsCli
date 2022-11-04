import { useRef } from 'react';
import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Dimensions
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { altSharingItemModalHide,
  notifyShow,
  premiumAlertShow
} from "../store/modal";
import { copyToClipboard, saveToPhoto
} from "../store/shareingSettings";
import { Sizes } from '../constants/stylesConst';


import { appStyles } from "../styles/appStyles";

const AltSharingItemModal = () => {
  const altSharingItemModalVisible = useSelector(state => state.modals.altSharingItemModalVisible);
  const fontPremiumItemPressed = useSelector(state => state.modals.fontPremiumItemPressed)
  const currentAlignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const y = useSelector(state => state.alertSettings.y);
  const dispatch = useDispatch();
  const modalContentRef = useRef();

  const windowWidth = Dimensions.get('window').width;

  async function hasAndroidPermission() {

    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function saveToPhotoHandler() {
    try {
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
      dispatch(saveToPhoto());
      dispatch(notifyShow({notifyText: 'save'}));
    } catch(err) {
      console.log(err);
    }
  }

  const setMarginLeft = () => {
    switch (currentAlignText) {
      case 'left':
        return windowWidth/10;
      case 'center':
        return (windowWidth - Sizes.altSharingModalWidth)/2;
      case 'right':
        return 'auto';
      default: 'auto';
    }
  }
  const setMarginRight = () => {
    switch (currentAlignText) {
      case 'left':
        return 'auto';
      case 'center':
        return (windowWidth - Sizes.altSharingModalWidth)/2;
      case 'right':
        return windowWidth/10;
      default: 'auto';
    }
  }

  const onPressSaveToPhotoHandler = () => {
    dispatch(altSharingItemModalHide());
    if (!fontPremiumItemPressed) {
      saveToPhotoHandler();
      dispatch(notifyShow({notifyText: 'save'}));
    } else {
      dispatch(premiumAlertShow());
    }
  };

  const onPressCopyHandler = () => {
    dispatch(altSharingItemModalHide());
    if (!fontPremiumItemPressed) {
      dispatch(copyToClipboard());
      dispatch(notifyShow({notifyText: 'copy'}));
    } else {
      dispatch(premiumAlertShow());
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={altSharingItemModalVisible}
      // swipeDirection={'down'}
      onSwipeMove = {() => dispatch(altSharingItemModalHide())}
      style={appStyles.altSharingModal}
      customBackdrop = {
        <TouchableWithoutFeedback
          onPress={() => dispatch(altSharingItemModalHide())}
          style={{flex: 1, backgroundColor: 'green',}}
        >
          <View style={{flex: 1, backgroundColor: 'red'}} />
        </TouchableWithoutFeedback>
      }
      backdropColor={'black'}
    >
      <View
        ref={modalContentRef}
        style={[
          appStyles.altSharingModalContainer,
          {
            top: y,
            // left: 'auto',
            // right: 'auto',
            // right: '100%'
            left: setMarginLeft(),
            right: setMarginRight()
            // marginLeft: "auto",
            // marginRight: "auto"
          }
          ]}
      >

        <View
          style={appStyles.ModalBtnsContainer}
        >
          <Pressable
            onPress={onPressCopyHandler}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Copy
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={onPressSaveToPhotoHandler}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Save to Photo
            </Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  )
};

export default AltSharingItemModal;
