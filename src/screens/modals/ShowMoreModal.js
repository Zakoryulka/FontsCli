import { View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

import MainButton from '../../components/buttons/MainButton';
import { modalsHandlers } from '../../handlers/modalsHandlers';
import { useLinks } from "../../hooks/useLinks";

import { appStyles } from "../../styles/appStyles";

const ShowMoreModal = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);
  const { addRate,
    upgrateToPro,
    shareApp,
    mailToUs
  } = useLinks();
  const {pressInfoBtnHandler, closeShowMoreHandler } = modalsHandlers();

  const LabelBtn = ({text}) => {
    return (
      <Text style={[appStyles.showMoreModalBtnLabel, {color: colorsStyle.text}]}>
        {text}
      </Text>
    )
  };

  const Divider = () => (
    <View style={[appStyles.showMoreModalBtnDivider, {backgroundColor: colorsStyle.primaryBg}]} />
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMoreModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {closeShowMoreHandler}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={closeShowMoreHandler}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[appStyles.modalWrapper,
        appStyles.infoModal,
        {backgroundColor: colorsStyle.primaryBg}
      ]}>
        <View style={appStyles.modalCloseHandler} />

        <View style={[appStyles.ModalBtnsContainer, {marginBottom: 35}]}>
          <MainButton
            onPress={upgrateToPro}
            topLeftRadius
            topRightRadius
            bottomLeftRadius
            bottomRightRadius
          >
            <LabelBtn text={'💎   Upgrate to pro'} />
          </MainButton>
        </View>

        <View style={[appStyles.ModalBtnsContainer, {marginBottom: 35}]}>
          <MainButton
            onPress={pressInfoBtnHandler}
            topLeftRadius
            topRightRadius
            bottomLeftRadius
            bottomRightRadius
          >
            <LabelBtn text={'ℹ️   How it works'} />
          </MainButton>
        </View>

        <View style={appStyles.ModalBtnsContainer}>
          <MainButton
            onPress={addRate}
            topLeftRadius
            topRightRadius
          >
            <LabelBtn text={'🌟   Rate App'} />
          </MainButton>

          <Divider />

          <MainButton onPress={shareApp} >
            <LabelBtn text={'📢   Share App'} />
          </MainButton>

          <Divider />

          <MainButton
            onPress={mailToUs}
            bottomLeftRadius
            bottomRightRadius
          >
            <LabelBtn text={'✉️   Write to us'} />
          </MainButton>
        </View>
      </View>
    </Modal>
  )
};

export default ShowMoreModal;
