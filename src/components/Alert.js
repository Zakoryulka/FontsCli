import { View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from "react-native-modal";

import MainButton from './MainButton';

import { appStyles } from "../styles/appStyles";

const Alert = (props) => {
  const { visible,
    alertLabel,
    alertMessage,
    cancelBtnLabel,
    actionBtnLabel,
    onPressBg,
    onPressCancel,
    onPressAction,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onSwipeMove = {onPressBg}
      style={appStyles.alertScreen}
      customBackdrop = {
        <TouchableWithoutFeedback
          onPress={onPressBg}
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
            {alertLabel}
          </Text>
          <Text style={appStyles.AlertMessage}>
            {alertMessage}
          </Text>
        </View>
        <View style={appStyles.showMoreModalBtnDivider} />

        <View style={appStyles.AlertBtnContainer}>

          <MainButton
            onPress={onPressCancel}
            bottomLeftRadius
          >
            <Text style={appStyles.AlertButtonText}>
              {cancelBtnLabel}
            </Text>
          </MainButton>

          <View style={appStyles.AlertDivider} />

          <MainButton
            onPress={onPressAction}
            bottomRightRadius
          >
            <Text style={appStyles.AlertButtonText}>
              {actionBtnLabel}
            </Text>
          </MainButton>

        </View>
      </View>
    </Modal>
  )
};

export default Alert;
