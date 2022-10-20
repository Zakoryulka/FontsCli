import { FlatList, Pressable } from "react-native";
import StopSVG from '../assets/icons/Block';
import { appStyles } from "../styles/appStyles";

const SettingColorSlider = ({dataList, onPressChangeColor, transparent}) => {

  return (
    <FlatList
      data={transparent === true ? ['transparent', ...dataList] : dataList}
      horizontal={true}
      renderItem={({item}) => {
          if (item !== 'transparent') {
            return (
              <Pressable
                style={[
                  {backgroundColor: item},
                  appStyles.colorButton,
                ]}
                onPress={() => onPressChangeColor(item)}
                pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 10 }}
              />
            )
          } else {
            return (
              <Pressable
                style={appStyles.transparentButton}
                onPress={() => onPressChangeColor(item)}
                pressRetentionOffset={{ bottom: 10, left: 6, right: 6, top: 10 }}
              >
                <StopSVG width={32} height={32} fill={'#969696'}/>
              </Pressable>
            )
          }
        }
      }
      showsHorizontalScrollIndicator={false}
    />
  )
};

export default SettingColorSlider;
