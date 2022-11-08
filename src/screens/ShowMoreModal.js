import { View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

import MainButton from '../components/MainButton';
import { modalsHandlers } from '../handlers/modalsHandlers';
import { useLinks } from "../hooks/useLinks";

import { appStyles } from "../styles/appStyles";

const ShowMoreModal = () => {
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);
  const { addRate,
    upgrateToPro,
    shareApp,
    mailToUs
  } = useLinks();
  const {pressInfoBtnHandler, closeShowMoreHandler } = modalsHandlers();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMoreModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {closeShowMoreHandler}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={closeShowMoreHandler}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[appStyles.modalWrapper, appStyles.infoModal]}>
        <View style={appStyles.modalCloseHandler} />

        <View style={[appStyles.ModalBtnsContainer, {marginBottom: 35}]}>
          <MainButton
            onPress={upgrateToPro}
            topLeftRadius
            topRightRadius
            bottomLeftRadius
            bottomRightRadius
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              💎  Upgrate to pro
            </Text>
          </MainButton>
        </View>

        <View style={[appStyles.ModalBtnsContainer, {marginBottom: 35}]}>
          <MainButton
            onPress={pressInfoBtnHandler}
            topLeftRadius
            topRightRadius
            bottomLeftRadius
            bottomRightRadius
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              ℹ️  How it works
            </Text>
          </MainButton>
        </View>

        <View style={appStyles.ModalBtnsContainer}>
          <MainButton
            onPress={addRate}
            topLeftRadius
            topRightRadius
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              🌟  Rate App
            </Text>
          </MainButton>

          <View style={appStyles.showMoreModalBtnDivider} />

          <MainButton
            onPress={shareApp}

          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              📢  Share App
            </Text>
          </MainButton>

          <View style={appStyles.showMoreModalBtnDivider} />

          <MainButton
            onPress={mailToUs}
            bottomLeftRadius
            bottomRightRadius
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              ✉️  Write to us
            </Text>
          </MainButton>
        </View>
      </View>
    </Modal>
  )
};

export default ShowMoreModal;
