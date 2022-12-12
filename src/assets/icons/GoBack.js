
import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const GoBack = (props) => {
  return (
    <Svg
      width="28px"
      height="28px"
      viewBox="0 0 28.0 28.0"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M14 0l1.838 1.837-10.85 10.85H28v2.626H4.988l10.85 10.85L14 28 0 14 14 0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path d="M0 0L28 0 28 28 0 28 0 0z" />
      </G>
    </Svg>
  )
}

export default GoBack;
