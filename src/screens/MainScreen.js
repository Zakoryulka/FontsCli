import { useSelector, useDispatch } from "react-redux";
import { changeBg, changeFontColor } from "../store/colorParametrs";
import { changeCurrentSketchColor } from "../store/sketchesScreen";
import { modalsHandlers } from '../handlers/modalsHandlers';
import { sketchModalHandlers } from "../handlers/sketchModalHandlers";
import { lazy, Suspense } from "react";

import Header from "../components/headers/Header";
import ContentSwitcher from "../components/ContentSwitcher";

const FontsScreen = lazy(() => import("./FontsScreen"));
const SketchesGroupList = lazy(() => import("../components/sketchesElements/SketchesGroupList"));
const SketchesListScreen = lazy(() => import("./SketchesListScreen"));
const ColorPickerModal = lazy(() => import("./modals/ColorPickerModal"));
const InfoModal = lazy(() => import("./modals/InfoModal"));
const ShowMoreModal = lazy(() => import("./modals/ShowMoreModal"));
const AltSharingItemModal = lazy(() => import("./alerts/AltSharingItemModal"));
const PremiumAlert = lazy(() => import("./alerts/PremiumAlert"));
const RateAlert = lazy(() => import("./alerts/RateAlert"));

const MainScreen = () => {
  const fontsVisible = useSelector(state => state.content.fontsVisible);
  const favoritesVisible = useSelector(state => state.content.favoritesVisible);
  const sketchsVisible = useSelector(state => state.content.sketchsVisible);
  const sketchesGroupListVisible = useSelector(state => state.content.sketchesGroupListVisible);
  const cPickerBGVisible = useSelector(state => state.modals.cPickerBGVisible);
  const cPickerFontColorVisible = useSelector(state => state.modals.cPickerFontColorVisible);
  const startBg = useSelector(state => state.colorParametrs.startValueForCPickerBg);
  const startColor = useSelector(state => state.colorParametrs.startValueForCPickerColor);
  const cPickerSketchVisible = useSelector(state => state.sketchesScreen.cPickerSketchVisible);
  const startSketchColor = useSelector(state => state.sketchesScreen.startValueForCPickerSketchColor);

  const { pressCloseCPickerFontHandler, pressCloseCPickerBGHandler } = modalsHandlers();
  const { pressCloseCPickerSketchHandler } = sketchModalHandlers();

  const dispatch = useDispatch();

  const fontsScreen = fontsVisible || favoritesVisible ? <Suspense><FontsScreen/></Suspense> : null;
  const sketchsGroupScreen = sketchsVisible ? <Suspense><SketchesGroupList/></Suspense> : null;
  // const sketchesListScreen = sketchesGroupListVisible === true ? <Suspense><SketchesListScreen/></Suspense> : null;

  return (
    <>
      <Header />
      <ContentSwitcher />

      {fontsScreen}
      {sketchsGroupScreen}
      {/* {sketchesListScreen} */}

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

        <ColorPickerModal
          modalVisible={cPickerSketchVisible}
          onCloseModal={pressCloseCPickerSketchHandler}
          onChangeColor={(color) => dispatch(changeCurrentSketchColor({ newColor: color }))}
          startColor={startSketchColor}
        />

        <InfoModal />
        <ShowMoreModal />
        <SketchesListScreen />
        <AltSharingItemModal />
        <PremiumAlert />
        <RateAlert />
      </Suspense>
    </>
  )
};

export default MainScreen;
