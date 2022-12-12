import { Text, View } from "react-native";

import { useSelector } from "react-redux";
import { modalsHandlers } from '../../handlers/modalsHandlers';
import { sketchModalHandlers } from '../../handlers/sketchModalHandlers';

import ButtonIcon from "../buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

const SketchesHeader = ({navigation}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const theme = useSelector(state => state.colorTheme.theme);

  const { pressChangeColorTheme } = modalsHandlers();
  const { deleteSketchesGroupItemHandler,
    closeSketchSettingsHandler,
    pressResetSketchSettings
  } = sketchModalHandlers();

  const goBackHandler = () => {
    deleteSketchesGroupItemHandler();
    closeSketchSettingsHandler();
    pressResetSketchSettings();       // оставить или удалить???
    navigation.goBack();
  };

  return (
    <View style={[appStyles.header, appStyles.sketchesHeader, {backgroundColor: colorsStyle.primaryBg}]}>
      <View style={appStyles.headerWrapper}>
        <ButtonIcon
          icon={'goBack'}
          onPress={goBackHandler}
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
