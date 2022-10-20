import { Text, Pressable } from "react-native";

import InfoRound from "../assets/icons/InfoRound";
import PaletteSVG from '../assets/icons/Palette';
import FontLeftSVG from '../assets/icons/FontLeft';
import FontCenterSVG from '../assets/icons/FontCenter';
import FontRightSVG from '../assets/icons/FontRight';
import CloseSVG from '../assets/icons/CancelRound';
import ListSVG from '../assets/icons/List';

import { appStyles } from '../styles/appStyles';

const ButtonIcon = ({children, onPress, icon, marginRifgt}) => {
    const size = 32;
    const mainBtnColor = '#FFFFFF';

    const infoSVG = (icon === "info") ? <InfoRound fill={mainBtnColor} width={size} height={size}/> : null;
    const paletteSVG = icon === "palette" ? <PaletteSVG width={size} height={27} fill={mainBtnColor} /> : null;
    const fontLeftSVG = icon === "flex-start" ? <FontLeftSVG width={size} height={size} fill={mainBtnColor} /> : null;
    const fontCenterSVG = icon === "center" ? <FontCenterSVG width={size} height={size} fill={mainBtnColor} /> : null;
    const fontRightSVG = icon === "flex-end" ? <FontRightSVG width={size} height={size} fill={mainBtnColor} /> : null;
    const closeSVG = icon === "close" ? <CloseSVG width={size} height={size} fill={mainBtnColor} /> : null;
    const listSVG = icon === "list" ? <ListSVG width={size} height={size} fill={mainBtnColor} /> : null;

    return (
    <Pressable
        style={!marginRifgt ? appStyles.buttonIcon : [appStyles.buttonIcon, appStyles.buttonIconMR] }
        onPress={onPress}
    >
        {children}
        {infoSVG}
        {paletteSVG}
        {fontLeftSVG}
        {fontCenterSVG}
        {fontRightSVG}
        {closeSVG}
        {listSVG}
    </Pressable>
)}

export default ButtonIcon;
