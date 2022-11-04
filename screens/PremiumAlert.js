
import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import {
  premiumAlertHide
} from "../store/modal";

import { appStyles } from "../styles/appStyles";

const PremiumAlert = () => {
  const premiumAlertVisible = useSelector(state => state.modals.premiumAlertVisible);

  const dispatch = useDispatch();

  const fontPremiumItemPressed = useSelector(state => state.modals.fontPremiumItemPressed);

  const onPressCancel = () => {
    dispatch(premiumAlertHide());
  };

  const onPressDownload = () => {
    dispatch(premiumAlertHide());
  };

   return (
    <Modal
      // animationType="slide"
      transparent={true}
      visible={premiumAlertVisible}
      swipeDirection={'down'}
      onSwipeMove = {() => dispatch(premiumAlertHide())}
      style={appStyles.alertScreen}
      customBackdrop = {
        <TouchableWithoutFeedback
          onPress={() => dispatch(premiumAlertHide())}
          style={{flex: 1, alignItems: 'center'}}
        >
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View
        style={appStyles.AlertContainer}
      >

        <View style={appStyles.AlertHeader}>
          <Text style={appStyles.AlertLabel}>
            This font is available only in Pro version
          </Text>
          <Text style={appStyles.AlertMessage}>
            Download Sticker Fonts Pro to use all 200+ fonts
          </Text>
        </View>
        <View style={appStyles.showMoreModalBtndevider} />

        <View style={appStyles.AlertBtnContainer}>
          <Pressable
            style={appStyles.AlertButton}
            onPress={onPressCancel}
          >
            <Text style={appStyles.AlertButtonText}>
              Cancel
            </Text>
          </Pressable>

          <View style={appStyles.AlertDivider} />

          <Pressable
            style={appStyles.AlertButton}
            onPress={onPressDownload}
          >
            <Text style={appStyles.AlertButtonText}>
              Download
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
};

export default PremiumAlert;
