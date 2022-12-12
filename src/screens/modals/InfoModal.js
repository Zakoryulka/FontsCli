import { View, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient'

import InstagramIcon from "../../assets/icons/InstagramIcon";
import VKIcon from "../../assets/icons/VKIcon";
import TiktokIcon from "../../assets/icons/TiktokIcon";
import PaletteFill from "../../assets/icons/PaletteFill";

import { modalsHandlers } from "../../handlers/modalsHandlers";
import { Sizes, Gradients, Colors } from '../../constants/stylesConst';

import { appStyles } from '../../styles/appStyles';

const InfoModalBtn = (props) => {
  const { btnLabel,
    gradientColors,
    icon,
    onPress
  } = props;

  return (
    <View style={appStyles.infoModalOuterBtn}>
      <LinearGradient
        colors={gradientColors}
        style={appStyles.infoModalGradient}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.1, y: 1.1}}
      >
        <Pressable
          style={[appStyles.infoModalBtn]}
          onPress={onPress}
          hitSlop = {Sizes.hitSlopPressable}
        >
          <View style={appStyles.infoModalInnerBtn}>
            {icon}
            <Text style={appStyles.infoModalBtnText}>
              {btnLabel}
            </Text>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  )
};

const InfoModal = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const infoModalVisible = useSelector(state => state.modals.infoModalVisible);

  const { closeInfoModalHandler } = modalsHandlers();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={infoModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {closeInfoModalHandler}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={closeInfoModalHandler}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[
        appStyles.modalWrapper,
        appStyles.infoModal,
        {backgroundColor: colorsStyle.primaryBg}
      ]}>
        <View style={appStyles.modalCloseHandler} />
        <View style={appStyles.infoModalWrapper}>
          <View style={appStyles.infoModalLineWrapper}>
            <InfoModalBtn
              icon={<InstagramIcon fill={Colors.infoBtnIcon} width={Sizes.infoIcon} height={Sizes.infoIcon} style={appStyles.infoModalBtnIcon}/>}
              btnLabel={"How to insert font into Instagram"}
              gradientColors={Gradients.instagram}
            />
            <InfoModalBtn
              icon={<TiktokIcon width={Sizes.infoIcon} height={Sizes.infoIcon} style={appStyles.infoModalBtnIcon}/>}
              btnLabel={"How to insert font into TikTok"}
              gradientColors={Gradients.tiktok}
            />
          </View>
          <View style={appStyles.infoModalLineWrapper}>
            <InfoModalBtn
              icon={<VKIcon fill={Colors.infoBtnIcon} width={50} height={Sizes.infoIcon} style={appStyles.infoModalBtnIcon}/>}
              btnLabel={"How to insert text into VK Stories"}
              gradientColors={Gradients.vk}
            />
            <InfoModalBtn
              icon={<PaletteFill fill={Colors.infoBtnIcon} width={Sizes.infoIcon} height={Sizes.infoIcon} style={appStyles.infoModalBtnIcon}/>}
              btnLabel={"How to record font & add background"}
              gradientColors={Gradients.infoPalet}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default InfoModal;
