import { View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Sizes } from '../constants/stylesConst';

import { showFonts, showSketchs, showFavorites } from "../store/content";

import { appStyles } from "../styles/appStyles";

const ContentSwitcher = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const appIsPremium = useSelector(state => state.content.appIsPremium);
  const favoritesVisible = useSelector(state => state.content.favoritesVisible);
  const fontsVisible = useSelector(state => state.content.fontsVisible);
  const sketchsVisible = useSelector(state => state.content.sketchsVisible);

  const dispatch = useDispatch();

  const ContentSwitcherBtn = ({children, onPress, visible, position}) => {
    return (
      <View
        style={[
          appStyles.contentSwitcherOuterBtn,
          {
            borderTopLeftRadius: position === "left" ? Sizes.mainBtnRadius : 0,
            borderBottomLeftRadius: position === "left" ? Sizes.mainBtnRadius : 0,
            borderTopRightRadius: position === "right" ? Sizes.mainBtnRadius : 0,
            borderBottomRightRadius: position === "right" ? Sizes.mainBtnRadius : 0,
            overflow: 'hidden'
          }
        ]}
      >
        <Pressable
          style={[
            appStyles.contentSwitcherInnerBtn,
            {
              backgroundColor: visible ? colorsStyle.btnActive : colorsStyle.btn1,
            }
          ]}
          android_ripple={{color: colorsStyle.btnActive}}
          onPress={onPress}
        >
          <Text style={[appStyles.contentSwitcherBtnLabel, {color: colorsStyle.text}]}>
            {children}
          </Text>
        </Pressable>
      </View>
    )
  };

  const onPressFavoritesBtnHandler = () => {
    dispatch(showFavorites());
  };

  const onPressFontsBtnHandler = () => {
    dispatch(showFonts());
  };

  const onPressSketchsBtnHandler = () => {
    dispatch(showSketchs());
  };

  const contentSwitcherFavoritesBtn = appIsPremium
    ? <>
        <ContentSwitcherBtn
          onPress={onPressFavoritesBtnHandler}
          position={"left"}
          visible={favoritesVisible}
        >
          Favorites
        </ContentSwitcherBtn>
        <View />
      </>
    : null;

  return (
    <View style={appStyles.contentSwitcherBtns}>
      {contentSwitcherFavoritesBtn}
      <ContentSwitcherBtn
        onPress={onPressFontsBtnHandler}
        position={appIsPremium ? "center" : 'left'}
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
