import { useMemo } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";

import { Sizes } from "../constants/stylesConst";

import InfoRound from "../assets/icons/Info";
import PaletteSVG from '../assets/icons/Palette';
import FontLeftSVG from '../assets/icons/FontLeft';
import FontCenterSVG from '../assets/icons/FontCenter';
import FontRightSVG from '../assets/icons/FontRight';
import CloseSVG from '../assets/icons/CancelRound';
import ListSVG from '../assets/icons/List';
import TextIcon from '../assets/icons/TextIcon';
import LightThemeIcon from '../assets/icons/LightTheme';
import DarkThemeIcon from '../assets/icons/DarkTheme';

import { appStyles } from '../styles/appStyles';

const ButtonIcon = ({onPress, icon, marginRifgt, visible}) => {
    const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
    const size = 28;
    const alignTextIconSize = 27;


    const setIconBtnColor = useMemo(() => (!visible ? colorsStyle.btnIcon : colorsStyle.btnIconPressed), [visible, colorsStyle]);

    const renderIcon = useMemo(() => {
        switch (icon) {
            case "info":
                return (<InfoRound fill={setIconBtnColor} width={size} height={size}/>)  // +
            case "palette":
                return (<PaletteSVG width={size} height={size} fill={setIconBtnColor} />)  // +
            case "flex-start":
                return (<FontLeftSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />) // +
            case "center":
                return (<FontCenterSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />) // +
            case "flex-end":
                return (<FontRightSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />) // +
            case "close":
                return (<CloseSVG width={size} height={size} fill={colorsStyle.btnIcon} />) // +
            case "showMore":
                return (<ListSVG width={size} height={size} fill={setIconBtnColor} />)      // +
            case "clearText":
                return (<CloseSVG width={20} height={20} fill={'grey'} />)                  // +
            case "text":
                return (<TextIcon width={27} height={size} fill={setIconBtnColor} />)
            case "lightTheme":
                return (<LightThemeIcon width={size} height={size} fill={setIconBtnColor} />)   // +
            case "darkTheme":
                return (<DarkThemeIcon width={size} height={size} fill={setIconBtnColor} />)   // +
            default:
                throw new Error();
        }
    }, [colorsStyle, icon, visible]);

    return (
    <Pressable
        style={!marginRifgt ? appStyles.buttonIcon : [appStyles.buttonIcon, appStyles.buttonIconMR] }
        onPress={onPress}
        hitSlop = {Sizes.hitSlopPressable}
    >
        {renderIcon}
    </Pressable>
)}

export default ButtonIcon;
