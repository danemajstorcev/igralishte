import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import ProductList from "../../components/ProductList/ProductList";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import { CheckboxValues, Product } from "../../types/types";
import "./ProductCards.scss";
import {
  defaultAccessoriesCheckboxValues,
  defaultBrandCheckboxValues,
  defaultCategoryCheckboxValues,
  defaultColorsCheckboxValues,
  defaultSizeCheckboxValues,
  defaultriceCheckboxValues,
} from "../../utils/constants";

const ProductCards = () => {
  const location = useLocation();
  const type = location.search;

  const [queryString, setQueryString] = useState<string>(type);
  const [products, setProducts] = useState<Product[]>([]);
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
  const [sortOption, setSortOption] = useState("newest");

  const [categoryCheckboxValues, setCategoryCheckboxValues] =
    useState<CheckboxValues>(defaultCategoryCheckboxValues);
  const [brandCheckboxValues, setBrandCheckboxValues] =
    useState<CheckboxValues>(defaultBrandCheckboxValues);
  const [accessoriesCheckboxValues, setAccessoriesCheckboxValues] =
    useState<CheckboxValues>(defaultAccessoriesCheckboxValues);
  const [sizeCheckboxValues, setSizeCheckboxValues] = useState<CheckboxValues>(
    defaultSizeCheckboxValues
  );
  const [colorsCheckboxValues, setColorsCheckboxValues] =
    useState<CheckboxValues>(defaultColorsCheckboxValues);
  const [priceCheckboxValues, setPriceCheckboxValues] =
    useState<CheckboxValues>(defaultriceCheckboxValues);

  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    { path: "/product-cards", breadcrumbName: "Сите" },
  ];

  const { products: contextProducts } = useContext(ProductsContext);

  const handleCheckboxChange = (
    checkboxName: string,
    setCheckboxValues: React.Dispatch<React.SetStateAction<CheckboxValues>>
  ) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterButtonClick = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);

    const newOverflow = isFilterMenuVisible ? "visible" : "hidden";

    document.body.style.overflow = newOverflow;

    window.history.replaceState({}, document.title, location.pathname);
  };

  const handleCategoryCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setCategoryCheckboxValues);
  };

  const handleBrandCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setBrandCheckboxValues);
  };

  const handleAccessoriesCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setAccessoriesCheckboxValues);
  };

  const handleSizeCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setSizeCheckboxValues);
  };

  const handleColorsCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setColorsCheckboxValues);
  };

  const handlePriceCheckboxChange = (checkboxName: string) => {
    handleCheckboxChange(checkboxName, setPriceCheckboxValues);
  };

  const applyFilter = (query: string) => {
    const parsedQuery = new URLSearchParams(query);

    const filtered = contextProducts.filter((product) => {
      let isMatch = true;
      parsedQuery.forEach((value, key) => {
        if (key === "type" && !product.type.includes(value)) {
          isMatch = false;
        } else if (key === "category") {
          const categoryValues = parsedQuery.getAll("category");
          if (
            categoryValues.length > 0 &&
            !categoryValues.includes(product.category)
          ) {
            isMatch = false;
          }
        } else if (key === "brand" && !product.brand.includes(value)) {
          const brandValues = parsedQuery.getAll("brand");
          if (brandValues.length > 0 && !brandValues.includes(product.brand)) {
            isMatch = false;
          }
        } else if (key === "tags") {
          const productTags = product.tags as string[];
          const tagValues = parsedQuery.getAll("tags");
          if (
            tagValues.length > 0 &&
            !tagValues.some((tag) => productTags.includes(tag))
          ) {
            isMatch = false;
          }
        } else if (key === "accessories" && !product.category.includes(value)) {
          const accessoriesValues = parsedQuery.getAll("accessories");
          if (
            accessoriesValues.length > 0 &&
            !accessoriesValues.includes(product.category)
          ) {
            isMatch = false;
          }
        } else if (key === "size" && !product.size.includes(value)) {
          const sizeValues = parsedQuery.getAll("size");
          if (sizeValues.length > 0 && !sizeValues.includes(product.size)) {
            isMatch = false;
          }
        } else if (key === "color" && !product.color.includes(value)) {
          const colorValues = parsedQuery.getAll("color");
          if (colorValues.length > 0 && !colorValues.includes(product.color)) {
            isMatch = false;
          }
        } else if (key === "price") {
          isMatch = applyPriceFilter(product, value);
        }
      });

      return isMatch;
    });

    const sortedProducts = [...filtered].sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortOption === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

    setProducts(sortedProducts);
  };

  const applyPriceFilter = (product: Product, priceFilter: string) => {
    const productPrice = product.price;

    if (priceFilter === "on_sale") {
      return product.onSale;
    } else if (priceFilter === "cheapest") {
      return productPrice >= 500 && productPrice <= 1000;
    } else if (priceFilter === "normal") {
      return productPrice >= 1500 && productPrice <= 2000;
    } else if (priceFilter === "expensive") {
      return productPrice >= 2000 && productPrice <= 2500;
    } else if (priceFilter === "most_expensive") {
      return productPrice > 2500;
    } else {
      return true;
    }
  };

  const resetAllCheckBoxValues = () => {
    setCategoryCheckboxValues(defaultCategoryCheckboxValues);
    setBrandCheckboxValues(defaultBrandCheckboxValues);
    setAccessoriesCheckboxValues(defaultAccessoriesCheckboxValues);
    setSizeCheckboxValues(defaultSizeCheckboxValues);
    setColorsCheckboxValues(defaultColorsCheckboxValues);
    setPriceCheckboxValues(defaultriceCheckboxValues);
  };

  useEffect(() => {
    applyFilter(queryString);
  }, [queryString, contextProducts, location.key, sortOption]);

  return (
    <div
      className="product-page"
      style={{ overflow: isFilterMenuVisible ? "hidden" : "visible" }}
    >
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="filter-section">
        <img
          className="filter-search-btn"
          src="pictures/fluent_search-48-regular.png"
          alt=""
          onClick={handleFilterButtonClick}
        />
        <label className="sort-label" htmlFor="sort">
          Подреди според
        </label>
        <select
          name="sort"
          id="sort"
          onChange={handleSortChange}
          value={sortOption}
        >
          <option className="sort-option" value="newest">
            Најново
          </option>
          <option className="sort-option" value="oldest">
            Најстаро
          </option>
        </select>
      </div>
      {products.length > 0 ? (
        <ProductList productsPerPage={10} products={products} />
      ) : (
        <div className="products-not-found">
          Продукти според селектираните филтри не се пронајдени.
        </div>
      )}
      {isFilterMenuVisible && (
        <FilterMenu
          handleFilterButtonClick={handleFilterButtonClick}
          setQueryString={setQueryString}
          categoryCheckboxValues={categoryCheckboxValues}
          brandCheckboxValues={brandCheckboxValues}
          accessoriesCheckboxValues={accessoriesCheckboxValues}
          sizeCheckboxValues={sizeCheckboxValues}
          colorsCheckboxValues={colorsCheckboxValues}
          priceCheckboxValues={priceCheckboxValues}
          handleCategoryCheckboxChange={handleCategoryCheckboxChange}
          handleBrandCheckboxChange={handleBrandCheckboxChange}
          handleAccessoriesCheckboxChange={handleAccessoriesCheckboxChange}
          handleSizeCheckboxChange={handleSizeCheckboxChange}
          handleColorsCheckboxChange={handleColorsCheckboxChange}
          handlePriceCheckboxChange={handlePriceCheckboxChange}
          resetAllCheckBoxValues={resetAllCheckBoxValues}
        />
      )}
    </div>
  );
};

export default ProductCards;
