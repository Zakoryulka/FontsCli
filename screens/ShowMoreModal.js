import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  Linking,
  Platform
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import Share from 'react-native-share';
import Rate, { AndroidMarket } from 'react-native-rate';
// import {androidPlatform} from './buildConstants/androidPlatform';

import { closeShowMoreModal } from "../store/modal";
import { openInfoModal } from "../store/modal";

import { appStyles } from "../styles/appStyles";


const ShowMoreModal = () => {
  const showMoreModalVisible = useSelector(state => state.modals.showMoreModalVisible);
  const dispatch = useDispatch();
  const appProUrl = Platform.OS === 'ios' ? 'https://www.apple.com' : 'https://www.apple.com';  // исправить
  const appFreeUrl = Platform.OS === 'ios' ? 'https://www.apple.com' : 'https://www.apple.com'; // исправить
  const mailToUrl = 'aroslanova.y@icloud.com';          // исправить
  const mailToSubject = "My Subject";                   // исправить
  const mailToSubjectMessage = "My Message"             // исправить

  const onShareHandler = async () => {
    try {
      await Share.open({url: appFreeUrl})
    } catch(err) {
      console.log(err);
    }
  };

  // const onRateHandler = () => {
  //   const rateOptions = {

  //     //// Только для Android, способный ориентироваться как на магазины Google Play, так и на Amazon. Вы должны написать пользовательский код сборки, чтобы узнать, была ли сборка для Amazon App Store или Google Play.
  //     GooglePackageName: "com.mywebsite.myapp",
  //     AmazonPackageName: "com.mywebsite.myapp",
  //     preferredAndroidMarket: androidPlatform == 'google' ? AndroidMarket.Google: AndroidMarket.Amazon,

  //     // AppleAppID:"2193813192",
  //     // OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
  //     // preferInApp: false,
  //     // openAppStoreIfInAppFails: true,
  //     // fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
  //   }

  //   Rate.rate(rateOptions, (success, errorMessage)=>{
  //     if (success) {
  //       // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
  //       this.setState({rated:true})
  //     }
  //     if (errorMessage) {
  //       // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
  //       console.error(`Example page Rate.rate() error: ${errorMessage}`)
  //     }
  //   })
  // }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMoreModalVisible}
      swipeDirection={'down'}
      onSwipeMove = {() => dispatch(closeShowMoreModal())}
      style={{ margin: 0}}
      customBackdrop = {
        <TouchableWithoutFeedback onPress={() => dispatch(closeShowMoreModal())}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[appStyles.modalWrapper, appStyles.infoModal]}>
        <View style={appStyles.modalCloseHandler} />
        <Pressable
          style={appStyles.showMoreModalBtn}
          onPress={() => Linking.openURL(appProUrl)}
        >
          <Text style={appStyles.showMoreModalBtnLabel}>
            💎  Upgrate to pro
          </Text>
        </Pressable>

        <Pressable
          style={appStyles.showMoreModalBtn}
          onPress={() => dispatch(openInfoModal())}
        >
          <Text style={appStyles.showMoreModalBtnLabel}>
            ℹ️  How it works
          </Text>
        </Pressable>

        <View
          style={appStyles.ModalBtnsContainer}
        >
          <Pressable
            // onPress={}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              🌟  Rate App
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={() => onShareHandler()}
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              📢  Share App
            </Text>
          </Pressable>
          <View style={appStyles.showMoreModalBtndevider} />

          <Pressable
            onPress={() => Platform.OS === 'ios' ?
            console.log('mailto IOS') :
            Linking.openURL(`mailto:${mailToUrl}?subject=${mailToSubject}&body=${mailToSubjectMessage}`)  // проверить
          }
          >
            <Text style={appStyles.showMoreModalBtnLabel}>
              ✉️  Write to us
            </Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  )
};

export default ShowMoreModal;
