import { View } from "react-native";

import { useSelector} from "react-redux";

import { modalsHandlers } from '../../handlers/modalsHandlers';

import ButtonIcon from "../../components/ButtonIcon";
import TextItemInput from "../../components/TextItemInput";

import { appStyles } from "../../styles/appStyles";

const Footer = () => {
  const colorModalShow = useSelector(state => state.modals.colorModalShow);
  const fontSettingsModalShow = useSelector(state => state.modals.fontSettingsModalShow);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);

  const { pressAlignSelfBtnHandler,
    pressTextSettingsHandler,
    pressColorSettingsHandler,
  } = modalsHandlers();

  return (
    <View style={appStyles.footerBar}>
      <ButtonIcon
        icon={alignSelf}
        onPress={pressAlignSelfBtnHandler}
        marginRifgt
      />
      <ButtonIcon
        icon={"text"}
        onPress={pressTextSettingsHandler}
        visible={fontSettingsModalShow}
      />
      <TextItemInput/>
      <ButtonIcon
        icon={"palette"}
        onPress={pressColorSettingsHandler}
        last={true}
        visible={colorModalShow}
      />
    </View>
  )
};

export default Footer;
