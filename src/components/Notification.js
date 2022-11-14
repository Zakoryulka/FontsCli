import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View
} from "react-native";
import DoneSVG from '../assets/icons/Done'
import { notifyHide } from "../store/alertSettings";

import { appStyles } from '../styles/appStyles';

const Notification =({notificationText}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const dispatch = useDispatch();

  // Интервальный показ уведомления о вставке в сторис:
  useEffect(() => {
    const id = setTimeout(() => {;
      dispatch(notifyHide());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View style={[appStyles.imgNotificationWrapper,
      {backgroundColor: colorsStyle.notificationBg}
    ]}>
      <DoneSVG width={100} height={100} fill={'#8C9091'} />
      <Text style={appStyles.imgNotificationText}>
        {notificationText}
      </Text>
    </View>
  )
}

export default Notification;
