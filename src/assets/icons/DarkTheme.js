import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const DarkTheme = (props) => {
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
          <Path d="M14 0c.207 0 .428.006.661.02.233.012.532.032.895.058-.934.83-1.66 1.853-2.178 3.072A9.731 9.731 0 0012.6 7c0 2.333.817 4.317 2.45 5.95 1.633 1.633 3.617 2.45 5.95 2.45 1.348 0 2.631-.24 3.85-.72 1.219-.48 2.243-1.147 3.072-2.002.026.31.046.564.059.758.013.195.019.383.019.564 0 3.889-1.361 7.194-4.083 9.917C21.194 26.639 17.889 28 14 28c-3.889 0-7.194-1.361-9.917-4.083C1.361 21.194 0 17.889 0 14c0-3.889 1.361-7.194 4.083-9.917C6.806 1.361 10.111 0 14 0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path d="M0 0L28 0 28 28 0 28 0 0z" />
      </G>
    </Svg>
  )
}

export default DarkTheme;
