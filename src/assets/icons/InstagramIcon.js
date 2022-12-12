import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const InstagramIcon = (props) => (
  <Svg
    width="497px"
    height="497px"
    viewBox="0 0 497.0 497.0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M345.9.33c50.7.4 93 19.8 124.2 60.6 17.4 22.8 25.8 49 25.8 77.8v109.4c0 34.8-.7 69.7.2 104.5 1.5 61.6-37.2 109.2-86.5 130.4-19.8 8.5-40.6 13-62.1 13-67.3.1-134.7 1-202-.3-50.7-1-92.4-22.2-122.3-64-15.7-22-23.2-47-23.2-74.1v-215c0-58.5 28.5-99.4 79.1-126 22-11.5 45.9-16.4 70.8-16.5 65.3 0 130.7-.4 196 .2zM203.333 36.992L181 37.055c-11.167.031-22.333.059-33.5.076-14.3 0-28.1 2.9-41.5 7.9-36.8 13.7-71 48.4-69.4 99.5.75 21.625.68 43.21.521 64.782l-.066 8.628c-.078 10.065-.155 20.127-.155 30.19v110c0 16.4 3.8 31.8 12.3 45.7 22.3 36.5 56 54.3 97.8 55 67.1 1 134.3.4 201.5.2 16.5 0 32.5-3.4 47.4-10.5 40.6-19.4 63.3-50.3 63.101-96.7-.401-71-.101-142-.101-213 0-20.1-5.7-38.5-17.6-54.7-23-31.1-54.8-46.4-92.8-46.8-48.389-.578-96.778-.478-145.167-.34z" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M116.4 0C180.7-.1 232.9 51.4 233 114.9c0 63.4-52.1 115-116.4 115.1C52.1 230 .1 178.6 0 114.6-.1 51.6 52.3 0 116.4 0zm.2 36.9c-43.9 0-79.7 34.9-79.7 78 .1 43.2 35.8 78.2 79.7 78.1 43.9 0 79.5-35.1 79.4-78.3-.1-42.8-35.7-77.8-79.4-77.8z" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M24.4 0c13.5 0 24.5 11.5 24.5 25.6-.1 14.1-11.2 25.5-24.7 25.4C10.9 50.9 0 39.5 0 25.7-.1 11.6 10.9 0 24.4 0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0L496.142172 0 496.142172 496.426915 0 496.426915 0 0z" />
    </G>
    <G clipPath="url(#b)" transform="translate(131.9 124.13)">
      <Path d="M-1.84968143e-14 -2.46688791e-14L233.000285 -2.46688791e-14 233.000285 230.00029 -1.84968143e-14 230.00029 -1.84968143e-14 -2.46688791e-14z" />
    </G>
    <G clipPath="url(#c)" transform="translate(354 89.13)">
      <Path d="M-2.73505177e-14 0L48.9006765 0 48.9006765 51.0006529 -2.73505177e-14 51.0006529 -2.73505177e-14 0z" />
    </G>
  </Svg>
)

export default InstagramIcon;
