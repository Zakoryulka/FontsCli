import { useSelector, } from "react-redux";
import { Text, View} from 'react-native';

const FontItemActive = () => {
  const fontColor = useSelector(state => state.colorParametrs.currentFontColor);
  const bg = useSelector(state => state.colorParametrs.currentBg);
  const opacity = useSelector(state => state.colorParametrs.currentOpacity);
  const padding = useSelector(state => state.colorParametrs.currentPadding);
  const radius = useSelector(state => state.colorParametrs.currentRadius);
  const fontSize = useSelector(state => state.fontParametrs.currentFontSize);
  const letterSpacing = useSelector(state => state.fontParametrs.currentLetterSpacing);
  const lineSpacing = useSelector(state => state.fontParametrs.currentLineSpacing);
  const alignSelf = useSelector(state => state.aligmentParametrs.currentAlignSelf);
  const alignText = useSelector(state => state.aligmentParametrs.currentAlignText);
  const enteredText = useSelector(state => state.textInput.enteredText);
  const xItem = useSelector(state => state.alertSettings.xItem);
  const yItem = useSelector(state => state.alertSettings.yItem);
  const fontDisplayName = useSelector(state => state.alertSettings.activeFontDisplayName);
  const font = useSelector(state => state.alertSettings.activeFont);

  const choseLineHeight = () => {
    switch (font) {
      case 'BadScript':
        return (fontSize + 9) * lineSpacing;
      case 'ColorTube':
        return (fontSize + 9) * lineSpacing;
      case 'Storytella':
        return (fontSize + 1.4) * lineSpacing;
      case 'TagType':
        return (fontSize + 5) * lineSpacing;
      default:
        return fontSize * lineSpacing;
    }

  };

  return (
    <View
      collapsable={false}
      style={{
        position: 'absolute',
        top: yItem,
        left: xItem,
        backgroundColor: bg,
        opacity: opacity,
        alignSelf: alignSelf,
        padding: padding,
        borderRadius: radius
      }}
    >
      <Text
        style={[
          {
            fontFamily: font,
            color: fontColor,
            fontSize: fontSize,
            letterSpacing: letterSpacing,
            lineHeight: choseLineHeight(),
            textAlign: alignText
          }
        ]}
      >
        {enteredText === '' ? fontDisplayName : enteredText}
      </Text>
    </View>
  )
}

export default FontItemActive;
