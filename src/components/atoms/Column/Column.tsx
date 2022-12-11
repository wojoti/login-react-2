import React from 'react';
import Wrapper from './Column.style';

interface Props {
  children?: React.ReactNode
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
  justify?: string
  items?: string
}

function Column(props: Props) {
  return (
    <Wrapper
      mt={props.mt}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
      pt={props.pt}
      pb={props.pb}
      pl={props.pl}
      pr={props.pr}
      justify={props.justify}
      items={props.items}
    >
      {props.children}
    </Wrapper>
  );
}

export default Column;
