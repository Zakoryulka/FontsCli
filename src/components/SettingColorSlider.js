import { View, FlatList, Pressable } from "react-native";
import StopSVG from '../assets/icons/Block';
import { Colors, FontSizes, Sizes } from '../constants/stylesConst';
import { appStyles } from "../styles/appStyles";

const SettingColorSlider = ({dataList, currentData, onPressChangeColor, transparent}) => {

  return (
    <FlatList
      data={transparent === true ? ['transparent', ...dataList] : dataList}
      horizontal={true}
      renderItem={({item}) => {
          if (item !== 'transparent') {
            return (
              <View
                style={[
                  appStyles.colorButtonBorder,
                  {
                    borderColor: item === currentData ? '#ffffff' : 'transparent'
                }]}
              >
                <Pressable
                  style={[
                    {
                      backgroundColor: item,
                    },
                    appStyles.colorButton,
                  ]}
                  onPress={() => onPressChangeColor(item)}
                  pressRetentionOffset={{ bottom: 16, left: 7, right: 7, top: 16 }}
                  // hitSlop = {Sizes.hitSlopPressable}
                />
              </View>
            )
          } else {
            return (
              <View
                style={[
                  appStyles.colorButtonBorder,
                  {
                    borderColor: 'transparent'
                }]}
              >
                <Pressable
                  style={appStyles.transparentButton}
                  onPress={() => onPressChangeColor(item)}
                  pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 10 }}
                >
                  <StopSVG width={32} height={32} fill={item === currentData ? Colors.btnIconPressed : '#969696'}/>
                </Pressable>
              </View>
            )
          }
        }
      }
      showsHorizontalScrollIndicator={false}
    />
  )
};

export default SettingColorSlider;
