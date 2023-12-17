import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import BlackButton from "../BlackButton/BlackButton";
import "./ChangePassword.scss";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [error, setError] = useState("");

  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const userUpdate = async (event: FormEvent) => {
    try {
      event.preventDefault();
      await updateUser(user.id, { ...user, password: newPassword });
      navigate("/my-profile");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const saveNewPassword = (e: FormEvent) => {
    e?.preventDefault();
    if (oldPassword !== user.password) {
      setError("Incorrect password");
    } else if (newPassword !== repeatNewPassword) {
      setError("Password is mismatching");
    } else {
      userUpdate(e);
    }
  };

  return (
    <div className="change-password-wrapper">
      {error && <p className="change-password-error">{error}</p>}
      <img className="main-logo" src="pictures/main-logo.png" alt="" />
      <form onSubmit={saveNewPassword}>
        <label htmlFor="password">Стара лозинка</label>
        <input
          id="old-password"
          name="old-password"
          type="password"
          placeholder="************"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <label htmlFor="password">Нова лозинка</label>
        <input
          id="new-password"
          name="new-password"
          type="password"
          placeholder="************"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="password">Потврди нова лозинка</label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="************"
          value={repeatNewPassword}
          onChange={(e) => setRepeatNewPassword(e.target.value)}
        />
        <BlackButton buttonText="Зачувај" />
      </form>
    </div>
  );
};

export default ChangePassword;
