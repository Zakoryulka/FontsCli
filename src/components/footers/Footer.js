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
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const stickersModalVisible = useSelector(state => state.modals.stickersModalVisible);

  const { pressAlignSelfBtnHandler,
    pressTextSettingsHandler,
    pressColorSettingsHandler,
    pressStickersBtnHandler
  } = modalsHandlers();

  return (
    <View style={[appStyles.footerBar, {backgroundColor: colorsStyle.primaryBg}]}>
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
        visible={colorModalShow}
        // marginRifgt
      />
      {/* <ButtonIcon
        icon={"stickers"}
        onPress={pressStickersBtnHandler}
        visible={stickersModalVisible}
        last={true}
      /> */}
    </View>
  )
};

export default Footer;