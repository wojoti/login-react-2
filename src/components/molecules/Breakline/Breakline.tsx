import * as Styles from "./Breakline.style";

export interface BreaklineProps {
  children?: string;
  testId?: string;
}

function Breakline({ children, testId }: BreaklineProps) {
  return (
    <Styles.MaxWidthDiv data-testid={testId}>
      <Styles.GreyLineDiv>
        <Styles.RelativeDiv>
          <Styles.StyledText>{children}</Styles.StyledText>
        </Styles.RelativeDiv>
      </Styles.GreyLineDiv>
    </Styles.MaxWidthDiv>
  );
}

export default Breakline;
