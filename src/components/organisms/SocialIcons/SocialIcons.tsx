import { Icon, IconType } from "@atoms/Icon/Icon";
import Row from "@atoms/Row/Row";
import IconCircle from "@molecules/IconCircle/IconCircle";

function SocialIcons() {
  return (
    <Row justify="center">
      <IconCircle color="#DE5246">
        <Icon src={IconType.google} width={13} height={13} alt="google" />
      </IconCircle>
      <IconCircle color="#1877f2">
        <Icon src={IconType.facebook} width={13} height={13} alt="facebook" />
      </IconCircle>
      <IconCircle color="#0077B5">
        <Icon src={IconType.linkedin} width={13} height={13} alt="linkedin" />
      </IconCircle>
    </Row>
  );
}

export default SocialIcons;
