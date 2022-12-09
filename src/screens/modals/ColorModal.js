import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";

 import { changeBg,
  changeFontColor,
  changeOpacity,
  resetColors,
  changePadding,
  changeRadius
} from "../../store/colorParametrs";
import { modalsHandlers } from "../../handlers/modalsHandlers";

import fontsData from '../../fontsData.json';
import ModalLabel from "../../components/ModalLabel";
import ResetButton from "../../components/buttons/ResetButton";
import SettingColorSlider from "../../components/SettingColorSlider";
import SliderItem from "../../components/SliderItem";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import ColorPickerButton from "../../components/buttons/ColorPickerButton";

import { appStyles } from "../../styles/appStyles";

function ColorModal() {
  const colorsList = fontsData.data.colors;
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const startPadding = useSelector(state => state.colorParametrs.startValueForSliderPadding);
  const startRadius = useSelector(state => state.colorParametrs.startValueForSliderRadius);
  const startOpacity = useSelector(state => state.colorParametrs.startValueForSliderOpacity);

  const dispatch = useDispatch();
  const { closeColorModalHandler,
    pressOpenCPickerFontHandler,
    pressOpenCPickerBGHandler
  } = modalsHandlers();

  const onPressResetHandler = useCallback(() => dispatch(resetColors()), []);
  const onPressChangeFontColorHandler = useCallback((color) => dispatch(changeFontColor({ newColor: color})), []);
  const onPressChangeBGColorHandler = useCallback((color) => dispatch(changeBg({ newColor: color})), []);
  const onChangePaddingHandler = useCallback((padding) => dispatch(changePadding({ padding: padding})), []);
  const onChangeRadiusHandler = useCallback((radius) => dispatch(changeRadius({ radius: radius})), []);
  const onChangeOpacityHandler = useCallback((opacity) => dispatch(changeOpacity({ opacity: opacity})), []);

  return (
    <View style={appStyles.modalWrapper}>

      <View style={appStyles.modalHeader}>
        <ResetButton onPress={onPressResetHandler}/>
        <ButtonIcon
          icon={'close'}
          onPress={closeColorModalHandler}
        />
      </View>

      <View style={appStyles.settingsSection}>
        <ModalLabel>Font Color:</ModalLabel>
        <View style={appStyles.settingsWrapper}>
          <ColorPickerButton
            buttonBgColor={fontColor}
            onPressAction={pressOpenCPickerFontHandler}
          />
          <SettingColorSlider
            dataList={colorsList}
            currentData={fontColor}
            onPressChangeColor={onPressChangeFontColorHandler}
            transparent={false}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
        <ModalLabel>Background Color:</ModalLabel>
        <View style={appStyles.settingsWrapper}>
          <ColorPickerButton
            buttonBgColor={bg}
            onPressAction={pressOpenCPickerBGHandler}
          />
          <SettingColorSlider
            dataList={colorsList}
            currentData={bg}
            onPressChangeColor={onPressChangeBGColorHandler}
            transparent={true}
          />
        </View>
      </View>

      <View style={appStyles.settingsSectionContainer}>
        <View style={[
          appStyles.settingsSection,
          {width: '46%'}
        ]}>
          <ModalLabel sliderLabel>Padding:</ModalLabel>
          <SliderItem
            min={4}
            max={20}
            value={startPadding}
            step={1}
            changeValue={onChangePaddingHandler}
          />
        </View>
        <View style={[appStyles.settingsSection, {width: '46%'}]}>
          <ModalLabel sliderLabel>Corner Radius:</ModalLabel>
          <SliderItem
            min={0}
            max={40}
            value={startRadius}
            step={1}
            changeValue={onChangeRadiusHandler}
          />
        </View>
      </View>

      <View style={appStyles.settingsSection}>
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

export default ColorModal;
