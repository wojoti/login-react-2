import React, { ReactNode } from "react";
import styled from "styled-components";
import { Wrapper } from "./Section.style";

type Props = {
  children: ReactNode;
};

const Section = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;

  {
    /* <Wrapper mt=0>{props.children}</Wrapper> */
  }
};

export default Section;
