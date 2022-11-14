import { useSelector } from 'react-redux';
import { Pressable } from 'react-native';
import { Sizes } from '../constants/stylesConst';

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
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  return (
    <Pressable
      style={({ pressed }) => [
        { borderTopLeftRadius: topLeftRadius ? Sizes.mainBtnRadius : 0,
          borderTopRightRadius: topRightRadius ? Sizes.mainBtnRadius : 0,
          borderBottomLeftRadius: bottomLeftRadius ? Sizes.mainBtnRadius : 0,
          borderBottomRightRadius: bottomRightRadius ? Sizes.mainBtnRadius : 0,
          backgroundColor: !pressed ? colorsStyle.btn1 : colorsStyle.btnActive,
          flex: row ? 1 : null
        }
      ]}
      onPress={onPress}
      hitSlop = {Sizes.hitSlopPressable}
    >
        {children}
    </Pressable>
  )
};

export default MainButton;
