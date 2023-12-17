import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <img className="main-logo" src="pictures/main-logo.png" alt="" />
      <Link className="no-txt-decoration" to="/register-two">
        <SocialMediaButton buttonText="Регистрирај се со емаил адреса" />
      </Link>
      <p>или</p>
      <SocialMediaButton
        socialMediaIcon="pictures/ri_google-fill.png"
        buttonText="Регистрирај се преку Google"
      />
      <SocialMediaButton
        socialMediaIcon="pictures/ic_baseline-facebook.png"
        buttonText="Регистрирај се преку Facebook"
      />
      <div className="log-in-link">
        Веќе имаш профил?
        <Link to="/log-in">
          <span>Логирај се</span>
        </Link>
      </div>
      <CopyRight />
    </div>
  );
};

export default Register;
