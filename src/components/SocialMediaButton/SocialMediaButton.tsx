import "./SocialMediaButton.scss";

interface SocialMediaButtonProps {
  socialMediaIcon?: string;
  buttonText: string;
}

const SocialMediaButton = ({
  socialMediaIcon,
  buttonText,
}: SocialMediaButtonProps) => {
  return (
    <button className="social-media-button">
      {socialMediaIcon && <img src={socialMediaIcon} alt="" />}
      <span>{buttonText}</span>
    </button>
  );
};

export default SocialMediaButton;
