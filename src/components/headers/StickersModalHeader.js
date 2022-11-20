import { Text, View } from "react-native";

import { useSelector } from "react-redux";
import { modalsHandlers } from '../../handlers/modalsHandlers';

import ButtonIcon from "../../components/ButtonIcon";
import ResetButton from "../../components/ResetButton";

import { appStyles } from "../../styles/appStyles";

const StickersModalHeader = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const theme = useSelector(state => state.colorTheme.theme);

  const { closeStickersModalHandler, pressChangeColorTheme } = modalsHandlers();

  return (
    <View style={[appStyles.header, {backgroundColor: colorsStyle.primaryBg}]}>
      <View style={appStyles.headerWrapper}>
        <ResetButton />
      </View>
      <View style={appStyles.headerWrapper}>
        <Text style={[appStyles.headerLabel, {color: colorsStyle.text}]}>
            Tap to Copy
        </Text>
      </View>
      <View style={[appStyles.headerWrapper, appStyles.headerRight]}>
        <ButtonIcon
          icon={theme === 'dark' ? 'lightTheme' : 'darkTheme'}
          marginRifgt
          onPress={pressChangeColorTheme}
        />
        <ButtonIcon
          icon={'close'}
          onPress={closeStickersModalHandler}
        />
      </View>
    </View>
  )
};

export default StickersModalHeader;
