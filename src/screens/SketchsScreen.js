import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import SketchesList from "../components/sketchesList/SketchesList";
import SketchsFooter from "../components/footers/SketchsFooter";
const SketchSettingsModal = lazy(() => import("./modals/SketchSettingsModal"));

const SketchsScreen = () => {
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const sketchSettingsModal = sketchSettingsModalShow ? <Suspense><SketchSettingsModal/></Suspense> : null;

  console.log(sketchSettingsModalShow);
  return (
    <>
      <SketchesList />
      {sketchSettingsModal}
      <SketchsFooter />
    </>
  )
};

export default SketchsScreen;
