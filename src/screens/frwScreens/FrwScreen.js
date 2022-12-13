import { View, Text, Pressable } from "react-native";

import ButtonIcon from "../../components/buttons/ButtonIcon";

import { Sizes, Colors } from '../../constants/stylesConst';
import { appStyles } from '../../styles/appStyles';

const FrwScreen = (props) => {
  const {text, btnLabel, onPress, onPressClose, screen} = props;

  return (
    <View style={appStyles.frwScreen}>

      <View style={appStyles.frwCloseBtnContainer}>
        <ButtonIcon
          icon={"close"}
          onPress={onPressClose}
        />
      </View>

      <View style={appStyles.frwScreenInfoWrapper}>
        <View style={appStyles.frwImgContainer}></View>
        <Text style={appStyles.frwScreenLabel}>{text}</Text>
        <View style={appStyles.frwScreenDotsContainer}>
          <View style={[appStyles.frwScreenDotItem,
            {marginRight: Sizes.dotSize * 1.5,
              backgroundColor: screen === "FirstScreen" ? Colors.dotActive : Colors.dotNotActive,
            }]}
          />
          <View style={[appStyles.frwScreenDotItem,
            {marginRight: Sizes.dotSize * 1.5,
              backgroundColor: screen === "SecondScreen" ? Colors.dotActive : Colors.dotNotActive,
            }]}
          />
          <View style={[appStyles.frwScreenDotItem,
            {backgroundColor: screen === "ThirdScreen" ? Colors.dotActive : Colors.dotNotActive}]}
          />
        </View>
      </View>

      <View
        style={appStyles.frwScreenOuterBtn}
      >
        <Pressable
          style={appStyles.frwScreenBtn}
          android_ripple={{color: Colors.frwBtnRipple}}
          onPress={onPress}
          hitSlop = {Sizes.hitSlopPressable}
        >
            <Text style={appStyles.frwScreenBtnText}>{btnLabel}</Text>
        </Pressable>
      </View>
    </View>

  )
};
export default FrwScreen;
