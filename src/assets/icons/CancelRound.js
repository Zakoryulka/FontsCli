import * as React from "react";
import Svg, { Path} from "react-native-svg";

const CancelRound = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="1.5 1.5 21 21"
    {...props}
  >
    <Path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.707 13.293a.999.999 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 12 7.293 8.707a.999.999 0 1 1 1.414-1.414L12 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414L13.414 12l3.293 3.293z" />
  </Svg>
)

export default CancelRound;
