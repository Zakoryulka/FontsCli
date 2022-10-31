import { useDeferredValue, useRef, useState } from "react";

import {
  Text,
  View,
  SectionList,
  KeyboardAvoidingView,
  Platform
} from "react-native";


import { useSelector, useDispatch } from "react-redux";
import { openInfoModal, openShowMoreModal,
         openColorModal, closeColorModal,
         openFontSettingsModal, closeFontSettingsModal,
         cPickerBGHide, cPickerFontColorHide
 } from "../store/modal";
import { changeBg, changeFontColor } from "../store/colorParametrs";
import { changeAlignSelf } from "../store/ aligmentParametrs";

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
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);
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

  const defferEnteredText = useDeferredValue(enteredText);
  const dispatch = useDispatch();

  const colorModal = colorModalShow ? <ColorModal/> : null;
  const fontSettingsModal = fontSettingsModalShow ? <FontSettingsModal/> : null;
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
            renderItem={({item, index}) => (
              <FontItem
                title={defferEnteredText === '' ? item : defferEnteredText}
                font={Platform.OS === 'android' ?
                  familyFonts.filter(font => font.displayName === item)[0].android
                  : familyFonts.filter(font => font.displayName === item)[0].ios}
              />
            )}
            initialNumToRender={15}
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
              !fontSettingsModalShow ?
              dispatch(openFontSettingsModal()) :
              dispatch(closeFontSettingsModal())
            }}
          />

          <TextItemInput/>

          <ButtonIcon
            icon={"palette"}
            onPress={() => {
              !colorModalShow ?
              dispatch(openColorModal()) :
              dispatch(closeColorModal())
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
