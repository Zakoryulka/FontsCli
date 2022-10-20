import { Modal, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
//https://www.npmjs.com/package/react-native-color-picker
import ButtonIcon from '../components/ButtonIcon';
import { appStyles } from "../styles/appStyles";

const ColorPickerModal = (props) => {
  const {modalVisible, onChangeColor, onCloseModal, currentColor} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >

      <View style={appStyles.colorPickerModal}>
        <ButtonIcon
          icon={'close'}
          onPress={onCloseModal}
        />
        <TriangleColorPicker
          style={appStyles.colorPicker}
          onColorChange={newColor => {
            onChangeColor(fromHsv(newColor))
          }}
          defaultColor={currentColor}
          hideControls={true}          // only for ColorPicker
          // sliderComponent={Slider}  // only for TriangleColorPicker
        />
      </View>

    </Modal>
  )
};

export default ColorPickerModal;
