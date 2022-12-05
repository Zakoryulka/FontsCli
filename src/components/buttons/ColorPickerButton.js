import { useSelector } from "react-redux";
import { Pressable, View, ImageBackground, Image } from "react-native";
import { Sizes } from "../../constants/stylesConst";

import { appStyles } from '../../styles/appStyles';

const ColorPickerButton = ({buttonBgColor, onPressAction}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  return (
    <Pressable
      style={[
        appStyles.colorPickerButton]}
      onPress={onPressAction}
      hitSlop = {Sizes.hitSlopPressable}
    >
      <ImageBackground
        source={require('../../assets/icons/colorRound.png')}
        resizeMode="cover"
        style={appStyles.colorPickerButtonBG}
      >
        <View style={[
          {
            backgroundColor: buttonBgColor,
            borderColor: colorsStyle.primaryBg
          },
          appStyles.colorPickerColorRnd ]}
        />
      </ImageBackground>
    </Pressable>
  )
};

export default ColorPickerButton;
