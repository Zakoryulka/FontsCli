import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { sketchModalHandlers } from "../../handlers/sketchModalHandlers";
import { changeSketchOpacity } from "../../store/sketchesScreen";

import ModalLabel from "../../components/ModalLabel";
import ResetButton from "../../components/buttons/ResetButton";
import SliderItem from "../../components/SliderItem";
import ButtonIcon from "../../components/buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

function SketchSettingsModal() {
  const startOpacity = useSelector(state => state.sketchesScreen.startValueForSliderSketchOpacity);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const dispatch = useDispatch();

  const { closeSketchSettingsHandler,
    pressResetSketchSettings } = sketchModalHandlers();
  const onChangeOpacityHandler = useCallback((opacity) => dispatch(changeSketchOpacity({ opacity: opacity})), []);

  return (
    <View style={[appStyles.modalWrapper, {backgroundColor: colorsStyle.primaryBg}]}>

      <View style={[appStyles.modalHeader, appStyles.modalSketchHeader]}>
        {/* <ResetButton
          onPress={pressResetSketchSettings}
        /> */}
        <ButtonIcon
          icon={'close'}
          onPress={closeSketchSettingsHandler}
        />
      </View>

      <View>
        <ModalLabel sliderLabel>Opacity:</ModalLabel>
        <SliderItem
          min={0}
          max={1}
          value={startOpacity}
          step={0.05}
          changeValue={onChangeOpacityHandler}
          />
      </View>

      {/* <View style={appStyles.settingsSection}>
        <ModalLabel sliderLabel>Shadow:</ModalLabel> */}
        {/* <SliderItem
            min={0}
            max={15}
            value={0}
            step={1}
            changeValue={onChangeOpacityHandler}
          /> */}
      {/* </View> */}
    </View>
  )
};

export default SketchSettingsModal;
