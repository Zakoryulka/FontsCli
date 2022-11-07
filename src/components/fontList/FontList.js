import {
  Text,
  View,
  SectionList,
  Platform,
  Keyboard
} from "react-native";

import { useSelector } from "react-redux";

import FontItem from "../../components/FontItem";
import Notification from "../../components/Notification";

import { appStyles } from "../../styles/appStyles";

const FontList = () => {
  const fontsList = useSelector(state => state.textInput.fontsList);
  const familyFonts = useSelector(state => state.textInput.familyFonts);
  const notifyVisible = useSelector(state => state.alertSettings.notifyVisible);
  const notifyMessage = useSelector(state => state.alertSettings.notifyMessage);

  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  return (
    <View style={appStyles.fontsContainer}>
      {notification}
      <SectionList
          sections={fontsList}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={appStyles.title}>{title}</Text>
          )}
          renderItem={({item}) => (
            <FontItem
              fontDisplayName={item}
              font={Platform.OS === 'android' ?
                familyFonts.filter(font => font.displayName === item)[0].android
                : familyFonts.filter(font => font.displayName === item)[0].ios}
            />
          )}
          initialNumToRender={13}
          onScroll={() => {
              Keyboard.dismiss();
          }}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={true}
          bounces={false}
        />
    </View>
  )
};

export default FontList;
