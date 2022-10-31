
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
} from "../store/modal";
import { copyToClipboard, saveToPhoto
} from "../store/shareingSettings";

import { appStyles } from "../styles/appStyles";

const AltSharingItemModal = () => {
  const altSharingItemModalVisible = useSelector(state => state.modals.altSharingItemModalVisible);
  const dispatch = useDispatch();

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
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={() => dispatch(altSharingItemModalHide())}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[appStyles.modalWrapper, appStyles.altSharingModal]}>
        <View style={appStyles.modalCloseHandler} />

        <View
          style={appStyles.ModalBtnsContainer}
        >
          <Pressable
            onPress={() => {
              dispatch(copyToClipboard());
              dispatch(altSharingItemModalHide());
              dispatch(notifyShow({notifyText: 'copy'}));
            }}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Copy
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={() => {
              saveToPhotoHandler();
              dispatch(altSharingItemModalHide());
            }}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              Save to Photo
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

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
