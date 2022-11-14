import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { resetFontsSettings,
  changeFontSize,
  changeLineSpacing,
  changeLetterSpacing
} from "../store/fontParametrs";
import { modalsHandlers } from "../handlers/modalsHandlers";

import ModalLabel from "../components/ModalLabel";
import ResetButton from "../components/ResetButton";
import SliderItem from "../components/SliderItem";
import ButtonIcon from "../components/ButtonIcon";

import { appStyles } from "../styles/appStyles";

function FontSettingsModal() {
  const startFontSize = useSelector(state => state.fontParametrs.startValueForSliderFontSize);
  const startLineSpacing = useSelector(state => state.fontParametrs.startValueForSliderLineSpacing);
  const startLetterSpacing = useSelector(state => state.fontParametrs.startValueForSliderLetterSpacing);

  const dispatch = useDispatch();
  const { closeFontSettingsHandler } = modalsHandlers();

  const onPressResetHandler = useCallback(() => dispatch(resetFontsSettings()), []);
  const onChangeFontSizeHandler = useCallback((value) => dispatch(changeFontSize({ fontSize: value })), []);
  const onChangeLetterSpacingHandler = useCallback((value) => dispatch(changeLetterSpacing({ letterSpacing: value })), []);
  const onChangeLineSpacingHandler = useCallback((value) => dispatch(changeLineSpacing({ lineSpacing: value })), []);

  return (
    <View style={appStyles.modalWrapper}>

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
