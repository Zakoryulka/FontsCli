import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { closeShowMoreModal } from "../store/modal";
import { openInfoModal } from "../store/modal";
import { useLinks } from "../hooks/useLinks";

import { appStyles } from "../styles/appStyles";

const ShowMoreModal = () => {
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);
  const { addRate, upgrateToPro, shareApp, mailToUs } = useLinks();
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMoreModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {() => dispatch(closeShowMoreModal())}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={() => dispatch(closeShowMoreModal())}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[appStyles.modalWrapper, appStyles.infoModal]}>
        <View style={appStyles.modalCloseHandler} />
        <Pressable
          style={appStyles.showMoreModalBtn}
          onPress={upgrateToPro}
        >
          <Text style={appStyles.showMoreModalBtnLabel}>
            💎  Upgrate to pro
          </Text>
        </Pressable>

        <Pressable
          style={appStyles.showMoreModalBtn}
          onPress={() => dispatch(openInfoModal())}
        >
          <Text style={appStyles.showMoreModalBtnLabel}>
            ℹ️  How it works
          </Text>
        </Pressable>

        <View
          style={appStyles.ModalBtnsContainer}
        >
          <Pressable
            onPress={addRate}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              🌟  Rate App
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={shareApp}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              📢  Share App
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={mailToUs}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              ✉️  Write to us
            </Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  )
};

export default ShowMoreModal;
