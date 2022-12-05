import { useSelector, } from "react-redux";
import { View, Image} from 'react-native';

import { appStyles } from '../../styles/appStyles';

const SketchItemActive = () => {
  const xItem = useSelector(state => state.alertSettings.xItem);
  const yItem = useSelector(state => state.alertSettings.yItem);
  const widthItem = useSelector(state => state.alertSettings.widthItem);
  const heightItem = useSelector(state => state.alertSettings.heightItem);
  const sketchColor = useSelector(state => state.sketchesScreen.currentSketchColor);
  const opacity = useSelector(state => state.sketchesScreen.currentSketchOpacity);
  const sketchesGroupSelected = useSelector(state => state.content.sketchesGroupSelected);
  const activeSketchID = useSelector(state => state.alertSettings.activeSketchID);

  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

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
      <Image
        source={{uri: `asset:/images/sketches/${sketchesGroupSelected}/${activeSketchID}.png`}}
        maxWidth={'100%'}
        maxHeight={'100%'}
        resizeMode="contain"
        style={appStyles.sketchImg}
        tintColor={sketchColor}
        opacity={opacity}
      />
    </View>
  )
}

export default SketchItemActive;
