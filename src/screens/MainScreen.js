import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { modalsHandlers } from '../handlers/modalsHandlers';
import { sketchModalHandlers } from "../handlers/sketchModalHandlers";
import { fontColorModalSettingsHandlers } from "../handlers/fontColorModalSettingsHandlers";

import ContentNavigator from "./ContentNavigator";
import SketchesListScreen from "./SketchesListScreen";
const ColorPickerModal = lazy(() => import("./modals/ColorPickerModal"));
const InfoModal = lazy(() => import("./modals/InfoModal"));
const ShowMoreModal = lazy(() => import("./modals/ShowMoreModal"));
const AltSharingItemModal = lazy(() => import("./alerts/AltSharingItemModal"));
const PremiumAlert = lazy(() => import("./alerts/PremiumAlert"));
const RateAlert = lazy(() => import("./alerts/RateAlert"));

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  const cPickerBGVisible = useSelector(state => state.modals.cPickerBGVisible);
  const cPickerFontColorVisible = useSelector(state => state.modals.cPickerFontColorVisible);
  const startBg = useSelector(state => state.colorParametrs.startValueForCPickerBg);
  const startColor = useSelector(state => state.colorParametrs.startValueForCPickerColor);
  const cPickerSketchVisible = useSelector(state => state.sketchesScreen.cPickerSketchVisible);
  const startSketchColor = useSelector(state => state.sketchesScreen.startValueForCPickerSketchColor);

  const { pressCloseCPickerFontHandler, pressCloseCPickerBGHandler } = modalsHandlers();
  const { pressCloseCPickerSketchHandler, changeCurrentSketchColorHandler } = sketchModalHandlers();
  const { onPressChangeBGColorHandler, onPressChangeFontColorHandler } = fontColorModalSettingsHandlers();

  return (
    <>
      <NavigationContainer >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="MainPage" component={ContentNavigator} />
            <Stack.Screen name="SketchesList" component={SketchesListScreen} />
          </Stack.Navigator>
      </NavigationContainer>

      <Suspense>
        <ColorPickerModal
          modalVisible={cPickerFontColorVisible}
          onCloseModal={pressCloseCPickerFontHandler}
          onChangeColor={onPressChangeFontColorHandler}
          startColor={startColor}
        />

        <ColorPickerModal
          modalVisible={cPickerBGVisible}
          onCloseModal={pressCloseCPickerBGHandler}
          onChangeColor={onPressChangeBGColorHandler}
          startColor={startBg}
        />

        <ColorPickerModal
          modalVisible={cPickerSketchVisible}
          onCloseModal={pressCloseCPickerSketchHandler}
          onChangeColor={changeCurrentSketchColorHandler}
          startColor={startSketchColor}
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
