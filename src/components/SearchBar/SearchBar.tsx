import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductList from "../ProductList/ProductList";
import { Product } from "../../types/types";
import "./SearchBar.scss";

interface SearchBarProps {
  onBackButtonClick: () => void;
}

const SearchBar = ({ onBackButtonClick }: SearchBarProps) => {
  const [searchBrand, setSearchBrand] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >([]);

  const { brands, products } = useContext(ProductsContext);

  const filterProductsByBrand = () => {
    const filteredBrand = brands?.find(
      (b) => b.name.toLowerCase() === searchBrand.toLowerCase()
    );
    if (filteredBrand) {
      const filteredProductsByBrand = products?.filter((product) => {
        const productBrand = product.brand.replace("_", " ");
        return productBrand.toLowerCase() === searchBrand.toLowerCase();
      });
      setFilteredProducts(filteredProductsByBrand);
    }
  };

  const deleteSearchedValue = () => {
    setSearchBrand("");
    setFilteredProducts([]);
  };

  useEffect(() => {
    filterProductsByBrand();
  }, [searchBrand]);

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        {
          <img
            src="/pictures/material-symbols_arrow-back-ios-rounded-left.png"
            alt=""
            onClick={onBackButtonClick}
          />
        }
        <div className="input-container">
          <input
            type="text"
            placeholder="Пребарувај"
            value={searchBrand}
            onChange={(e) => {
              setSearchBrand(e.target.value);
            }}
          />
         
        </div>
        {!searchBrand ? (
            <img src="/pictures/Group 427319177.png" alt="" />
          ) : (
            <img
              src="/pictures/ph_x-light.png"
              alt=""
              onClick={deleteSearchedValue}
            />
          )}
      </div>
      <div className="search-bar-products">
        <ProductList productsPerPage={4} products={filteredProducts} />
      </div>
    </div>
  );
};

export default SearchBar;
