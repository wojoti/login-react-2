import StyledIcon from "./Icon.style";

export enum IconType {
  facebook = "./img/facebook.svg",
  linkedin = "./img/linkedin.svg",
  google = "./img/google.svg",
}

export interface IconProps {
  src: IconType;
  width: number;
  height: number;
  alt: string;
  testId?: string;
}

function Icon({ src, width, height, alt, testId }: IconProps) {
  return (
    <StyledIcon
      src={src}
      width={width}
      height={height}
      alt={alt}
      data-testid={testId}
    />
  );
}
export default Icon;
