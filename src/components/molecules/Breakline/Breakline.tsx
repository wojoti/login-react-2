import React from 'react';
import {
  MaxWidthDiv,
  GreyLineDiv,
  RelativeDiv,
  StyledText,
} from './Breakline.style';

interface Props {
  children?: string
}

function Breakline(props: Props) {
  return (
    <MaxWidthDiv>
      <GreyLineDiv>
        <RelativeDiv>
          <StyledText>{props.children}</StyledText>
        </RelativeDiv>
      </GreyLineDiv>
    </MaxWidthDiv>
  );
}

export default Breakline;
