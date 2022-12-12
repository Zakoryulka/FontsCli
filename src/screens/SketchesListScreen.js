import { View } from "react-native";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import SketchesHeader from "../components/headers/SketchesHeader";
import SketchesList from "../components/sketchesElements/SketchesList";
import SketchesFooter from "../components/footers/SketchesFooter";
const SketchSettingsModal = lazy(() => import("./modals/SketchSettingsModal"));

import { appStyles } from "../styles/appStyles";

const SketchesListScreen = ({navigation}) => {
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const sketchSettingsModal = sketchSettingsModalShow ? <Suspense><SketchSettingsModal/></Suspense> : null;

  return (
    <View
      style={appStyles.sketchesListScreen}
    >
      <SketchesHeader
        navigation={{ goBack: () => navigation.goBack() }}
      />
      <SketchesList />
      {sketchSettingsModal}
      <SketchesFooter />
    </View>
  )
};

export default SketchesListScreen;
