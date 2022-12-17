import * as Styles from "./Breakline.style";

interface Props {
  children?: string;
}

function Breakline({ children }: Props) {
  return (
    <Styles.MaxWidthDiv>
      <Styles.GreyLineDiv>
        <Styles.RelativeDiv>
          <Styles.StyledText>{children}</Styles.StyledText>
        </Styles.RelativeDiv>
      </Styles.GreyLineDiv>
    </Styles.MaxWidthDiv>
  );
}

export default Breakline;
