
import { Text, Pressable } from "react-native";
import { Sizes } from "../constants/stylesConst";

import { appStyles } from "../styles/appStyles";

const ResetButton = ({onPress}) => {

  return (
    <Pressable
      style={appStyles.buttonTextWrapper}
      onPress={onPress}
      hitSlop = {Sizes.hitSlopPressable}
    >
      <Text style={appStyles.resetButtonText}>Reset</Text>
    </Pressable>
  )
};

export default ResetButton;
