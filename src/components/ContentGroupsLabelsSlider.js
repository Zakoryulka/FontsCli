import { FlatList, View, Text, Pressable } from "react-native";
import { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeSketchContentGroupVisible } from "../store/sketchesScreen";

import { appStyles } from "../styles/appStyles";

const GroupLabelBtn = memo(({item}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  const sketchContentGroupVisible = useSelector(state => state.sketchesScreen.sketchContentGroupVisible);

  const dispatch = useDispatch();

  const onPressGroupLabelBtnHandler = () => {
    dispatch(changeSketchContentGroupVisible({newSketchContent: item}));
  }

  return (
    <Pressable
      style={[
        appStyles.groupLabelBtn,
        {
          backgroundColor: item === sketchContentGroupVisible ?
          colorsStyle.btnActive :
          colorsStyle.btn1
        }
      ]}
      onPress={onPressGroupLabelBtnHandler}
    >
      <Text style={[appStyles.groupLabelBtnText, {color: colorsStyle.text}]}>
        {item}
      </Text>
    </Pressable>
  )
});

// paddingVertical: 3,
// flex: 1,
// borderRadius: 15


const ContentGroupsLabelsSlider = ({labelsList}) => {

  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  // const labelsList = data.sketchGroupsLabels;

  const setKeyExtractor = useCallback((item, index) => item + index);

  const renderItem = ({item}) => <GroupLabelBtn item={item} />

  return (
    <FlatList
      data={labelsList}
      horizontal={true}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={setKeyExtractor}
      style={[appStyles.groupLabelBtnSlider, {backgroundColor: colorsStyle.primaryBg1}]}

      initialNumToRender={8}  // change
      maxToRenderPerBatch={8} //10 следующий фрагмент элементов, отображаемых при каждой прокрутке.
      removeClippedSubviews={true}
      windowSize={3}
      // getItemLayout={(data, index) => (
      //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
      // )} //getItemLayout— это необязательная оптимизация, которая позволяет пропустить измерение динамического содержимого, если вы заранее знаете размер (высоту или ширину) элементов. getItemLayoutэффективен, если у вас есть элементы фиксированного размера
    />
  )

};

export default ContentGroupsLabelsSlider;
