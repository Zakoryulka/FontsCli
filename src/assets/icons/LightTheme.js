import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const LightTheme = (props) => {
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
          <Path d="M14.955 22.91V28h-1.91v-5.09h1.91zm6.013-3.278l3.15 3.15-1.336 1.336-3.15-3.15 1.336-1.336zm-13.936 0l1.336 1.336-3.15 3.15-1.336-1.336 3.15-3.15zM14 7.636c1.76 0 3.261.62 4.502 1.862 1.241 1.24 1.862 2.741 1.862 4.502 0 1.76-.62 3.261-1.862 4.502-1.24 1.241-2.741 1.862-4.502 1.862-1.76 0-3.261-.62-4.502-1.862-1.241-1.24-1.862-2.741-1.862-4.502 0-1.76.62-3.261 1.862-4.502 1.24-1.241 2.741-1.862 4.502-1.862zm-8.91 5.41v1.909H0v-1.91h5.09zm22.91 0v1.909h-5.09v-1.91H28zM5.218 3.881l3.15 3.15-1.336 1.336-3.15-3.15 1.336-1.336zm17.564 0l1.336 1.336-3.15 3.15-1.336-1.336 3.15-3.15zM14.955 0v5.09h-1.91V0h1.91z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path d="M0 0L28 0 28 28 0 28 0 0z" />
      </G>
    </Svg>
  )
}

export default LightTheme;
