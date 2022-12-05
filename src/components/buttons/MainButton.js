import { useSelector } from 'react-redux';
import { Pressable, View } from 'react-native';
import { Sizes } from '../../constants/stylesConst';

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
    <View
      style={{
        borderTopLeftRadius: topLeftRadius ? Sizes.mainBtnRadius : 0,
        borderTopRightRadius: topRightRadius ? Sizes.mainBtnRadius : 0,
        borderBottomLeftRadius: bottomLeftRadius ? Sizes.mainBtnRadius : 0,
        borderBottomRightRadius: bottomRightRadius ? Sizes.mainBtnRadius : 0,
        flex: row ? 1 : null,
        overflow: 'hidden'
      }}
    >
      <Pressable
        style={{backgroundColor: colorsStyle.btn1}}
        android_ripple={{color: colorsStyle.btnActive}}
        onPress={onPress}
        hitSlop = {Sizes.hitSlopPressable}
      >
          {children}
      </Pressable>
    </View>
  )
};

export default MainButton;
