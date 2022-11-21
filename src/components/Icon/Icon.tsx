import React from "react";
import { Wrapper } from "./Icon.style";
export enum IconType {
  facebook = "./img/facebook.svg",
  linkedin = "./img/linkedin.svg",
  google = "./img/google.svg",
}

type Props = {
  type: IconType;
  w: number;
  h: number;
  alt: string;
};

export const Icon = (props: Props) => {
  return (
    <Wrapper src={props.type} w={props.w} h={props.h} alt={props.alt}></Wrapper>
  );
};
