import { KeyboardAvoidingView, Platform } from "react-native";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import FontList from "../components/fontList/FontList";
import StickersModalFooter from "../components/footer/StickersModalFooter";

const ArtsScreen = () => {


  return (
    <>
      <FontList />
      <StickersModalFooter />
    </>
  )
};

export default ArtsScreen;
