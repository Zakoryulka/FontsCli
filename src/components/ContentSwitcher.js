import { View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Sizes } from '../constants/stylesConst';

import { showFonts, showSketchs } from "../store/content";

import { appStyles } from "../styles/appStyles";

const ContentSwitcher = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const fontsVisible = useSelector(state => state.content.fontsVisible);
  const sketchsVisible = useSelector(state => state.content.sketchsVisible);

  const dispatch = useDispatch();

  const ContentSwitcherBtn = ({children, onPress, visible, position}) => {
    return (
      <Pressable
        style={[
          appStyles.contentSwitcherBtn,
          {
            backgroundColor: visible ? colorsStyle.btnActive : colorsStyle.btn1,
            borderTopLeftRadius: position === "left" ? Sizes.mainBtnRadius : 0,
            borderBottomLeftRadius: position === "left" ? Sizes.mainBtnRadius : 0,
            borderTopRightRadius: position === "right" ? Sizes.mainBtnRadius : 0,
            borderBottomRightRadius: position === "right" ? Sizes.mainBtnRadius : 0,
          }
        ]}
        onPress={onPress}
      >
        <Text style={[appStyles.contentSwitcherBtnLabel, {color: colorsStyle.text}]}>
          {children}
        </Text>
      </Pressable>
    )
  };

  const onPressFontsBtnHandler = () => {
    dispatch(showFonts());
  };

  const onPressSketchsBtnHandler = () => {
    dispatch(showSketchs());
  };

  return (
    <View style={appStyles.contentSwitcherBtns}>
      <ContentSwitcherBtn
        onPress={onPressFontsBtnHandler}
        position={"left"}
        visible={fontsVisible}
      >
        Fonts
      </ContentSwitcherBtn>
      <View />
      <ContentSwitcherBtn
        onPress={onPressSketchsBtnHandler}
        position={"right"}
        visible={sketchsVisible}
      >
        Sketchs
      </ContentSwitcherBtn>
    </View>
  )
};

export default ContentSwitcher;
