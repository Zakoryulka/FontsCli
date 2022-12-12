import { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import sketchesData from '../../sketchesData.json';
import SketchGroupItem from "./SketchGroupItem";
import { sketchModalHandlers } from "../../handlers/sketchModalHandlers";

import { appStyles } from "../../styles/appStyles";

const data = sketchesData.data.sketches.map((item) => {
  return {
    id: item.id,
    groupName: item.groupName,
    folderName: item.folderName,
    cover: item.cover
  }
});


const SketchesGroupList = ({navigation}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const { setSketchGroupItemHandler } = sketchModalHandlers();

  const onPressHandler = (item) => {
    setSketchGroupItemHandler(item.id);
    navigation.navigate("SketchesList");
  }

  const renderItem = ({item}) => {
    return (
      <SketchGroupItem
        id={item.id}
        groupName={item.groupName}
        onPress={onPressHandler}
        uri={`asset:/images/sketches/${item.folderName}/${item.cover}.png`}
      />
    )
  };

  const setKeyExtractor = useCallback((item ) => item.id, []);

  return (
    <View style={[appStyles.fontsContainer, {backgroundColor: colorsStyle.primaryBg1}]}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={setKeyExtractor}
        style={appStyles.sketchGroupList}

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

export default SketchesGroupList;
