import { useCallback } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
// Library for maintainVisibleContentPosition for Android:
import { FlatList } from '@stream-io/flat-list-mvcp';

import sketchesData from '../../sketchesData.json'

import SketchItem from './SketchItem';
import Notification from "../../components/Notification";
import { contentItemHandlers } from "../../handlers/contentItemHandlers";

import { appStyles } from "../../styles/appStyles";

const SketchesList = () => {
  const sketchesGroupSelected = useSelector(state => state.content.sketchesGroupSelected);
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const notifyVisible = useSelector(state => state.alertSettings.notifyVisible);
  const notifyMessage = useSelector(state => state.alertSettings.notifyMessage);
  const currentSketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);
  const currentOpacity = useSelector(state => state.sketchesScreen.currentSketchOpacity);

  const dataList = sketchesData.data.sketches.filter((item) => item.id === sketchesGroupSelected)[0].sketchList;

  const {onItemPressHandler,
    onLongSketchItemPressHandler
  } = contentItemHandlers();

  const notification = notifyVisible
  ? <Notification
      notificationText={notifyMessage}
    />
  : null;

  const renderItem = ({item}) => {
    return (
      <SketchItem
        id={item.id}
        sketchColor={currentSketchColor}
        opacity={currentOpacity}
        onItemPress={onItemPressHandler}
        onLongItemPress={onLongSketchItemPressHandler}
        isPremium={'free'}     // 'free' or 'premium'
        uri={`asset:/images/sketches/${sketchesGroupSelected}/${item.fileName}.png`}
      />
    )
  };

  const setKeyExtractor = useCallback((item) => item.id, []);


  return (
    <View style={[appStyles.fontsContainer, {backgroundColor: colorsStyle.primaryBg1}]}>
      {notification}

      <FlatList
        data={dataList}
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
