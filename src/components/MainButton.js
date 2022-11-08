import { Pressable } from 'react-native';

import { Sizes, Colors } from '../constants/stylesConst';

import { appStyles } from "../styles/appStyles";

const MainButton = (props) => {
  const {
    children,
    onPress,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius,
    row
  } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        { borderTopLeftRadius: topLeftRadius ? Sizes.mainBtnRadius : 0,
          borderTopRightRadius: topRightRadius ? Sizes.mainBtnRadius : 0,
          borderBottomLeftRadius: bottomLeftRadius ? Sizes.mainBtnRadius : 0,
          borderBottomRightRadius: bottomRightRadius ? Sizes.mainBtnRadius : 0,
          backgroundColor: !pressed ? Colors.btn1 : Colors.btnActive,
          flex: row ? 1 : null
        },
        // appStyles.MainButton
      ]}
      onPress={onPress}
      hitSlop = {Sizes.hitSlopPressable}
    >
        {children}
    </Pressable>
  )
};

export default MainButton;
