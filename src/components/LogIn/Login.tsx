import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import BlackButton from "../BlackButton/BlackButton";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import CopyRight from "../CopyRight/CopyRight";
import "./LogIn.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const userLogin = async (event: FormEvent) => {
    event.preventDefault();
    const response = await loginUser(email, password);
    if (response) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="log-in">
      <img className="main-logo" src="pictures/main-logo.png" alt="" />
      {error && <p className="log-in-error">{error}</p>}
      <form onSubmit={userLogin}>
        <label htmlFor="email">Email адреса</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Лозинка</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-pass">Ја заборави лозинката?</div>
        <BlackButton buttonText="Најави се" />
        <p>или</p>
        <SocialMediaButton
          socialMediaIcon="pictures/ri_google-fill.png"
          buttonText="Најави се преку Google"
        />
        <SocialMediaButton
          socialMediaIcon="pictures/ic_baseline-facebook.png"
          buttonText="Најави се преку Facebook"
        />
        <div className="register-link">
          Немаш профил?
          <Link to="/register">
            <span>Регистрирај се</span>
          </Link>
        </div>
      </form>
      <CopyRight />
    </div>
  );
};

export default Login;
