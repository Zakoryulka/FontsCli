import { useSelector } from 'react-redux';
import { Modal, View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';

import ButtonIcon from '../../components/buttons/ButtonIcon';
import { appStyles } from "../../styles/appStyles";

const ColorPickerModal = (props) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const {modalVisible,
    onChangeColor,
    onCloseModal,
    startColor
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >

      <View style={[
        appStyles.colorPickerModal,
        {backgroundColor: colorsStyle.primaryBg}
        ]}
      >
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
