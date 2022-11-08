import {
  Text,
  View,
  FlatList,
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
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const opacity = useSelector(state => state.colorParametrs.currentOpacity);
  const padding = useSelector(state => state.colorParametrs.currentPadding);
  const radius = useSelector(state => state.colorParametrs.currentRadius);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const alignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const enteredText = useSelector(state => state.textInput.enteredText);

  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  console.log('render FontList')


  return (
    <View style={appStyles.fontsContainer}>
      {notification}


      <FlatList
        data={familyFonts}
        renderItem={({item}) => (
          <FontItem
            fontDisplayName={item.displayName}
            font={Platform.OS === 'android' ?
              item.fontNameAndroid
              : item.fontNameIos}
            isPremium={item.isPremium}
            fontColor={fontColor}
            bg={bg}
            opacity={opacity}
            padding={padding}
            radius={radius}
            fontSize={fontSize}
            letterSpacing={letterSpacing}
            lineSpacing={lineSpacing}
            alignSelf={alignSelf}
            alignText={alignText}
            enteredText={enteredText}
        />
        )}
        keyExtractor={(item) => item.fontNameAndroid}

        onScroll={() => {
          Keyboard.dismiss();
        }}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        removeClippedSubviews={true} //
      />



      {/* <SectionList
          sections={fontsList}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={appStyles.title}>{title}</Text>
          )}
          renderItem={({item}) => (
            <FontItem
              fontDisplayName={item}
              font={Platform.OS === 'android' ?
                familyFonts.filter(font => font.displayName === item)[0].android
                : familyFonts.filter(font => font.displayName === item)[0].ios}
              fontColor={fontColor}
              bg={bg}
              opacity={opacity}
              padding={padding}
              radius={radius}
              fontSize={fontSize}
              letterSpacing={letterSpacing}
              lineSpacing={lineSpacing}
              alignSelf={alignSelf}
              alignText={alignText}
              fontsList={fontsList}
              enteredText={enteredText}
            />
          )}
          onScroll={() => {
              Keyboard.dismiss();
          }}
          keyExtractor={(item, index) => item + index}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={true}
          removeClippedSubviews={true} //

        //   maintainVisibleContentPosition={{
        //     minIndexForVisible: 1,
        //  }}    // only for IOS
          // bounces={false}
          maxToRenderPerBatch={10}
          // progressViewOffset={1000}
          // onEndReachedThreshold={2}

        /> */}
    </View>
  )
};

export default FontList;
