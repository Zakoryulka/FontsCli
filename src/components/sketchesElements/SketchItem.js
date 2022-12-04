import { useRef, memo } from 'react';
import { View, Pressable, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import { Sizes } from '../../constants/stylesConst';
import { appStyles } from '../../styles/appStyles';

const windowWidth = Dimensions.get('window').width;

const SketchItem = memo((props) => {
  const {id,
    sketchColor,
    opacity,
    onItemPress,
    onLongItemPress,
    isPremium,
    uri
  } = props;

  const sketchItemSize = (windowWidth - Sizes.mainPadding * 4) / 3;

  const viewShotRef = useRef();

  return (
      <Pressable
        style={appStyles.sketchButton}
        onPress={() => {
          console.log(id);
          onItemPress(viewShotRef, isPremium)}}
        onLongPress={() => onLongItemPress(viewShotRef, isPremium, id)}
      >
        <View
          ref={viewShotRef}
          collapsable={false}
          style={[
            appStyles.sketchWrapper,
            {
              width: sketchItemSize,
              height: sketchItemSize
            }
          ]}
        >
          <Image
            source={{uri: uri}}
            maxWidth={'100%'}
            maxHeight={'100%'}
            resizeMode="contain"
            style={appStyles.sketchImg}
            tintColor={sketchColor}
            opacity={opacity}
          />
        </View>
      </Pressable>
  )
});

export default SketchItem;
