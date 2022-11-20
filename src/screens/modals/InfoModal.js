import { View, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { closeInfoModal } from "../../store/modal";

import { appStyles } from '../../styles/appStyles';

const InfoModal = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);

  const dispatch = useDispatch();

  const closeInfoModalHandler = () => dispatch(closeInfoModal());

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={infoModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {closeInfoModalHandler}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={closeInfoModalHandler}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[
        appStyles.modalWrapper,
        appStyles.infoModal,
        {backgroundColor: colorsStyle.primaryBg}
      ]}>
        <View style={appStyles.modalCloseHandler} />
        <View style={appStyles.infoModalWrapper}>
          <View style={appStyles.infoModalLineWrapper}>
            <Pressable style={[appStyles.infoModalItem]}>
              <Text>123</Text>
            </Pressable>
            <Pressable style={appStyles.infoModalItem}>
              <Text>123</Text>
            </Pressable>
          </View>
          <View style={appStyles.infoModalLineWrapper}>
            <Pressable style={[appStyles.infoModalItem]}>
              <Text>123</Text>
            </Pressable>
            <Pressable style={appStyles.infoModalItem}>
              <Text>123</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default InfoModal;
