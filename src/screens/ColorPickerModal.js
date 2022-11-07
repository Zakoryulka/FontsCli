import { Modal, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import ButtonIcon from '../components/ButtonIcon';
import { appStyles } from "../styles/appStyles";

const ColorPickerModal = (props) => {
  const {modalVisible,
    onChangeColor,
    onCloseModal,
    startColor} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >

      <View style={appStyles.colorPickerModal}>
        <View style={appStyles.colorPickerCloseBtnContainer}>
          <ButtonIcon
            icon={'close'}
            onPress={onCloseModal}
          />
        </View>
        <TriangleColorPicker
          style={appStyles.colorPicker}
          onColorChange={newColor => {
            onChangeColor(fromHsv(newColor))
          }}
          defaultColor={startColor}
          hideControls={true}
        />
      </View>

    </Modal>
  )
};

export default ColorPickerModal;
