import { KeyboardAvoidingView, Platform } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { changeBg, changeFontColor } from "../store/colorParametrs";
import { modalsHandlers } from '../handlers/modalsHandlers';
import { lazy, Suspense } from "react";

import Header from "../components/header/Header";
import FontList from "../components/fontList/FontList";
import Footer from "../components/footer/Footer";

const ColorModal = lazy(() => import("./ColorModal"));
const ColorPickerModal = lazy(() => import("./ColorPickerModal"));
const FontSettingsModal = lazy(() => import("./FontSettingsModal"));
const InfoModal = lazy(() => import("./InfoModal"));
const ShowMoreModal = lazy(() => import("./ShowMoreModal"));
const AltSharingItemModal = lazy(() => import("./AltSharingItemModal"));
const PremiumAlert = lazy(() => import("./PremiumAlert"));
const RateAlert = lazy(() => import("./RateAlert"));

const MainScreen = () => {
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const cPickerBGVisible = useSelector(state => state.modals.cPickerBGVisible);
  const cPickerFontColorVisible = useSelector(state => state.modals.cPickerFontColorVisible);
  const startBg = useSelector(state => state.colorParametrs.startValueForCPickerBg);
  const startColor = useSelector(state => state.colorParametrs.startValueForCPickerColor);
  const keyboardVisible = useSelector(state => state.textInput.keyboardVisible);
  // const bg = useSelector(state => state.colorParametrs.currentBg);
  // const fontColor = useSelector(state => state.colorParametrs.currentFontColor);

  const { pressCloseCPickerFontHandler,  pressCloseCPickerBGHandler } = modalsHandlers();

  const dispatch = useDispatch();

  const colorModal = colorModalShow && !keyboardVisible ? <Suspense><ColorModal/></Suspense> : null;
  const fontSettingsModal = fontSettingsModalShow && !keyboardVisible ? <Suspense><FontSettingsModal/></Suspense> : null;

  return (
    <>
      <Header />
      <FontList />
      {colorModal}
      {fontSettingsModal}

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      {/* {colorModal}
      {fontSettingsModal} */}
        <Footer />
      </KeyboardAvoidingView>

      <Suspense>
        <ColorPickerModal
          modalVisible={cPickerFontColorVisible}
          onCloseModal={pressCloseCPickerFontHandler}
          onChangeColor={(color) => dispatch(changeFontColor({ newColor: color }))}
          startColor={startColor}
        />

        <ColorPickerModal
          modalVisible={cPickerBGVisible}
          onCloseModal={pressCloseCPickerBGHandler}
          onChangeColor={(color) => dispatch(changeBg({ newColor: color }))}
          startColor={startBg}
        />

        <InfoModal />
        <ShowMoreModal />
        <AltSharingItemModal />
        <PremiumAlert />
        <RateAlert />
      </Suspense>
    </>
  )
};

export default MainScreen;
