import { View } from "react-native";
import { useSelector} from "react-redux";

import * as data from "../../assets/skethes/sketches";
import { modalsHandlers } from '../../handlers/modalsHandlers';
import { sketchModalHandlers } from "../../handlers/sketchModalHandlers";
import ButtonIcon from "../../components/ButtonIcon";
import ContentGroupsLabelsSlider from "../ContentGroupsLabelsSlider";
import ColorPickerButton from "../../components/ColorPickerButton";

import { appStyles } from "../../styles/appStyles";

const SketchesFooter = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const sketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);

  const {
    pressOpenCPickerSketchHandler,
    pressSketchSettingsHandler,
  } = sketchModalHandlers();

  return (
    <View style={[appStyles.footerBar, appStyles.SketchsFooter, {backgroundColor: colorsStyle.primaryBg}]}>
      <ColorPickerButton
        buttonBgColor={sketchColor}
        onPressAction={pressOpenCPickerSketchHandler}
      />
      <ButtonIcon
        icon={'settings'}
        onPress={pressSketchSettingsHandler}
        marginRifgt
      />

      <ContentGroupsLabelsSlider labelsList={data.sketchGroupsLabels}/>
    </View>
  )
};

export default SketchesFooter;
