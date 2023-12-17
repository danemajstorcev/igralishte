import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext, convertImageToBase64 } from "../../context/UserContext";
import BlackButton from "../BlackButton/BlackButton";
import "./MyProfile.scss";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSave = async (event: FormEvent) => {
    try {
      event.preventDefault();
      updateUser(user.id, user);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const base64Image = await convertImageToBase64(URL.createObjectURL(file));
      setSelectedImage(URL.createObjectURL(file));
      setUser({ ...user, img: base64Image });
    }
  };

  return (
    <div className="my-profile">
      <img className="main-logo" src="pictures/main-logo.png" alt="" />
      <form onSubmit={handleSave}>
        <div className="image-preview-container">
          <div className="image-placeholder"></div>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            user.img && <img src={user.img} alt="User" />
          )}
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
        <label htmlFor="name">Име</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ивана"
          value={user?.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="email">Email адреса</label>
        <input
          id="email"
          name="email"
          type="email"
          value={user?.email}
          placeholder="example@example.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Лозинка</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*****"
          value={user?.password}
        />
        <Link to="/change-password">
          <div className="change-password">Промени лозинка</div>
        </Link>
        <label htmlFor="address">Адреса</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="ул. Гоце Делчев бр.15"
          value={user?.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <label htmlFor="number">Телефонски број</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="07"
          value={user?.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        <label htmlFor="bio">Биографија</label>
        <textarea
          name="bio"
          id="bio"
          placeholder="example"
          value={user?.bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        ></textarea>
        <p>
          <img src="/pictures/akar-icons_circle-check.png" alt="" />{" "}
          <span>Испраќај ми известувања за нови зделки и промоции.</span>
        </p>
        <BlackButton buttonText="Зачувај" />
      </form>
    </div>
  );
};

export default MyProfile;



