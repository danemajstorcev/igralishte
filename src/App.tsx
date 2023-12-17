import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./components/LogIn/Login";
import Register from "./components/Register/Register";
import RegisterTwo from "./components/RegisterTwo/RegisterTwo";
import MyProfile from "./components/MyProfile/MyProfile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import GiftCards from "./pages/GiftCards/GiftCards";
import ProductCards from "./pages/ProductCards/ProductCards";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import FavoritesPage from "./pages/FavoritesAndOrder/FavoritesPage";
import BrandPage from "./pages/BrandDetail/BrandPage";
import Header from "./components/Header/Header";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/log-in";
  const isRegisterPage = location.pathname === "/register";
  const isRegisterPageTwo = location.pathname === "/register-two";
  const isMyProfile = location.pathname === "/my-profile";
  const isChangePassword = location.pathname === "/change-password";

  const shouldShowHeaderAndFooter =
    !isLoginPage &&
    !isRegisterPage &&
    !isRegisterPageTwo &&
    !isMyProfile &&
    !isChangePassword;

  return (
    <div className="App">
      {shouldShowHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-two" element={<RegisterTwo />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/product-cards" element={<ProductCards />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/favorites-page" element={<FavoritesPage />} />
        <Route path="/brand/:id" element={<BrandPage />} />
      </Routes>
      {shouldShowHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
