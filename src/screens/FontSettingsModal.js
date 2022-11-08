import { useDispatch, useSelector } from "react-redux";
import { View,
  Text,
  Pressable
} from "react-native";
import { resetFontsSettings,
  changeFontSize,
  changeLineSpacing,
  changeLetterSpacing
} from "../store/fontParametrs";
import { modalsHandlers } from "../handlers/modalsHandlers";

import SliderItem from "../components/SliderItem";
import ButtonIcon from "../components/ButtonIcon";

import { appStyles } from "../styles/appStyles";

function FontSettingsModal() {
  const startFontSize = useSelector(state => state.fontParametrs.startValueForSliderFontSize);
  const startLineSpacing = useSelector(state => state.fontParametrs.startValueForSliderLineSpacing);
  const startLetterSpacing = useSelector(state => state.fontParametrs.startValueForSliderLetterSpacing);

  const { closeFontSettingsHandler } = modalsHandlers();

  const dispatch = useDispatch();

  return (
    <View style={appStyles.modalWrapper}>

      <View style={appStyles.modalHeader}>
        <Pressable
          style={appStyles.buttonTextWrapper}
          onPress={() => dispatch(resetFontsSettings())}
          pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 0 }}
        >
          <Text style={appStyles.buttonText}>Reset</Text>
        </Pressable>
        <ButtonIcon
          icon={'close'}
          onPress={closeFontSettingsHandler}
        />
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Font size:</Text>
          <SliderItem
            min={12}
            max={36}
            value={startFontSize}
            step={1}
            changeValue={(value) => {
              dispatch(changeFontSize({ fontSize: value }));
            }}
          />
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Letter spacing:</Text>
        <SliderItem
            min={0}
            max={15}
            value={startLetterSpacing}
            step={1}
            changeValue={(value) => dispatch(changeLetterSpacing({ letterSpacing: value }))}
          />
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Line spacing:</Text>
        <SliderItem
          min={1.30}
          max={2.3}
          value={startLineSpacing}
          step={0.1}
          changeValue={(value) => dispatch(changeLineSpacing({ lineSpacing: value }))}
        />
      </View>
    </View>
  )
};

export default FontSettingsModal;
