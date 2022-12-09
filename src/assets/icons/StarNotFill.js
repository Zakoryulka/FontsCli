import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const StarNotFill = (props) => (
  <Svg
    width="32px"
    height="30px"
    viewBox="0 0 32.0 30.0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M16 0l4.513 10.48L32 11.47l-8.707 7.466L25.892 30 16 24.153 6.108 30l2.599-11.064L0 11.469l11.487-.99L16 0zm0 5.262l-3.1 7.107-7.84.674 5.971 5.128-1.823 7.601L16 21.724l6.792 4.093-1.823-7.601 5.971-5.128-7.84-.674L16 5.262z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0L32 0 32 30 0 30 0 0z" />
    </G>
  </Svg>
)

export default StarNotFill;
