import StyledIcon from "./Icon.style";

export enum IconType {
  facebook = "./img/facebook.svg",
  linkedin = "./img/linkedin.svg",
  google = "./img/google.svg",
}

interface Props {
  src: IconType;
  width: number;
  height: number;
  alt: string;
}

function Icon({ src, width, height, alt }: Props) {
  return <StyledIcon src={src} width={width} height={height} alt={alt} />;
}
export default Icon;
