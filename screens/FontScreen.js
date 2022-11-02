import { useDeferredValue, useEffect } from "react";

import {
  Text,
  View,
  SectionList,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { openInfoModal, openShowMoreModal,
  openColorModal, closeColorModal,
  openFontSettingsModal, closeFontSettingsModal,
  cPickerBGHide, cPickerFontColorHide,
} from "../store/modal";
import { changeBg, changeFontColor,
  setColorsValuesForSliders
} from "../store/colorParametrs";
import { setFontsValuesForSliders } from "../store/fontParametrs";
import { changeAlignSelf } from "../store/ aligmentParametrs";
import { setKeyboardVisible, setKeyboardNotVisible } from "../store/textInput";

import FontItem from "../components/FontItem";
import ButtonIcon from "../components/ButtonIcon";
import InfoModal from "./InfoModal";
import ShowMoreModal from "./ShowMoreModal";
import ColorModal from "./ColorModal";
import ColorPickerModal from "./ColorPickerModal";
import FontSettingsModal from "./FontSettingsModal";
import TextItemInput from "../components/TextItemInput";
import Notification from "../components/Notification";
import AltSharingItemModal from "./AltSharingItemModal";

import { appStyles } from "../styles/appStyles";

const FontScreen = (props) => {
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const cPickerBGVisible = useSelector(state => state.modals.cPickerBGVisible);
  const cPickerFontColorVisible = useSelector(state => state.modals.cPickerFontColorVisible);
  const currentBg = useSelector(state => state.colorParametrs.currentBg);
  const currentFontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const fontsList = useSelector(state => state.textInput.fontsList);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const familyFonts = useSelector(state => state.textInput.familyFonts);
  const notifyVisible = useSelector(state => state.modals.notifyVisible);
  const notifyMessage = useSelector(state => state.modals.notifyMessage);
  const keyboardVisible =useSelector(state => state.textInput.keyboardVisible);

  // const defferEnteredText = useDeferredValue(enteredText);
  const dispatch = useDispatch();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      dispatch(setKeyboardVisible());
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      dispatch(setKeyboardNotVisible());
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
}, [keyboardVisible]);


  const colorModal = colorModalShow && !keyboardVisible ? <ColorModal/> : null;
  const fontSettingsModal = fontSettingsModalShow && !keyboardVisible ? <FontSettingsModal/> : null;
  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  return (
    <>
      <View style={appStyles.header}>
        <ButtonIcon
          icon={'info'}
           onPress={() => dispatch(openInfoModal())}
        />
        <Text style={appStyles.headerLabel}>
            Sticker Fonts
        </Text>
        <ButtonIcon
          icon={'showMore'}
          onPress={() => dispatch(openShowMoreModal())}
        />
      </View>

      <View style={appStyles.fontsContainer}>
        {notification}
        <SectionList
            sections={fontsList}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={appStyles.title}>{title}</Text>
            )}
            renderItem={({item}) => (
              <FontItem
                title={enteredText === '' ? item : enteredText}
                font={Platform.OS === 'android' ?
                  familyFonts.filter(font => font.displayName === item)[0].android
                  : familyFonts.filter(font => font.displayName === item)[0].ios}
              />
            )}
            initialNumToRender={15}
            onScroll={() => {
                Keyboard.dismiss();
            }}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={true}
            bounces={false}
          />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {colorModal}
        {fontSettingsModal}

        <View style={appStyles.footerBar}>
          <ButtonIcon
            icon={alignSelf}
            onPress={() => dispatch(changeAlignSelf())}
            marginRifgt
          />

          <ButtonIcon
            icon={"text"}
            onPress={() => {
              if (fontSettingsModalShow) {
                dispatch(closeFontSettingsModal());
                dispatch(setFontsValuesForSliders());
              } else {
                Keyboard.dismiss();
                dispatch(openFontSettingsModal());
              }
            }}
          />

          <TextItemInput/>

          <ButtonIcon
            icon={"palette"}
            onPress={() => {
              if (colorModalShow) {
                dispatch(closeColorModal());
                dispatch(setColorsValuesForSliders());
              } else {
                Keyboard.dismiss();
                dispatch(openColorModal());
              }
            }}
            last={true}
          />

        </View>
      </KeyboardAvoidingView>

      <ColorPickerModal
        modalVisible={cPickerFontColorVisible}
        onCloseModal={() => dispatch(cPickerFontColorHide())}
        onChangeColor={(color) => dispatch(changeFontColor({ newColor: color }))}
        currentColor={currentFontColor}
      />

      <ColorPickerModal
        modalVisible={cPickerBGVisible}
        onCloseModal={() => dispatch(cPickerBGHide())}
        onChangeColor={(color) => dispatch(changeBg({ newColor: color }))}
        currentColor={currentBg}
      />

      <InfoModal />
      <ShowMoreModal />
      <AltSharingItemModal />
    </>
  )
};

export default FontScreen;
