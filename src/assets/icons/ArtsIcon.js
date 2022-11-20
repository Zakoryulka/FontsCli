import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const ArtsIcon = (props) => {
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
          <Path d="M2.601 15.262V25.4h10.137V28H0V15.262h2.601zm25.399 0V28H15.262v-2.601H25.4V15.262H28zm-10.175-.88l5.738 7.727H4.59l4.629-6.043 3.557 4.857 5.05-6.54zM12.738 0v2.601H2.6v10.137H0V0h12.738zM28 0v12.738h-2.601V2.6H15.262V0H28zm-8.492 6.426c.587 0 1.078.198 1.473.593.395.395.593.886.593 1.473 0 .586-.198 1.077-.593 1.472-.395.396-.886.593-1.473.593-.586 0-1.077-.197-1.472-.593-.396-.395-.593-.886-.593-1.472 0-.587.197-1.078.593-1.473.395-.395.886-.593 1.472-.593z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path d="M0 0L28 0 28 28 0 28 0 0z" />
      </G>
    </Svg>
  )
}

export default ArtsIcon;
