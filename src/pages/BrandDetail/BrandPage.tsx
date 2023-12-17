import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import SparksHeading from "../../components/SparksHeading/SparksHeading";
import ProductList from "../../components/ProductList/ProductList";
import { Brand } from "../../types/types";
import "./BrandPage.scss";

const BrandPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { brands, loading, products } = useContext(ProductsContext);

  if (!id || loading || !brands) {
    return null;
  }

  const brand: Brand | undefined = brands.find(
    (brand) => brand.id === Number(id)
  );

  if (!brand) {
    return <div>Brand not found</div>;
  }

  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    { path: "/product-cards", breadcrumbName: "Локални брендови" },
    { path: `/brand/${id}`, breadcrumbName: `${brand.name}` },
  ];

  const filterProductsByBrand = products.filter(
    (product) => product.brand === brand.slug
  );

  return (
    <div className="brand-page-main-container">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <SparksHeading textHeading={brand.name} />
      <img className="brand-image" src={brand.image} alt="" />
      <div className="brand-concept-wrapper">
        <div className="brand-concept-base">{brand.description}</div>
        <ul className="brand-concept-questions">
          <li>
            Дали постои простор за етикетирања и табу во овој безобразно
            неетички свет?
          </li>
          <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
          <li>
            Дали треба да се срамиме од сопственото само за друг да биде мирен?
          </li>
          <li>Дали ќе ни текне?</li>
        </ul>
        <div className="brand-concept-moto">
          Зачувај го слободниот дух и биди тоа што си с е к о г а ш .
        </div>
      </div>
      <div className="brand-checkout">
        Погледнете ги производите на {brand.name} кои ги нудиме во Игралиште.
        Имаме доста голем избор на Pussy привезоци кои се кул и ултра
        феминистички, а.к.а. grl pwr.
      </div>
      <ProductList
        productListHeader="Други парчиња од брендот:"
        products={filterProductsByBrand}
      />{" "}
    </div>
  );
};

export default BrandPage;
