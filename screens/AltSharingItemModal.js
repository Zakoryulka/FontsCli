import { useRef, useState } from 'react';
import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  PermissionsAndroid
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { altSharingItemModalHide,
  notifyShow,
  premiumAlertShow
} from "../store/modal";
import { copyToClipboard, saveToPhoto
} from "../store/shareingSettings";


import { appStyles } from "../styles/appStyles";

const AltSharingItemModal = () => {
  const altSharingItemModalVisible = useSelector(state => state.modals.altSharingItemModalVisible);
  const y = useSelector(state => state.alertSettings.y);
  const dispatch = useDispatch();
  const modalContentRef = useRef();
  const fontPremiumItemPressed = useSelector(state => state.modals.fontPremiumItemPressed);

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
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={altSharingItemModalVisible}
      swipeDirection={'down'}
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

      //test like an Alert 2:
      backdropColor={'black'}
    >
      <View
        ref={modalContentRef}
        style={[
          {
            top: y
          },
          appStyles.altSharingModalContainer
          ]}
      >
        {/* <View style={appStyles.modalCloseHandler} /> */}

        <View
          style={appStyles.ModalBtnsContainer}
        >
          <Pressable
            onPress={() => {
              dispatch(altSharingItemModalHide());
              if (!fontPremiumItemPressed) {
                dispatch(copyToClipboard());
                dispatch(notifyShow({notifyText: 'copy'}));
              } else {
                dispatch(premiumAlertShow());
              }
            }}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Copy
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={() => {
              dispatch(altSharingItemModalHide());
              if (!fontPremiumItemPressed) {
                saveToPhotoHandler();
                dispatch(notifyShow({notifyText: 'save'}));
              } else {
                dispatch(premiumAlertShow());
              }
            }}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Save to Photo
            </Text>
          </Pressable>

          {/* <View style={appStyles.showMoreModalBtndevider} /> */}

          {/* <Pressable
            onPress={async() => {
              await ImgToBase64.getBase64String(imageURI)
              .then(base64String => {
                // Share.open({url: `data:image/png;base64,${base64Image}`});
                dispatch(shareToSocial({base64Img: `data:image/png;base64,${base64String}`}));
              })
              .catch(err => console.log('ok'));
            // Share.open({url: state.imageURI});

              // dispatch(shareToSocial());
              dispatch(altSharingItemModalHide());
            }}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Share
            </Text>
          </Pressable> */}

        </View>
      </View>
    </Modal>
  )
};

export default AltSharingItemModal;
