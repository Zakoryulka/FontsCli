import { useCallback, memo } from "react";
import { View, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import StopSVG from '../assets/icons/Block';

import { Colors } from '../constants/stylesConst';
import { Sizes } from "../constants/stylesConst";

import { appStyles } from "../styles/appStyles";

const ColorItemButton = memo(({children, item, currentData, onPressChangeColor}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  return (
    <View
      style={[
        appStyles.colorButtonWrapper,
        {
          borderColor: item === currentData && item != 'transparent' ?
          colorsStyle.colorBtnActive :
          'transparent'
        }
      ]}
    >
      <Pressable
        style={
          item !== 'transparent' ?
          [{
            backgroundColor: item,
            borderColor: colorsStyle.primaryBg
          },
          appStyles.colorButton] :
          appStyles.transparentButton
        }
        onPress={() => onPressChangeColor(item)}
        hitSlop = {Sizes.hitSlopPressable}
      >
        {children}
      </Pressable>
    </View>
  )
});

const SettingColorSlider = ({dataList, currentData, transparent, onPressChangeColor}) => {

  const renderItem = ({item}) =>  item !== 'transparent' ?
  <ColorItemButton
     item={item}
     currentData={currentData}
     onPressChangeColor={onPressChangeColor}
   /> :
  <ColorItemButton
    item={item}
    currentData={currentData}
    onPressChangeColor={onPressChangeColor}
    children={<StopSVG width={32} height={32} fill={item === currentData ? Colors.btnIconPressed : '#969696'}/>}
  />;

  const setKeyExtractor = useCallback((item, index) => item + index);

  return (
    <FlatList
      data={transparent === true ? ['transparent', ...dataList] : dataList}
      horizontal={true}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={setKeyExtractor}

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

export default SettingColorSlider;
