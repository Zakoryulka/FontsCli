
import { useSelector } from "react-redux";
import { Text } from "react-native";

import { appStyles } from "../styles/appStyles";

const ModalLabel = ({children, sliderLabel}) => {
  const colorsStyle = useSelector(state => state.colorTheme.colorsStyle);

  return (
    <Text style={[appStyles.settingsSectioLabel, {
      color: colorsStyle.text,
      marginBottom: sliderLabel ? 0 : 10
    }]}>
      {children}
    </Text>
  )
};

export default ModalLabel;
