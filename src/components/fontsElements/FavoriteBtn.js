import { Pressable } from "react-native";

import StarFillSVG from '../../assets/icons/StarFill';
import StarNotFillSVG from '../../assets/icons/StarNotFill';
import { Sizes } from '../../constants/stylesConst';

import { appStyles } from '../../styles/appStyles';

const FavoriteBtn = ({isFavorite, onPressFavoriteBtn, font}) => {

  const favoriteIcon = isFavorite
    ? <StarFillSVG width={20} height={18} style={appStyles.fontIconIcon}/>
    : <StarNotFillSVG width={20} height={18} style={appStyles.fontIconIcon}/>


  return (
    <Pressable
        onPress={() => onPressFavoriteBtn(font)}
        hitSlop = {Sizes.hitSlopPressable}
    >
        {favoriteIcon}
    </Pressable>
  )
};

export default FavoriteBtn;
