import Icon, { IconType } from "@components/atoms/Icon/Icon";
import Row from "@components/atoms/Row/Row";
import IconButton from "@components/molecules/IconButton/IconButton";
import { useRef } from "react";

type SocialIconsProps = {
  onIconClick: (icon: string) => void;
};

function SocialIcons({ onIconClick }: SocialIconsProps) {
  const googleRef = useRef<HTMLButtonElement>(null);
  const facebookRef = useRef<HTMLButtonElement>(null);
  const linkedinRef = useRef<HTMLButtonElement>(null);
  const onClickG = () => {
    onIconClick("google");
  };
  const onClickF = () => {
    onIconClick("facebook");
  };
  const onClickL = () => {
    onIconClick("linkedin");
  };
  return (
    <Row justify="center">
      <IconButton color="#DE5246" ref={googleRef} onClick={onClickG}>
        <Icon src={IconType.google} width={13} height={13} alt="google" />
      </IconButton>
      <IconButton color="#1877f2" ref={facebookRef} onClick={onClickF}>
        <Icon src={IconType.facebook} width={13} height={13} alt="facebook" />
      </IconButton>
      <IconButton color="#0077B5" ref={linkedinRef} onClick={onClickL}>
        <Icon src={IconType.linkedin} width={13} height={13} alt="linkedin" />
      </IconButton>
    </Row>
  );
}

export default SocialIcons;
