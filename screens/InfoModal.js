import { Modal, View, Pressable, Text } from 'react-native';
import { appStyles } from "../styles/appStyles";
import { useSelector, useDispatch } from "react-redux";
import { closeColorModal,
         cPickerFontColorShow,
         cPickerBGShow,
 } from "../store/modal";

const InfoModal = () => {
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={infoModalVisible}
      style={appStyles.infoModal}
    >

      <View style={appStyles.infoModal}>
        <View style={appStyles.infoModalWrapper}>
          <Pressable style={[appStyles.infoModalItem]}>
            <Text>123</Text>
          </Pressable>
          <Pressable style={appStyles.infoModalItem}>
            <Text>123</Text>
          </Pressable>
        </View>
        <View style={appStyles.infoModalWrapper}>
          <Pressable style={[appStyles.infoModalItem]}>
            <Text>123</Text>
          </Pressable>
          <Pressable style={appStyles.infoModalItem}>
            <Text>123</Text>
          </Pressable>
        </View>
      </View>

    </Modal>
  )
};

export default InfoModal;
