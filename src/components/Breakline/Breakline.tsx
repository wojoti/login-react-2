import React from "react";
import { WrapperA, WrapperB, WrapperC, Text } from "./Breakline.style";

type Props = {
  children?: string;
};

const Button = (props: Props) => {
  return (
    <WrapperA>
      <WrapperB>
        <WrapperC>
          <Text>{props.children}</Text>
        </WrapperC>
      </WrapperB>
    </WrapperA>
  );
};

export default Button;
