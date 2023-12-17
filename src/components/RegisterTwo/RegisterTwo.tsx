import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, convertImageToBase64 } from "../../context/UserContext";
import BlackButton from "../BlackButton/BlackButton";
import "./RegisterTwo.scss";

const RegisterTwo = () => {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
    bio: "",
  });

  const [additionalUserInfo, setAdditionalUserInfo] = useState({
    img: "",
    address: "",
    mobile: "",
    bio: "",
  });

  const { updateUser, setUser } = useContext(UserContext);

  const [showThirdScreen, setShowThirdScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();

  const registerUser = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setShowThirdScreen(true);
      const response = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const userData = await response.json();

      setNewUser((prevUser) => ({ ...prevUser, id: userData.id }));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const base64Image = await convertImageToBase64(URL.createObjectURL(file));
      setSelectedImage(URL.createObjectURL(file));
      setAdditionalUserInfo({ ...additionalUserInfo, img: base64Image });
    }
  };

  const userUpdate = async (event: any) => {
    try {
      event.preventDefault();
      await updateUser(newUser.id, {
        ...newUser,
        address: additionalUserInfo.address,
        mobile: additionalUserInfo.mobile,
        bio: additionalUserInfo.bio,
        img: additionalUserInfo.img,
      });
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-two">
      <img className="main-logo" src="pictures/main-logo.png" alt="" />
      <form onSubmit={registerUser}>
        <label htmlFor="name">Име</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ивана"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <label htmlFor="last-name">Презиме</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Голабоска"
          value={newUser.lastname}
          onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
        />
        <label htmlFor="email">Email адреса</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@example.com"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <label htmlFor="password">Лозинка</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder=""
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <label htmlFor="confirm-password">Потврди лозинка</label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder=""
        />
        <p>
          <img src="/pictures/akar-icons_circle-check.png" alt="" />{" "}
          <span>Испраќај ми известувања за нови зделки и промоции.</span>
        </p>
        <BlackButton buttonText="Регистрирај се" />
      </form>
      <p>
        Со вашата регистрација, се согласувате со <span>Правилата</span> и
        Условите за кориснички сајтови.
      </p>
      {showThirdScreen && (
        <div className="register-three">
          <img className="main-logo" src="pictures/main-logo.png" alt="" />
          <form onSubmit={userUpdate}>
            <div className="image-preview-container">
              <div className="image-placeholder"></div>
              {selectedImage && <img src={selectedImage} alt="Selected" />}
            </div>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />{" "}
            <br />
            <br />
            <label className="choose-img" htmlFor="image">
              Одбери слика
            </label>
            <label htmlFor="address">Адреса</label>
            <input
              id="address"
              name="address"
              type="text"
              value={additionalUserInfo.address}
              placeholder="ул. Гоце Делчев бр.15"
              onChange={(e) =>
                setAdditionalUserInfo({
                  ...additionalUserInfo,
                  address: e.target.value,
                })
              }
            />
            <label htmlFor="number">Телефонски број</label>
            <input
              type="number"
              name="number"
              id="number"
              value={additionalUserInfo.mobile}
              placeholder="07*******"
              onChange={(e) =>
                setAdditionalUserInfo({
                  ...additionalUserInfo,
                  mobile: e.target.value,
                })
              }
            />
            <label htmlFor="bio">Биографија</label>
            <textarea
              name="bio"
              id="bio"
              placeholder="example"
              value={additionalUserInfo.bio}
              onChange={(e) =>
                setAdditionalUserInfo({
                  ...additionalUserInfo,
                  bio: e.target.value,
                })
              }
            ></textarea>
            <BlackButton buttonText="Заврши" />
            <button
              className="skip"
              onClick={() => {
                setUser(newUser);
                localStorage.setItem("user", JSON.stringify(newUser));
                navigate("/");
              }}
            >
              Прескокни
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterTwo;
