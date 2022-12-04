import { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { sketchesGroupListShow } from "../../store/content";
import sketchesData from '../../sketchesData.json';
import SketchGroupItem from "./SketchGroupItem";

import { appStyles } from "../../styles/appStyles";

const data = sketchesData.data.sketches.map((item) => {
  return {
    id: item.id,
    groupName: item.groupName,
    folderName: item.folderName,
    cover: item.cover
  }
});

const SketchesGroupList = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const dispatch = useDispatch();

  const pressSketchGroupItemHandler = ({id}) => {
    console.log(id);
    dispatch(sketchesGroupListShow({newSketchGroup: id}));
  };

  const renderItem = ({item}) => {
    return (
      <SketchGroupItem
        id={item.id}
        groupName={item.groupName}
        onPress={pressSketchGroupItemHandler}
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
