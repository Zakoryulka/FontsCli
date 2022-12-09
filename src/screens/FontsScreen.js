import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import FontList from "../components/fontsElements/FontList";
import Footer from "../components/footers/Footer";
const ColorModal = lazy(() => import("./modals/ColorModal"));
const FontSettingsModal = lazy(() => import("./modals/FontSettingsModal"));
const EmptyFavoritesFontsList = lazy(() => import("./../components/fontsElements/EmptyFavoritesFontsList"));

const FontsScreen = () => {
  const fontsVisible = useSelector(state => state.content.fontsVisible);
  const favoritesVisible = useSelector(state => state.content.favoritesVisible);
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const keyboardVisible = useSelector(state => state.textInput.keyboardVisible);
  const familyFonts = useSelector(state => state.textInput.familyFonts);
  const favoritesFamilyFonts = useSelector(state => state.textInput.favoritesFamilyFonts);
  console.log(favoritesFamilyFonts);


  const renderAllFontsList = fontsVisible ? <FontList data={familyFonts}/> : null;
  const renderEmptyFavoritesFontsList = favoritesVisible && favoritesFamilyFonts.length === 0 ? <EmptyFavoritesFontsList /> : null;
  const renderFavoritesFontsList = favoritesVisible && favoritesFamilyFonts.length != 0
    ? <FontList data={familyFonts.filter(({fontNameAndroid}) => favoritesFamilyFonts.includes(fontNameAndroid))}/>
    : null;
  const colorModal = colorModalShow && !keyboardVisible ? <Suspense><ColorModal/></Suspense> : null;
  const fontSettingsModal = fontSettingsModalShow && !keyboardVisible ? <Suspense><FontSettingsModal/></Suspense> : null;

  return (
    <>
      {renderAllFontsList}
      {renderEmptyFavoritesFontsList}
      {renderFavoritesFontsList}
      {colorModal}
      {fontSettingsModal}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Footer />
      </KeyboardAvoidingView>

    </>
  )
};

export default FontsScreen;
