import { Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { modalsHandlers } from '../../handlers/modalsHandlers';

import { sketchesGroupListHide } from "../../store/content";
import ButtonIcon from "../buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

const SketchesHeader = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const theme = useSelector(state => state.colorTheme.theme);

  const dispatch = useDispatch();

  const { pressChangeColorTheme } = modalsHandlers();

  return (
    <View style={[appStyles.header, appStyles.sketchesHeader, {backgroundColor: colorsStyle.primaryBg}]}>
      <View style={appStyles.headerWrapper}>
        <ButtonIcon
          icon={'close'}
          onPress={() => dispatch(sketchesGroupListHide())}
        />
      </View>
      <View style={appStyles.headerWrapper}>
        <Text style={[appStyles.headerLabel, {color: colorsStyle.text}]}>
            Tap to Copy
        </Text>
      </View>
      <View style={[appStyles.headerWrapper, appStyles.headerRight]}>
        <ButtonIcon
          icon={theme === 'dark' ? 'lightTheme' : 'darkTheme'}
          onPress={pressChangeColorTheme}
        />
      </View>
    </View>
  )
};

export default SketchesHeader;
