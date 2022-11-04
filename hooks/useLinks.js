import { View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  Linking,
  Platform
} from 'react-native';
import Share from 'react-native-share';

import { urls } from '../constants/urls';

export const useLinks = () => {

  const linking = (link) => {
    Linking.openURL(link);
  };

  const addRate = () => {
    linking(urls.rateUrl);
  };

  const upgrateToPro = () => {
    linking(urls.appProUrl);
  };

  const shareApp = async() => {
    try {
      await Share.open({url: urls.appFreeUrl})
    } catch(err) {
      console.log(err);
    }
  }

  const mailToUs = () => {
    Platform.OS === 'ios' ?
      console.log('mailto IOS') :
      Linking.openURL(`mailto:${urls.mailToUrl}?subject=${urls.mailToSubject}&body=${urls.mailToSubjectMessage}`)  // проверить
  }




  return { addRate, upgrateToPro, shareApp, mailToUs }
}
