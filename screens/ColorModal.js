
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Pressable } from "react-native";
import { closeColorModal,
         cPickerFontColorShow,
         cPickerBGShow,
 } from "../store/modal";
 import { changeBg, changeFontColor,
          changeOpacity, resetColors
} from "../store/colorParametrs";

import serverState from '../serverState.json';
import SettingColorSlider from "../components/SettingColorSlider";
import SliderItem from "../components/SliderItem";
import ButtonIcon from "../components/ButtonIcon";
import ColorPickerButton from "../components/ColorPickerButton";

import { appStyles } from "../styles/appStyles";

function ColorModal() {
  const colorsList = serverState.data.colors;

  const bg = useSelector(state => state.colorParametrs.currentBg);
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const dispatch = useDispatch();

  return (
    <View style={appStyles.modalWrapper}>

      <View style={appStyles.modalHeader}>
        <Pressable
          style={appStyles.buttonTextWrapper}
          onPress={() => dispatch(resetColors())}
          pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 0 }}
        >
          <Text style={appStyles.buttonText}>Reset</Text>
        </Pressable>
        <ButtonIcon
          icon={'close'}
          onPress={() => dispatch(closeColorModal())}
        />
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Font Color</Text>
        <View style={appStyles.settingsWrapper}>
          <ColorPickerButton
            buttonBgColor={fontColor}
            onPressAction={() => dispatch(cPickerFontColorShow())}
          />
          <SettingColorSlider
            dataList={colorsList}
            onPressChangeColor={(color) => dispatch(changeFontColor({ newColor: color}))}
            transparent={false}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={appStyles.settingsSectioLabel}>Background Color</Text>
        <View style={appStyles.settingsWrapper}>
          <ColorPickerButton
            buttonBgColor={bg}
            onPressAction={() => dispatch(cPickerBGShow())}
          />
          <SettingColorSlider
            dataList={colorsList}
            onPressChangeColor={(color) => dispatch(changeBg({ newColor: color}))}
            transparent={true}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
        <Text style={[appStyles.settingsSectioLabel, {marginBottom: 0}]}>Opacity</Text>
        <SliderItem
          min={0}
          max={1}
          value={1}
          step={0.05}
          changeValue={(opacity) => dispatch(changeOpacity({ opacity: opacity}))}
        />
      </View>
    </View>
  )
};

export default ColorModal;
