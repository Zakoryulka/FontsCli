import { View, Modal, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
// import Modal from "react-native-modal";

import { modalsHandlers } from '../handlers/modalsHandlers';
import StickersModalHeader from '../components/headers/StickersModalHeader';
import SketchsFooter from '../components/footers/SketchsFooter';
// import SketchesList from '../components/sketchesList/sketchesList';
import ButtonIcon from '../components/ButtonIcon';

import { appStyles } from "../styles/appStyles";

const StickersModal = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const stickersModalVisible = useSelector(state => state.modals.stickersModalVisible);

  const dispatch = useDispatch();

  const { closeStickersModalHandler, pressChangeColorTheme } = modalsHandlers();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={stickersModalVisible}
    >
      <View style={[
        appStyles.stickersModalWrapper,
        {backgroundColor: colorsStyle.primaryBg1}
      ]}>

        <StickersModalHeader />
        {/* <SketchesList /> */}
        <SketchsFooter />

      </View>
    </Modal>
  )
};

export default StickersModal;
