import * as React from "react";
import Svg, { Defs, Path, ClipPath, Polygon, G } from "react-native-svg";

const FontRight = (props) => (
  <Svg
    width="28px"
    height="28px"
    viewBox="0 0 28.0 28.0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M28 25.667V28H0v-2.333h28zm0-6.417v2.333H9.683V19.25H28zm0-6.417v2.334H0v-2.334h28zm0-6.416V8.75H9.683V6.417H28zM28 0v2.333H0V0h28z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0L28 0 28 28 0 28 0 0z" />
    </G>
  </Svg>
)

export default FontRight;
