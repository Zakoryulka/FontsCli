import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View
} from "react-native";
import DoneSVG from '../assets/icons/Done'
import { pastInStoryNotifHide } from "../store/modal";

import { appStyles } from '../styles/appStyles';

const PastInStoryNotifivation =({}) => {
  const dispatch = useDispatch();

  // Интервальный показ уведомления о вставке в сторис:
  useEffect(() => {
    const id = setTimeout(() => {;
      dispatch(pastInStoryNotifHide());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View style={appStyles.imgSavedNotWrapper}>
      <DoneSVG width={100} height={100} fill={'#8C9091'} />
      <Text style={appStyles.imgSavedNotText}>
        Past in Story
      </Text>
    </View>
  )
}

export default PastInStoryNotifivation;
