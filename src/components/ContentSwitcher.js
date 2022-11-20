import { View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { showFonts, showSketchs, showArts } from "../store/content";

import { appStyles } from "../styles/appStyles";

const ContentSwitcher = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const dispatch = useDispatch();

  const ContentSwitcherBtn = ({children, onPress}) => {
    return (
      <Pressable
        style={appStyles.contentSwitcherBtn}
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

  const onPressArtsBtnHandler = () => {
    dispatch(showArts());
  };

  return (
    <View style={appStyles.contentSwitcherBtns}>
      <ContentSwitcherBtn
        onPress={onPressFontsBtnHandler}
      >
        Fonts
      </ContentSwitcherBtn>
      <ContentSwitcherBtn
        onPress={onPressSketchsBtnHandler}
      >
        Sketchs
      </ContentSwitcherBtn>
      <ContentSwitcherBtn
        onPress={onPressArtsBtnHandler}
      >
        Arts
      </ContentSwitcherBtn>
    </View>
  )
};

export default ContentSwitcher;
