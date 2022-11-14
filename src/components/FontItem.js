import { useRef, memo } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import CrownSVG from '../assets/icons/Crown';

import { appStyles } from '../styles/appStyles';

const FontItem = memo((props) => {
  const { fontDisplayName,
    font,
    isPremium,
    fontColor,
    bg,
    opacity,
    padding,
    radius,
    fontSize,
    letterSpacing,
    setLineHeight,
    alignSelf,
    alignText,
    enteredText,
    onItemPress,
    onLongItemPress
  } = props;

  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const viewShotRef = useRef();

  const PremiumIcon = () => {
    return (
      <CrownSVG width={20} height={18} style={appStyles.fontIconIcon}/>
    )
  };

  const FreeIcon = () => {
    return (
      <View style={[appStyles.fontIconIcon, {backgroundColor: 'transparent'}]} />
    )
  };

  const icon = isPremium === "premium" ? <PremiumIcon /> : <FreeIcon />;

  return (
    <>
      <Pressable
        style={appStyles.fontButton}
        onPress={() => onItemPress(viewShotRef, isPremium)}
        onLongPress={() => onLongItemPress(viewShotRef, fontDisplayName, font, isPremium)}
      >
        {icon}
        <View style={appStyles.fontWrapper}>
          <View
            ref={viewShotRef}
            collapsable={false}
            style={{
              backgroundColor: bg,
              opacity: opacity,
              alignSelf: alignSelf,
              padding: padding,
              borderRadius: radius
            }}
          >
            <Text
              style={{
                fontFamily: font,
                color: fontColor,
                fontSize: fontSize,
                letterSpacing: letterSpacing,
                lineHeight: setLineHeight(fontDisplayName),
                textAlign: alignText
              }}
            >
              {enteredText === '' ? fontDisplayName : enteredText}
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[appStyles.fontItemDivider, {backgroundColor: colorsStyle.divider }]} />
    </>
  )
});

export default FontItem;
