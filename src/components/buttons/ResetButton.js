
import { Text, Pressable } from "react-native";
import { Sizes } from "../../constants/stylesConst";

import { appStyles } from "../../styles/appStyles";

const ResetButton = ({onPress}) => {

  return (
    <Pressable
      style={appStyles.buttonTextWrapper}
      onPress={onPress}
      hitSlop = {Sizes.hitSlopPressable}
    >
      {({pressed}) => (
        <Text style={pressed
          ? [appStyles.resetButtonText, appStyles.resetButtonPressed]
          :  appStyles.resetButtonText}
        >
          Reset
        </Text>
      )}
    </Pressable>
  )
};

export default ResetButton;
