import { View,
  Text,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Dimensions
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { altSharingItemModalHide,
  notifyShow,
  premiumAlertShow
} from "../../store/alertSettings";
import { copyToClipboard, saveToPhoto
} from "../../store/shareingSettings";
import { Sizes } from '../../constants/stylesConst';
import FontItemActive from '../../components/fontsElements/FontItemActive';
import SketchItemActive from '../../components/sketchesElements/SketchItemActive';
import MainButton from '../../components/buttons/MainButton';

import { appStyles } from "../../styles/appStyles";

const AltSharingItemModal = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const altSharingItemModalVisible = useSelector(state => state.alertSettings.altSharingItemModalVisible);
  const fontPremiumItemPressed = useSelector(state => state.alertSettings.fontPremiumItemPressed)
  const currentAlignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const y = useSelector(state => state.alertSettings.y);
  const currentContent = useSelector(state => state.content.currentContent);

  const dispatch = useDispatch();

  const windowWidth = Dimensions.get('window').width;

  async function hasAndroidPermission() {

    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function saveToPhotoHandler() {
    try {
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
      dispatch(saveToPhoto());
      dispatch(notifyShow({notifyText: 'save'}));
    } catch(err) {
      console.log(err);
    }
  }

  const setMarginLeft = () => {
    switch (currentAlignText) {
      case 'left':
        return windowWidth/10;
      case 'center':
        return (windowWidth - Sizes.altSharingModalWidth)/2;
      case 'right':
        return 'auto';
      default: 'auto';
    }
  }
  const setMarginRight = () => {
    switch (currentAlignText) {
      case 'left':
        return 'auto';
      case 'center':
        return (windowWidth - Sizes.altSharingModalWidth)/2;
      case 'right':
        return windowWidth/10;
      default: 'auto';
    }
  }

  const onPressSaveToPhotoHandler = () => {
    dispatch(altSharingItemModalHide());
    if (!fontPremiumItemPressed) {
      saveToPhotoHandler();
      dispatch(notifyShow({notifyText: 'save'}));
    } else {
      dispatch(premiumAlertShow());
    }
  };

  const onPressCopyHandler = () => {
    dispatch(altSharingItemModalHide());
    if (!fontPremiumItemPressed) {
      dispatch(copyToClipboard());
      dispatch(notifyShow({notifyText: 'copy'}));
    } else {
      dispatch(premiumAlertShow());
    }
  };

  const fontItemActive = currentContent === "Fonts" ? <FontItemActive /> : null;
  const sketchItemActive = currentContent === "Sketches" ? <SketchItemActive /> : null;

  const setYCoor = (y) => {
    if (currentContent === "Fonts") {
      return y;
    } else if (currentContent === "Sketches") {
      return y - 15;
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={altSharingItemModalVisible}
      // swipeDirection={'down'}
      onSwipeMove = {() => dispatch(altSharingItemModalHide())}
      style={[appStyles.altSharingModal,
        { backgroundColor: colorsStyle.alertBG }
      ]}
      customBackdrop = {
        <TouchableWithoutFeedback
          onPress={() => dispatch(altSharingItemModalHide())}
          style={{flex: 1}}
        >
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
      // backdropColor={'transparent'}
      backdropColor='#ffffff'
      // transparent={false}
      statusBarTranslucent
      // statusBarTranslucent
      // deviceHeight={Dimensions.get('screen').height}
    >

      {fontItemActive}
      {sketchItemActive}

      <View
        style={[
          appStyles.altSharingModalContainer,
          {
            top: setYCoor(y),
            left: setMarginLeft(),
            right: setMarginRight()
          }
        ]}
      >
        <View
          style={appStyles.ModalBtnsContainer}
        >
          <MainButton
            onPress={onPressCopyHandler}
            topLeftRadius
            topRightRadius
          >
            <Text style={[
              appStyles.showMoreModalBtnLabel,
              {color: colorsStyle.text}
            ]}>
              Copy
            </Text>
          </MainButton>
          <View style={[
              appStyles.showMoreModalBtnDivider,
              {backgroundColor: colorsStyle.divider2}
            ]} />
          <MainButton
            onPress={onPressSaveToPhotoHandler}
            bottomLeftRadius
            bottomRightRadius
          >
            <Text style={[
              appStyles.showMoreModalBtnLabel,
              {color: colorsStyle.text}
            ]}>
              Save to Photo
            </Text>
          </MainButton>
        </View>
      </View>
    </Modal>
  )
};

export default AltSharingItemModal;
