import * as React from "react";
import Svg, { Defs, Path, ClipPath, Polygon, G } from "react-native-svg";

const FontLeft = (props) => (
  <Svg width='32' height='32' xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="M32 29.333V32H0v-2.667h32ZM20.978 22v2.667H0V22h20.978ZM32 14.667v2.666H0v-2.666h32ZM20.978 7.333V10H0V7.333h20.978ZM32 0v2.667H0V0h32Z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0h32v32H0V0z" />
    </G>
  </Svg>
)

export default FontLeft;
