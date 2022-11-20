import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const StickersSettingsIcon = (props) => {
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
          <Path d="M14.272 19.25v3.228H28v2.333H14.272V28H11.94v-8.75h2.333zm-4.666 3.228v2.333H0v-2.333h9.606zm0-12.911v8.789H7.272v-3.19H0v-2.333h7.272V9.567h2.334zM28 12.833v2.334H11.939v-2.334H28zM20.728 0v3.189H28v2.333h-7.272V8.75h-2.334V0h2.334zM16.06 3.189v2.333H0V3.19h16.061z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path d="M0 0L28 0 28 28 0 28 0 0z" />
      </G>
    </Svg>
  )
}

export default StickersSettingsIcon;
