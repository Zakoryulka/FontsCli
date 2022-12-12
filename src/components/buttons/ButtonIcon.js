import { useMemo } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";

import { Sizes } from "../../constants/stylesConst";

import InfoRound from "../../assets/icons/Info";
import PaletteSVG from '../../assets/icons/Palette';
import FontLeftSVG from '../../assets/icons/FontLeft';
import FontCenterSVG from '../../assets/icons/FontCenter';
import FontRightSVG from '../../assets/icons/FontRight';
import CloseSVG from '../../assets/icons/CancelRound';
import ListSVG from '../../assets/icons/List';
import TextIcon from '../../assets/icons/TextIcon';
import LightThemeIcon from '../../assets/icons/LightTheme';
import DarkThemeIcon from '../../assets/icons/DarkTheme';
import StickersIcon from '../../assets/icons/StickersIcon';
import StickersSettingsIcon from '../../assets/icons/StickersSettingsIcon';
import ArtsIcon from '../../assets/icons/ArtsIcon';
import GoBackIcon from '../../assets/icons/GoBack';

import { appStyles } from '../../styles/appStyles';

const ButtonIcon = ({onPress, icon, marginRifgt, visible}) => {
    const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);
    const size = 24;
    const alignTextIconSize = 22;

    const setIconBtnColor = useMemo(() => (visible
        ? colorsStyle.btnIconPressed
        : colorsStyle.btnIcon), [visible, colorsStyle]
    );


    const renderIcon = useMemo(() => {
        switch (icon) {
            case "info":
                return (<InfoRound fill={setIconBtnColor} width={size} height={size}/>)
            case "palette":
                return (<PaletteSVG width={size} height={size} fill={setIconBtnColor} />)
            case "flex-start":
                return (<FontLeftSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />)
            case "center":
                return (<FontCenterSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />)
            case "flex-end":
                return (<FontRightSVG width={alignTextIconSize} height={alignTextIconSize} fill={colorsStyle.btnIcon} />)
            case "close":
                return (<CloseSVG width={size} height={size} fill={colorsStyle.btnIcon} />)
            case "showMore":
                return (<ListSVG width={size} height={size} fill={setIconBtnColor} />)
            case "clearText":
                return (<CloseSVG width={20} height={20} fill={'grey'} />)
            case "text":
                return (<TextIcon width={24} height={size} fill={setIconBtnColor} />)
            case "lightTheme":
                return (<LightThemeIcon width={size} height={size} fill={setIconBtnColor} />)
            case "darkTheme":
                return (<DarkThemeIcon width={size} height={size} fill={setIconBtnColor} />)
            case "stickers":
                return (<StickersIcon width={size} height={size} fill={setIconBtnColor} />)
            case "settings":
                return (<StickersSettingsIcon width={size} height={size} fill={setIconBtnColor} />)
            case "arts":
                return (<ArtsIcon width={size} height={size} fill={setIconBtnColor} />)
            case "goBack":
                return (<GoBackIcon width={size} height={size} fill={setIconBtnColor} />)
            default:
                throw new Error();
        }
    }, [colorsStyle, icon, visible]);

    return (
    <Pressable
        style={!marginRifgt
            ? appStyles.buttonIcon
            : [appStyles.buttonIcon, appStyles.buttonIconMR]
        }
        onPress={onPress}
        hitSlop = {Sizes.hitSlopPressable}
    >
        {renderIcon}
    </Pressable>
)}

export default ButtonIcon;
