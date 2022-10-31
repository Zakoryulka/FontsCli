
import { View,
         Text,
         Pressable
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { closeFontSettingsModal } from "../store/modal"
import SliderItem from "../components/SliderItem";
import ButtonIcon from "../components/ButtonIcon";
import { resetFontsSettings,
         changeFontSize,
         changeLineSpacing,
         changeLetterSpacing
} from "../store/fontParametrs";

import { appStyles } from "../styles/appStyles";

function ColorModal() {
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);

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
          onPress={() => dispatch(closeFontSettingsModal())}
        />
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Font size:</Text>
        <View style={appStyles.settingsWrapper}>
          <SliderItem
            min={12}
            max={36}
            value={fontSize}
            step={1.5}
            changeValue={(value) => dispatch(changeFontSize({ fontSize: value }))}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Letter spacing:</Text>
        <View style={appStyles.settingsWrapper}>
        <SliderItem
            min={0}
            max={15}
            value={letterSpacing}
            step={1}
            changeValue={(value) => dispatch(changeLetterSpacing({ letterSpacing: value }))}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Line spacing:</Text>
        <SliderItem
          min={1.30}
          max={2.3}
          value={lineSpacing}
          step={0.1}
          changeValue={(value) => dispatch(changeLineSpacing({ lineSpacing: value }))}
        />
      </View>
    </View>
  )
};

export default ColorModal;
