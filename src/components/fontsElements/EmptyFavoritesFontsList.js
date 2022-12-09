import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { appStyles } from "../../styles/appStyles";

const EmptyFavoritesFontsList = () => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
  return (
    <View style={[appStyles.fontsContainer, {backgroundColor: colorsStyle.primaryBg1}]}>
      <Text style={[appStyles.emptyFavoritesFontsListText, {color: colorsStyle.text}]}>
        No Favorites Fonts
      </Text>
    </View>
  )
};

export default EmptyFavoritesFontsList;
