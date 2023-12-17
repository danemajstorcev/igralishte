import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import SparksHeading from "../../components/SparksHeading/SparksHeading";
import "./Contact.scss";

const Contact = () => {
  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    { path: "/contact", breadcrumbName: "Контакт" },
  ];

  return (
    <div className="contact">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <SparksHeading textHeading="Контакт" className="contact" />
      <img src="pictures/Rectangle 52.png" alt="" />
      <div className="header">Игралиште Дебар Маало</div>
      <div className="description">
        Откриј ги нашите останати модни парчиња и колекции кои ги немаме
        изложено на нашата страна!
      </div>
      <div className="address">Костурски Херои бр.6/14 Дебар Маало, Скопје</div>
      <div className="telephone-contact">
        <div className="telephone">Телефон за контакт:</div>
        <div className="telephone-number">+ 389 078 380 406</div>
      </div>
      <div className="working-time">
        <div className="working-time-header">Работно Време:</div>
        <div className="working-days">Понеделник - Петок 12:00 - 19:00.</div>
        <div className="working-days">Сабота 12:00 - 17:00</div>
      </div>
      <button className="store-link">Кон продавницата</button>
    </div>
  );
};

export default Contact;
