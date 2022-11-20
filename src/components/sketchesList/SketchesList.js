import { useCallback } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
// Library for maintainVisibleContentPosition for Android:
import { FlatList } from '@stream-io/flat-list-mvcp';

import SketchItem from "../SketchItem";
import Notification from "../../components/Notification";
import * as data from "../../assets/skethes/sketches";
import { contentItemHandlers } from "../../handlers/contentItemHandlers";

import { appStyles } from "../../styles/appStyles";

const SketchesList = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const notifyVisible = useSelector(state => state.alertSettings.notifyVisible);
  const notifyMessage = useSelector(state => state.alertSettings.notifyMessage);
  const sketchContentGroupVisible = useSelector(state => state.sketchesScreen.sketchContentGroupVisible);
  const currentSketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);
  const currentOpacity = useSelector(state => state.sketchesScreen.currentSketchOpacity);

  const {onItemPressHandler,
    onLongSketchItemPressHandler
  } = contentItemHandlers();

  const setData = () => {
    switch (sketchContentGroupVisible) {
      case "All":
        return [...data.sketcheArrowSVGs,
          ...data.sketcheNoteSVGs,
          ...data.sketcheLineSVGs,
          ...data.sketchesSmileSVGs,
          ...data.sketcheScrawlSVGs,
          ...data.sketchesLoveSVGs,
          ...data.sketchesWeatherSVGs];
      case "Arrors":
        // return data.sketcheArrowSVGs;
        return null;
      case "Notes":
        // return data.sketcheNoteSVGs;
         return null;
      case "Lines":
        // return data.sketcheLineSVGs;
         return null;
      case "Smiles":
        // return data.sketchesSmileSVGs;
         return null;
      case "Scrawl":
        // return data.sketcheScrawlSVGs;
         return null;
      case "Love":
        // return data.sketchesLoveSVGs;
         return null;
      case "Weather":
        // return data.sketchesWeatherSVGs;
         return null;
      case "PNG":
        console.log(data.png);
        return data.png;
    }

  };

  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  const renderItem = ({item}) => {
    return (
      <SketchItem
        item={item.svg}
        id={item.id}
        svgColor={currentSketchColor}
        opacity={currentOpacity}
        onItemPress={onItemPressHandler}
        onLongItemPress={onLongSketchItemPressHandler}
        isPremium={'free'}     // 'free' or 'premium'
      />
    )
  };

  const setKeyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={[appStyles.fontsContainer, {backgroundColor: colorsStyle.primaryBg1}]}>
      {notification}

      <FlatList
        data={setData()}
        renderItem={renderItem}
        keyExtractor={setKeyExtractor}
        horizontal={false}
        numColumns={3}
        style={appStyles.sketchList}
        columnWrapperStyle={appStyles.sketchListRow}

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
  );
};

export default SketchesList;
