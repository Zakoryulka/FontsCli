import { useSelector, } from "react-redux";
import { useCallback } from "react";
import { View} from 'react-native';

import * as data from "../assets/skethes/sketches";

import { appStyles } from '../styles/appStyles';

const SketchItemActive = () => {
  const xItem = useSelector(state => state.alertSettings.xItem);
  const yItem = useSelector(state => state.alertSettings.yItem);
  const widthItem = useSelector(state => state.alertSettings.widthItem);
  const heightItem = useSelector(state => state.alertSettings.heightItem);
  const activeSvgID = useSelector(state => state.alertSettings.activeSvgID);
  const svgColor = useSelector(state => state.sketchesScreen.currentSketchColor);
  const opacity = useSelector(state => state.sketchesScreen.currentSketchOpacity);

  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const svgsList = [...data.sketcheArrowSVGs,
    ...data.sketcheNoteSVGs,
    ...data.sketcheLineSVGs,
    ...data.sketchesSmileSVGs,
    ...data.sketcheScrawlSVGs,
    ...data.sketchesLoveSVGs,
    ...data.sketchesWeatherSVGs];

  const ActiveSVG = svgsList.filter((item) => item.id === activeSvgID)[0].svg;

  const svg = <ActiveSVG
    maxWidth={'100%'}
    maxHeight={'100%'}
    color={svgColor}
    opacity={opacity}
  />

  const padding = 10;
  const width = widthItem + padding * 2;
  const height = heightItem + padding * 2;
  const top = yItem - padding;
  const left = xItem - padding;

  return (
    <View
      collapsable={false}
      style={[appStyles.sketchWrapperActive,
        {
          position: 'absolute',
          padding: padding,
          top: top,
          left: left,
          width: width,
          height: height,
          backgroundColor: colorsStyle.primaryBg,
        }
      ]}
    >
      {svg}
    </View>
  )
}

export default SketchItemActive;
