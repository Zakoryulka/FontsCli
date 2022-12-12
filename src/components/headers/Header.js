import { Text, View } from "react-native";

import { useSelector } from "react-redux";
import { modalsHandlers } from '../../handlers/modalsHandlers';

import ButtonIcon from "../buttons/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

const Header = ({navigation}) => {
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const theme = useSelector(state => state.colorTheme.theme);

  const { pressInfoBtnHandler,
    pressShowMoreBtnHandler,
    pressChangeColorTheme
  } = modalsHandlers();

  return (
    <View style={[appStyles.header, {backgroundColor: colorsStyle.primaryBg}]}>
      <View style={appStyles.headerWrapper}>
        <ButtonIcon
          icon={'info'}
          onPress={pressInfoBtnHandler}
          visible={infoModalVisible}
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
          marginRifgt
          onPress={pressChangeColorTheme}
        />
        <ButtonIcon
          icon={'showMore'}
          onPress={pressShowMoreBtnHandler}
          visible={showMoreModalVisible}
        />
      </View>
    </View>
  )
};

export default Header;
