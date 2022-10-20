import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const InfoRound = (props) => (
  <Svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="M16 0c2.22 0 4.306.41 6.26 1.23 1.954.819 3.65 1.953 5.088 3.403 1.437 1.45 2.572 3.153 3.404 5.107C31.584 11.694 32 13.78 32 16c0 2.22-.41 4.293-1.23 6.222-.819 1.93-1.96 3.62-3.422 5.07a16.582 16.582 0 0 1-5.107 3.44C20.3 31.579 18.22 32 16 32c-2.22 0-4.3-.416-6.241-1.248a16.072 16.072 0 0 1-5.087-3.424c-1.45-1.45-2.592-3.152-3.424-5.106C.416 20.268 0 18.194 0 16c0-2.22.422-4.3 1.267-6.241A16.582 16.582 0 0 1 4.71 4.652 15.658 15.658 0 0 1 9.797 1.23C11.738.41 13.807 0 16 0Zm1.702 14.487H14.45v9.494h3.253v-9.494ZM16 8.095c-.504 0-.914.151-1.23.454-.314.302-.472.706-.472 1.21 0 .48.164.883.492 1.21.327.328.73.492 1.21.492s.883-.158 1.21-.473c.328-.315.492-.712.492-1.191 0-.505-.164-.914-.492-1.23A1.677 1.677 0 0 0 16 8.096Z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0h32v32H0V0z" />
    </G>
  </Svg>
)

export default InfoRound;