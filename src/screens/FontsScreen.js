import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import FontList from "../components/fontsElements/FontList";
import Footer from "../components/footers/Footer";
const ColorModal = lazy(() => import("./modals/ColorModal"));
const FontSettingsModal = lazy(() => import("./modals/FontSettingsModal"));

const FontsScreen = () => {
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const keyboardVisible = useSelector(state => state.textInput.keyboardVisible);
  const familyFonts = useSelector(state => state.textInput.familyFonts);

  const colorModal = colorModalShow && !keyboardVisible ? <Suspense><ColorModal/></Suspense> : null;
  const fontSettingsModal = fontSettingsModalShow && !keyboardVisible ? <Suspense><FontSettingsModal/></Suspense> : null;

  return (
    <>
      <FontList data={familyFonts} />
      {colorModal}
      {fontSettingsModal}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Footer />
      </KeyboardAvoidingView>

    </>
  )
};

export default FontsScreen;
