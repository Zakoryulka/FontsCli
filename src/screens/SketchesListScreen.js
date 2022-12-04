import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import SketchesList from "../components/sketchesElements/SketchesList";
import SketchesFooter from "../components/footers/SketchesFooter";
const SketchSettingsModal = lazy(() => import("./modals/SketchSettingsModal"));

const SketchesListScreen = () => {
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const sketchSettingsModal = sketchSettingsModalShow ? <Suspense><SketchSettingsModal/></Suspense> : null;

  return (
    <>
      <SketchesList />
      {sketchSettingsModal}
      <SketchesFooter />
    </>
  )
};

export default SketchesListScreen;
