import { Pressable } from "react-native";

import { appStyles } from '../styles/appStyles';

const ColorPickerButton = ({buttonBgColor, onPressAction}) => {
  return (
    <Pressable
      style={[{backgroundColor: buttonBgColor}, appStyles.colorPickerButton]}
      pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 10 }}
      onPress={onPressAction}
    />
  )
};

export default ColorPickerButton;
