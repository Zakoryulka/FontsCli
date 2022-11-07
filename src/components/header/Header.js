import { Text, View } from "react-native";

import { useSelector } from "react-redux";
import { modalsHandlers } from '../../handlers/modalsHandlers';

import ButtonIcon from "../../components/ButtonIcon";

import { appStyles } from "../../styles/appStyles";

const Header = () => {
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);

  const { pressInfoBtnHandler, pressShowMoreBtnHandler } = modalsHandlers();

  return (
    <View style={appStyles.header}>
      <ButtonIcon
        icon={'info'}
        onPress={pressInfoBtnHandler}
        visible={infoModalVisible}
      />
      <Text style={appStyles.headerLabel}>
          Sticker Fonts
      </Text>
      <ButtonIcon
        icon={'showMore'}
        onPress={pressShowMoreBtnHandler}
        visible={showMoreModalVisible}
      />
    </View>
  )
};

export default Header;
