import { Pressable } from "react-native";

import { Colors } from "../constants/stylesConst";
import { Sizes } from "../constants/stylesConst";

import InfoRound from "../assets/icons/InfoRound";
import PaletteSVG from '../assets/icons/Palette';
import FontLeftSVG from '../assets/icons/FontLeft';
import FontCenterSVG from '../assets/icons/FontCenter';
import FontRightSVG from '../assets/icons/FontRight';
import CloseSVG from '../assets/icons/CancelRound';
import ListSVG from '../assets/icons/List';
import TextIcon from '../assets/icons/TextIcon';

import { appStyles } from '../styles/appStyles';

const ButtonIcon = ({children, onPress, icon, marginRifgt, visible}) => {
    const size = 32;

    const setIconBtnColor = !visible ? Colors.btnIcon : Colors.btnIconPressed;

    const infoSVG = (icon === "info") ? <InfoRound fill={setIconBtnColor} width={size} height={size}/> : null;
    const paletteSVG = icon === "palette" ? <PaletteSVG width={size} height={27} fill={setIconBtnColor} /> : null;
    const fontLeftSVG = icon === "flex-start" ? <FontLeftSVG width={size} height={size} fill={Colors.btnIcon} /> : null;
    const fontCenterSVG = icon === "center" ? <FontCenterSVG width={size} height={size} fill={Colors.btnIcon} /> : null;
    const fontRightSVG = icon === "flex-end" ? <FontRightSVG fill={Colors.btnIcon} /> : null;
    const closeSVG = icon === "close" ? <CloseSVG width={32} height={32} fill={Colors.btnIcon} /> : null;
    const showMoreSVG = icon === "showMore" ? <ListSVG width={size} height={size} fill={setIconBtnColor} /> : null;
    const clearTextSVG = icon === "clearText" ? <CloseSVG width={20} height={20} fill={'grey'} /> : null;
    const textIcon = icon === "text" ? <TextIcon width={27} height={size} fill={setIconBtnColor} /> : null;

    return (
    <Pressable
        style={!marginRifgt ? appStyles.buttonIcon : [appStyles.buttonIcon, appStyles.buttonIconMR] }
        onPress={onPress}
        hitSlop = {Sizes.hitSlopPressable}
    >
        {children}
        {infoSVG}
        {paletteSVG}
        {fontLeftSVG}
        {fontCenterSVG}
        {fontRightSVG}
        {closeSVG}
        {showMoreSVG}
        {clearTextSVG}
        {textIcon}
    </Pressable>
)}

export default ButtonIcon;
