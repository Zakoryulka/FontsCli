import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const TiktokIcon = (props) => (
  <Svg
    width="52px"
    height="61px"
    viewBox="0 0 52.0 61.0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M43.6 0c.9.2 1.7.3 2.6.3h.4v9.3c-.5 0-1.1.1-1.7.1-4.5 0-8.7-1.7-11.9-4.4v19.8c0 4-1.3 7.8-3.6 10.8-3.2 4.3-8.4 7.2-14.3 7.2-6.4 0-12-3.4-15.1-8.4 3.2 3 7.5 4.9 12.2 4.9 5.8 0 11-2.8 14.2-7.2 2.2-3 3.6-6.7 3.6-10.8V1.7c3.2 2.8 7.3 4.4 11.9 4.4.6 0 1.1 0 1.7-.1V0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M13.1.1v10.3c-.7-.2-1.5-.3-2.2-.3-4.4 0-8 3.7-8 8.2 0 1 .2 1.9.5 2.8-2-1.5-3.4-3.9-3.4-6.6C0 10 3.6 6.3 8 6.3c.8 0 1.5.1 2.2.3V0h.6c.8 0 1.6 0 2.3.1z" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M2.4 0v1.4c.2 1.6.7 3.2 1.4 4.7C2 4.5.7 2.3 0 0h2.4z" />
      </ClipPath>
      <ClipPath id="d">
        <Path d="M33.3 0c.7 2.4 2 4.5 3.8 6.1 1.8 3.6 5.2 6.3 9.2 7.2v6c-.5.1-1.1.1-1.7.1-4.5 0-8.7-1.7-11.9-4.4v19.8c0 4-1.3 7.8-3.6 10.8-3.3 4.4-8.4 7.2-14.2 7.2-4.7 0-9-1.9-12.2-4.9C1 45.1 0 41.9 0 38.4c0-9.7 7.7-17.6 17.3-17.9v6.6c-.7-.2-1.5-.3-2.2-.3-4.4 0-8 3.7-8 8.2 0 2.7 1.3 5.2 3.4 6.6 1.1 3.1 4.1 5.4 7.5 5.4 4.4 0 8-3.7 8-8.2V0h7.3z" />
      </ClipPath>
      <ClipPath id="e">
        <Path d="M17.8 0c.8 0 1.6.1 2.3.2v3.4c-9.6.3-17.3 8.2-17.3 17.9 0 3.5 1 6.7 2.7 9.5C2.1 27.7 0 23.1 0 17.9 0 8 8 0 17.8 0z" />
      </ClipPath>
      <ClipPath id="f">
        <Path d="M22.3 0v.2c0 .4 0 .8.1 1.2 0 .8.2 1.7.4 2.5h-7.3v38.6c0 4.5-3.6 8.2-8 8.2-3.5 0-6.4-2.2-7.5-5.4 1.3.9 2.9 1.5 4.6 1.5 4.4 0 8-3.6 8-8.1V0h9.7z" />
      </ClipPath>
      <ClipPath id="g">
        <Path d="M0 0c2.41 2.218 5.472 3.506 8.916 3.505L9.3 3.5v3.6C5.3 6.3 1.9 3.6 0 0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" transform="translate(5.4 3.9) translate(0 13.2)">
      <Path fill="#FF004F" d="M0 0L46.6 0 46.6 43.1 0 43.1 0 0z" />
    </G>
    <G clipPath="url(#b)" transform="translate(5.4 3.9) translate(4.5 20.3)">
      <Path fill="#FF004F" d="M0 0L13.1 0 13.1 21.1 0 21.1 0 0z" />
    </G>
    <G clipPath="url(#c)" transform="translate(5.4 3.9) translate(30.7)">
      <Path fill="#FF004F" d="M0 0L3.8 0 3.8 6.1 0 6.1 0 0z" />
    </G>
    <G clipPath="url(#d)" transform="translate(2.8 3.9)">
      <Path fill="#FFF" d="M0 0L46.3 0 46.3 52.8 0 52.8 0 0z" />
    </G>
    <G clipPath="url(#e)" transform="translate(0 20.6)">
      <Path fill="#00F7EF" d="M0 0L20.1 0 20.1 31 0 31 0 0z" />
    </G>
    <G>
      <G clipPath="url(#f)" transform="translate(13.3)">
        <Path fill="#00F7EF" d="M0 0L22.8 0 22.8 50.7 0 50.7 0 0z" />
      </G>
    </G>
    <G>
      <G clipPath="url(#g)" transform="translate(39.8 10)">
        <Path fill="#00F7EF" d="M0 0L9.3 0 9.3 7.1 0 7.1 0 0z" />
      </G>
    </G>
  </Svg>
)

export default TiktokIcon;
