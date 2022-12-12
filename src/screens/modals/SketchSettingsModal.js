import { useSelector } from "react-redux";
import { View } from "react-native";
import { sketchModalHandlers } from "../../handlers/sketchModalHandlers";
import ModalLabel from "../../components/ModalLabel";
import SliderItem from "../../components/SliderItem";
import ButtonIcon from "../../components/buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

function SketchSettingsModal() {
  const startOpacity = useSelector(state => state.sketchesScreen.startValueForSliderSketchOpacity);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const { closeSketchSettingsHandler, onChangeOpacityHandler } = sketchModalHandlers();

  return (
    <View style={[appStyles.modalWrapper, {backgroundColor: colorsStyle.primaryBg}]}>

      <View style={[appStyles.modalHeader, appStyles.modalSketchHeader]}>
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
    </View>
  )
};

export default SketchSettingsModal;
