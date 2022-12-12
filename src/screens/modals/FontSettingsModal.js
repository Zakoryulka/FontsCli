import { useSelector } from "react-redux";
import { View } from "react-native";

import { modalsHandlers } from "../../handlers/modalsHandlers";
import { fontSettingsHandlers }  from "../../handlers/fontSettingsHandlers";

import ModalLabel from "../../components/ModalLabel";
import ResetButton from "../../components/buttons/ResetButton";
import SliderItem from "../../components/SliderItem";
import ButtonIcon from "../../components/buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

function FontSettingsModal() {
  const startFontSize = useSelector(state => state.fontParametrs.startValueForSliderFontSize);
  const startLineSpacing = useSelector(state => state.fontParametrs.startValueForSliderLineSpacing);
  const startLetterSpacing = useSelector(state => state.fontParametrs.startValueForSliderLetterSpacing);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const { closeFontSettingsHandler } = modalsHandlers();
  const { onPressResetHandler,
    onChangeFontSizeHandler,
    onChangeLetterSpacingHandler,
    onChangeLineSpacingHandler } = fontSettingsHandlers();

  return (
    <View style={[appStyles.modalWrapper, {backgroundColor: colorsStyle.primaryBg}]}>

      <View style={appStyles.modalHeader}>
        <ResetButton onPress={onPressResetHandler}/>
        <ButtonIcon
          icon={'close'}
          onPress={closeFontSettingsHandler}
        />
      </View>

      <View style={appStyles.settingsSection}>
        <ModalLabel sliderLabel>Font size:</ModalLabel>
          <SliderItem
            min={12}
            max={36}
            value={startFontSize}
            step={1}
            changeValue={onChangeFontSizeHandler}
          />
      </View>

      <View style={appStyles.settingsSection}>
        <ModalLabel sliderLabel>Letter spacing:</ModalLabel>
        <SliderItem
            min={0}
            max={15}
            value={startLetterSpacing}
            step={1}
            changeValue={onChangeLetterSpacingHandler}
          />
      </View>

      <View style={appStyles.settingsSection}>
        <ModalLabel sliderLabel>Line spacing:</ModalLabel>
        <SliderItem
          min={1.30}
          max={2.3}
          value={startLineSpacing}
          step={0.1}
          changeValue={onChangeLineSpacingHandler}
        />
      </View>
    </View>
  )
};

export default FontSettingsModal;
