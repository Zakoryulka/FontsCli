import * as React from "react";
import Svg, { Defs, Path, ClipPath, G } from "react-native-svg";

const FontCenter = (props) => (
  <Svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="M30.24 28.397c.487 0 .902.178 1.245.535.343.358.515.78.515 1.266 0 .515-.172.944-.515 1.287a1.696 1.696 0 0 1-1.244.515H1.8c-.514 0-.943-.172-1.286-.515C.172 31.142 0 30.713 0 30.198c0-.486.172-.908.515-1.266a1.711 1.711 0 0 1 1.287-.535H30.24Zm-7.034-7.121c.515 0 .944.179 1.287.536.343.358.515.78.515 1.266 0 .514-.172.943-.515 1.286-.343.344-.772.515-1.287.515H8.837c-.515 0-.944-.171-1.287-.515-.343-.343-.515-.772-.515-1.286 0-.486.172-.908.515-1.266a1.71 1.71 0 0 1 1.287-.536h14.37Zm7.035-7.12c.486 0 .901.178 1.244.536.343.357.515.779.515 1.265 0 .514-.172.943-.515 1.287a1.696 1.696 0 0 1-1.244.514H1.8c-.514 0-.943-.171-1.286-.514C.172 16.9 0 16.47 0 15.957c0-.486.172-.908.515-1.265a1.71 1.71 0 0 1 1.287-.537H30.24ZM23.206 7.12c.515 0 .944.171 1.287.515.343.343.515.772.515 1.286 0 .486-.172.908-.515 1.266a1.71 1.71 0 0 1-1.287.536H8.837a1.71 1.71 0 0 1-1.287-.536 1.82 1.82 0 0 1-.515-1.309c0-.486.172-.9.515-1.243.343-.344.772-.515 1.287-.515h14.37ZM30.241 0c.486 0 .901.172 1.244.515.343.343.515.772.515 1.287 0 .486-.172.908-.515 1.266a1.663 1.663 0 0 1-1.244.535H1.8c-.514 0-.943-.178-1.286-.535A1.82 1.82 0 0 1 0 1.759C0 1.273.172.858.515.515.858.172 1.287 0 1.802 0H30.24Z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path d="M0 0h32v32H0V0z" />
    </G>
  </Svg>
)

export default FontCenter;