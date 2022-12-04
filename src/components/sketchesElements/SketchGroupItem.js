import { memo } from "react";
import { Pressable, Text, Image } from "react-native";
import { useSelector } from "react-redux";


import { appStyles } from "../../styles/appStyles";

const SketchGroupItem = memo(({id, groupName, onPress, uri}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  return (
    <>
      <Pressable
        style={[
          appStyles.sketchGroupItemWrapper,
          {backgroundColor: colorsStyle.btn1}
        ]}
        onPress={() => onPress({id})}
      >
        <Text style={[
          appStyles.sketchGroupItemLabel,
          {color: colorsStyle.text}
        ]}>
          {groupName}
        </Text>
        <Image
          source={{uri: uri}}
          maxHeight={'100%'}
          maxWidth={'100%'}
          resizeMode="contain"
          style={appStyles.sketchGroupItemImg} />
      </Pressable>
    </>
  )
});


export default SketchGroupItem;
