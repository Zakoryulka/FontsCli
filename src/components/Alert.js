import { useSelector } from 'react-redux';
import { View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from "react-native-modal";

import MainButton from './MainButton';

import { appStyles } from "../styles/appStyles";

const Alert = (props) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
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
      style={[
        appStyles.alertScreen,
        { backgroundColor: colorsStyle.alertBG}
      ]}
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
        style={[appStyles.AlertContainer,
        {backgroundColor: colorsStyle.btn1}]}
      >

        <View style={appStyles.AlertHeader}>
          <Text style={[appStyles.AlertLabel,
          {color: colorsStyle.text}]}>
            {alertLabel}
          </Text>
          <Text style={[appStyles.AlertMessage,
          {color: colorsStyle.text}]}>
            {alertMessage}
          </Text>
        </View>
        <View
          style={[
            appStyles.showMoreModalBtnDivider,
            {backgroundColor: colorsStyle.divider2}
          ]} />

        <View style={appStyles.AlertBtnContainer}>

          <MainButton
            onPress={onPressCancel}
            bottomLeftRadius
            row
          >
            <Text style={[appStyles.AlertButtonText,
          {color: colorsStyle.text}]}>
              {cancelBtnLabel}
            </Text>
          </MainButton>

          <View style={[appStyles.AlertDivider,
          {backgroundColor: colorsStyle.divider2}]} />

          <MainButton
            onPress={onPressAction}
            bottomRightRadius
            row
          >
            <Text style={[appStyles.AlertButtonText,
            {color: colorsStyle.text}]}>
              {actionBtnLabel}
            </Text>
          </MainButton>

        </View>
      </View>
    </Modal>
  )
};

export default Alert;
