import Icon, { IconType } from "@components/atoms/Icon/Icon";
import Row from "@components/atoms/Row/Row";
import IconButton from "@components/molecules/IconButton/IconButton";
import { useRef } from "react";

export interface SocialIconsProps {
  onIconClick: (icon: string) => void;
  testId?: string;
}

function SocialIcons({ onIconClick, testId }: SocialIconsProps) {
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
    <Row justify="center" testId={testId}>
      <IconButton
        color="#DE5246"
        ref={googleRef}
        onClick={onClickG}
        testId="iconbutton-g"
      >
        <Icon
          src={IconType.google}
          width={13}
          height={13}
          alt="google"
          testId="icon-g"
        />
      </IconButton>
      <IconButton
        color="#1877f2"
        ref={facebookRef}
        onClick={onClickF}
        testId="iconbutton-fb"
      >
        <Icon
          src={IconType.facebook}
          width={13}
          height={13}
          alt="facebook"
          testId="icon-fb"
        />
      </IconButton>
      <IconButton
        color="#0077B5"
        ref={linkedinRef}
        onClick={onClickL}
        testId="iconbutton-l"
      >
        <Icon
          src={IconType.linkedin}
          width={13}
          height={13}
          alt="linkedin"
          testId="icon-l"
        />
      </IconButton>
    </Row>
  );
}

export default SocialIcons;
