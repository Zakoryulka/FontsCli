
import Slider from '@react-native-community/slider';
import { appStyles } from '../styles/appStyles';

const SliderItem = ({min, max, changeValue, step, value}) => {
  return (
    <Slider
      style={appStyles.slider}
      minimumValue={min}
      maximumValue={max}
      value={value}
      step={step}
      minimumTrackTintColor="#027AF9"
      maximumTrackTintColor="#A7A6A6"
      onValueChange={(value) => (changeValue(value))}
      thumbTintColor='#ffffff'
    />
  )
}

export default SliderItem;
