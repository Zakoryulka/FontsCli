import { useRef, memo } from 'react';
import { View, Pressable, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { appStyles } from '../styles/appStyles';

const SketchItem = memo((props) => {
  const {item,
    id,
    svgColor,
    opacity,
    onItemPress,
    onLongItemPress,
    isPremium
  } = props;

  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  const viewShotRef = useRef();

  // const SketchSVG = item;

  // const svg = item === 'empty' ? null :
  // <SketchSVG
  //   maxWidth={'100%'}
  //   maxHeight={'100%'}
  //   color={svgColor}
  //   opacity={opacity}
  // />

  const PNG =           <Image
  // source={require('../assets/skethes/Arrow31.png')}
  source={require('../assets/skethes/Shine.png')}
    maxWidth={'100%'}
    maxHeight={'100%'}r
  // resizeMode="cover"
  // style={{backgroundColor: 'red'}}
  tintColor={svgColor}
  opacity={opacity}
  />

  return (
    <>
      <Pressable
        style={appStyles.sketchButton}
        onPress={() => onItemPress(viewShotRef, isPremium)}
        onLongPress={() => onLongItemPress(viewShotRef, isPremium, id)}
      >
        <View
          ref={viewShotRef}
          collapsable={false}
          style={appStyles.sketchWrapper}
        >
          {/* {svg} */}
          {PNG}
        </View>
      </Pressable>
    </>
  )
});

export default SketchItem;
