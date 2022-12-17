import Wrapper from "./Column.style";

interface Props {
  children?: React.ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

function Column({
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  justify,
  align,
  children,
}: Props) {
  return (
    <Wrapper
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      justify={justify}
      align={align}
    >
      {children}
    </Wrapper>
  );
}

export default Column;
