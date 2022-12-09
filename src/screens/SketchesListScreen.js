import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-native";
import { Dimensions } from "react-native";
// import Modal from 'react-native-translucent-modal';

import SketchesHeader from "../components/headers/SketchesHeader";
import SketchesList from "../components/sketchesElements/SketchesList";
import SketchesFooter from "../components/footers/SketchesFooter";
const SketchSettingsModal = lazy(() => import("./modals/SketchSettingsModal"));

import { appStyles } from "../styles/appStyles";

const SketchesListScreen = () => {
  const sketchesGroupListVisible = useSelector(state => state.content.sketchesGroupListVisible);
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const sketchSettingsModal = sketchSettingsModalShow ? <Suspense><SketchSettingsModal/></Suspense> : null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={sketchesGroupListVisible}
      style={appStyles.sketchesListScreen}
      // coverScreen={false}
      // deviceHeight={Dimensions.get('screen').height}
      // // statusBarTranslucent={true}
    >
      <SketchesHeader />
      <SketchesList />
      {sketchSettingsModal}
      <SketchesFooter />
    </Modal>
  )
};

export default SketchesListScreen;
