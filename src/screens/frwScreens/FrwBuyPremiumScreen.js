import { View, Text, Pressable } from "react-native";

import ButtonIcon from "../../components/buttons/ButtonIcon";

import { Sizes, Colors } from '../../constants/stylesConst';
import { FRWText } from '../../constants/appConst';
import { appStyles } from '../../styles/appStyles';

const UnlockSchedule = (props) => {
  const {img, label, text} = props;
  return (
    <View style={appStyles.frwUnlockScheduleItemWrapper}>
      <Text style={appStyles.frwUnlockScheduleItemImg}>{img}</Text>
      <View style={appStyles.frwUnlockScheduleItemTextContainer}>
        <Text style={appStyles.frwUnlockScheduleItemLabel}>{label}</Text>
        <Text style={appStyles.frwUnlockScheduleItemText}>{text}</Text>
      </View>
    </View>
  )
}

const FrwBuyPremiumScreen = ({navigation}) => {
  return (
    <View style={appStyles.frwScreen}>

      <View style={appStyles.frwCloseBtnContainer}>
        <ButtonIcon
          icon={"close"}
          onPress={() => navigation.navigate("MainPage")}
        />
      </View>

      <View style={appStyles.frwBuyPremiumScreenWrapper}>
        <Text style={appStyles.frwBuyPremiumIcon}>👑</Text>
        <Text style={[appStyles.frwScreenLabel, appStyles.frwBuyPremiumLabel]}>{FRWText.buyPremiumLabel}</Text>
        <UnlockSchedule
          img={"🎉"}
          label={FRWText.todayLabel}
          text={FRWText.todayText}
        />
        <UnlockSchedule
          img={"🔔"}
          label={FRWText.secondTimeLabel}
          text={FRWText.secondTimeText}
        />
        <UnlockSchedule
          img={'💳'}
          label={FRWText.thirdTimeLabel}
          text={FRWText.thirdTimeText}
        />
      </View>

      <View
        style={[appStyles.frwScreenOuterBtn, appStyles.frwBuyPremiumOuterBtn]}
      >
        <Pressable
          style={appStyles.frwScreenBtn}
          android_ripple={{color: Colors.frwBtnRipple}}
          // onPress={onPress}
          hitSlop = {Sizes.hitSlopPressable}
        >
            <Text style={appStyles.frwScreenBtnText}>{FRWText.buyPremiumBtn}</Text>
        </Pressable>
      </View>

      <Text style={appStyles.frwBuyPremiumCancelText}>{FRWText.cancelText}</Text>
    </View>

  )
};
export default FrwBuyPremiumScreen;
