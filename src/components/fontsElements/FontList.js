import { useCallback } from "react";
import { View,
  Platform,
  Keyboard
} from "react-native";
import { useSelector } from "react-redux";
// Library for maintainVisibleContentPosition for Android:
import { FlatList } from '@stream-io/flat-list-mvcp';

import FontItem from "./FontItem";
import Notification from "../../components/Notification";
import { contentItemHandlers } from "../../handlers/contentItemHandlers";

import { appStyles } from "../../styles/appStyles";

const FontList = ({data}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const notifyVisible = useSelector(state => state.alertSettings.notifyVisible);
  const notifyMessage = useSelector(state => state.alertSettings.notifyMessage);
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const opacity = useSelector(state => state.colorParametrs.currentOpacity);
  const padding = useSelector(state => state.colorParametrs.currentPadding);
  const radius = useSelector(state => state.colorParametrs.currentRadius);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const alignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const appIsPremium = useSelector(state => state.content.appIsPremium);
  const favoritesFamilyFonts = useSelector(state => state.textInput.favoritesFamilyFonts);


  const {choseLineHeight,
    onItemPressHandler,
    onLongFontItemPressHandler,
    onPressFontFavoriteBtnHandler
  } = contentItemHandlers();

  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  const renderItem = ({item}) =>
    <FontItem
      fontDisplayName={item.displayName}
      font={Platform.OS === 'android'
        ? item.fontNameAndroid
        : item.fontNameIos}
      isPremium={item.isPremium}
      // isFavorite={item.isFavorite}
      isFavorite={favoritesFamilyFonts.includes(item.fontNameAndroid)}
      appIsPremium={appIsPremium}
      fontColor={fontColor}
      bg={bg}
      opacity={opacity}
      padding={padding}
      radius={radius}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      setLineHeight={choseLineHeight}
      alignSelf={alignSelf}
      alignText={alignText}
      enteredText={enteredText}
      onItemPress={onItemPressHandler}
      onLongItemPress={onLongFontItemPressHandler}
      onPressFavoriteBtn={onPressFontFavoriteBtnHandler}
    />;

  const setKeyExtractor = useCallback((item) => item.fontNameAndroid, []);

  return (
    <View style={[appStyles.fontsContainer, {backgroundColor: colorsStyle.primaryBg1}]}>
      {notification}

      <FlatList
        // data={familyFonts}
        data={data}
        renderItem={renderItem}
        keyExtractor={setKeyExtractor}
        onScroll={() => {
          Keyboard.dismiss();
        }}

        //Оптимизация https://reactnative.dev/docs/optimizing-flatlist-configuration
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={7} //10 следующий фрагмент элементов, отображаемых при каждой прокрутке.
        updateCellsBatchingPeriod={30} // 50
        removeClippedSubviews={true} //
        windowSize={9}
        maintainVisibleContentPosition={{
          autoscrollToTopThreshold: 10,
          minIndexForVisible: 1,
      }}
      />
    </View>
  )
};

export default FontList;
