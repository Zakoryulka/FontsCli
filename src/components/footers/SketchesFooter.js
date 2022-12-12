import { View } from "react-native";
import { useSelector} from "react-redux";

import { sketchModalHandlers } from "../../handlers/sketchModalHandlers";
import ButtonIcon from "../buttons/ButtonIcon";
import ColorPickerButton from "../buttons/ColorPickerButton";
import ResetButton from "../buttons/ResetButton";

import { appStyles } from "../../styles/appStyles";

const SketchesFooter = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const sketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);
  const sketchSettingsModalShow = useSelector(state => state.sketchesScreen.sketchSettingsModalShow);

  const {
    pressOpenCPickerSketchHandler,
    pressSketchSettingsHandler,
    pressResetSketchSettings
  } = sketchModalHandlers();

  return (
    <View style={[appStyles.footerBar, appStyles.sketchsFooter, {backgroundColor: colorsStyle.primaryBg}]}>
      <View style={appStyles.sketchsFooterBtnsWrapper}>
        <ColorPickerButton
          buttonBgColor={sketchColor}
          onPressAction={pressOpenCPickerSketchHandler}
        />
        <ButtonIcon
          icon={'settings'}
          onPress={pressSketchSettingsHandler}
          visible={sketchSettingsModalShow}
          marginRifgt
        />
      </View>
      <View style={appStyles.sketchsFooterBtnsWrapper}>
        <ResetButton
          onPress={pressResetSketchSettings}
        />
      </View>
    </View>
  )
};

export default SketchesFooter;
