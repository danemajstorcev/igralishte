import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import FilterHeader from "../FilterHeader/FilterHeader";
import GoldenButton from "../GoldenButton/GoldenButton";
import ColorRectangle from "../ColorRectangle/ColorRectangle";
import Checkbox from "../Checkbox/Checkbox";
import { CheckboxValues } from "../../types/types";
import { colors, sizes } from "../../utils/constants";
import "./FilterMenu.scss";

interface FilterMenuProps {
  handleFilterButtonClick: () => void;
  setQueryString: (queryString: string) => void;
  categoryCheckboxValues: CheckboxValues;
  brandCheckboxValues: CheckboxValues;
  accessoriesCheckboxValues: CheckboxValues;
  sizeCheckboxValues: CheckboxValues;
  colorsCheckboxValues: CheckboxValues;
  handleCategoryCheckboxChange: (checkboxName: string) => void;
  handleBrandCheckboxChange: (checkboxName: string) => void;
  handleAccessoriesCheckboxChange: (checkboxName: string) => void;
  handleSizeCheckboxChange: (checkboxName: string) => void;
  handleColorsCheckboxChange: (checkboxName: string) => void;
  priceCheckboxValues: CheckboxValues;
  handlePriceCheckboxChange: (checkboxName: string) => void;
  resetAllCheckBoxValues: () => void;
}

const FilterMenu = ({
  handleFilterButtonClick,
  setQueryString,
  categoryCheckboxValues,
  brandCheckboxValues,
  accessoriesCheckboxValues,
  sizeCheckboxValues,
  colorsCheckboxValues,
  priceCheckboxValues,
  handleCategoryCheckboxChange,
  handleBrandCheckboxChange,
  handleAccessoriesCheckboxChange,
  handleSizeCheckboxChange,
  handleColorsCheckboxChange,
  handlePriceCheckboxChange,
  resetAllCheckBoxValues,
}: FilterMenuProps) => {
  const handleFilterClick = async () => {
    const generateQueryString = (
      checkboxValues: CheckboxValues,
      paramName: string
    ) => {
      const selectedValues = Object.entries(checkboxValues)
        .filter(([key, value]) => value)
        .map(([key]) => `${paramName}=${key}`);
      return selectedValues.length > 0 ? selectedValues.join("&") : "";
    };

    const selectedCategories = generateQueryString(
      categoryCheckboxValues,
      "category"
    );
    const selectedBrands = generateQueryString(brandCheckboxValues, "brand");
    const selectedAccessories = generateQueryString(
      accessoriesCheckboxValues,
      "accessories"
    );
    const selectedSizes = generateQueryString(sizeCheckboxValues, "size");
    const selectedColors = generateQueryString(colorsCheckboxValues, "color");
    const selectedPrices = generateQueryString(priceCheckboxValues, "price");

    const queryString = [
      selectedCategories,
      selectedBrands,
      selectedAccessories,
      selectedSizes,
      selectedColors,
      selectedPrices,
    ]
      .filter((string) => string !== "")
      .join("&");

    setQueryString(`?${queryString}`);

    handleFilterButtonClick();
  };

  const { products } = useContext(ProductsContext);

  const calculateProductsCount = (category: string): number => {
    const categoryProducts = products.filter(
      (product) => product.category === category
    );
    return categoryProducts.length;
  };

  const handleCancelClick = () => {
    resetAllCheckBoxValues();
    setQueryString("");
    handleFilterButtonClick();
  };

  return (
    <div className="filter-menu-main-container">
      <div className="filter-menu-wrapper">
        <div className="checkbox-filters">
          <FilterHeader
            filerHeaderText="Категорија"
            goldenLineStyle={{ width: "127.534px", height: "0.839px" }}
          />
          <Checkbox
            id="blouses"
            name="blouses"
            checked={categoryCheckboxValues.блузи}
            onChange={() => handleCategoryCheckboxChange("блузи")}
            label={`Блузи (${calculateProductsCount("блузи")})`}
          />
          <Checkbox
            id="pants"
            name="pants"
            checked={categoryCheckboxValues.панталони}
            onChange={() => handleCategoryCheckboxChange("панталони")}
            label={`Панталони (${calculateProductsCount("панталони")})`}
          />
          <Checkbox
            id="shorts"
            name="shorts"
            checked={categoryCheckboxValues.здолништa_шорцеви}
            onChange={() => handleCategoryCheckboxChange("здолништa_шорцеви")}
            label={`Здолништа / шорцеви (${calculateProductsCount(
              "здолништa_шорцеви"
            )})`}
          />
          <Checkbox
            id="dresses"
            name="dresses"
            checked={categoryCheckboxValues.фустани}
            onChange={() => handleCategoryCheckboxChange("фустани")}
            label={`Фустани (${calculateProductsCount("фустани")})`}
          />
          <Checkbox
            id="jackets"
            name="jackets"
            checked={categoryCheckboxValues.палта_јакни}
            onChange={() => handleCategoryCheckboxChange("палта_јакни")}
            label={`Палта и јакни  (${calculateProductsCount("палта_јакни")})`}
          />
          <Checkbox
            id="underwear"
            name="underwear"
            checked={categoryCheckboxValues.долна_облека}
            onChange={() => handleCategoryCheckboxChange("долна_облека")}
            label={`Долна облека (${calculateProductsCount("долна_облека")})`}
          />
          <FilterHeader
            filerHeaderText="Брендови"
            goldenLineStyle={{ width: "102.363px", height: "0.839px" }}
          />
          <Checkbox
            id="pink-pantywear"
            name="pink-pantywear"
            checked={brandCheckboxValues.pinc_partywear}
            onChange={() => handleBrandCheckboxChange("pinc_partywear")}
            label="Pink Pantywear"
          />
          <Checkbox
            id="factory-girl"
            name="factory-girl"
            checked={brandCheckboxValues.factory_girl}
            onChange={() => handleBrandCheckboxChange("factory_girl")}
            label="Factory Girl"
          />
          <Checkbox
            id="main-days"
            name="main-days"
            checked={brandCheckboxValues.main_days}
            onChange={() => handleBrandCheckboxChange("main_days")}
            label="Main Days"
          />
          <div className="filter-menu-buttons">
            <GoldenButton
              buttonText="Филтрирај"
              buttonStyle={{
                width: "300px",
                marginTop: "32.01px",
                marginBottom: "12px",
              }}
              onClick={handleFilterClick}
            />
            <div className="cancel-btn">
              <button onClick={() => handleCancelClick()}>откажи</button>
            </div>
          </div>
          <Checkbox
            id="fraeil"
            name="fraeil"
            checked={brandCheckboxValues.fraeil}
            onChange={() => handleBrandCheckboxChange("fraeil")}
            label="Fraeil"
          />
          <Checkbox
            id="urma"
            name="urma"
            checked={brandCheckboxValues.urma}
            onChange={() => handleBrandCheckboxChange("urma")}
            label="Urma"
          />
          <Checkbox
            id="candle-nest"
            name="candle-nest"
            checked={brandCheckboxValues.candle_nest}
            onChange={() => handleBrandCheckboxChange("candle_nest")}
            label="Candle Nest"
          />
          <Checkbox
            id="beyond-green"
            name="beyond-green"
            checked={brandCheckboxValues.beyond_green}
            onChange={() => handleBrandCheckboxChange("beyond_green")}
            label="Beyond Green"
          />
          <Checkbox
            id="gatta"
            name="gatta"
            checked={brandCheckboxValues.gatta}
            onChange={() => handleBrandCheckboxChange("gatta")}
            label="Gatta"
          />
          <FilterHeader
            filerHeaderText="Аксесоари"
            goldenLineStyle={{ width: "106px" }}
          />
          <Checkbox
            id="jewelry"
            name="jewelry"
            checked={accessoriesCheckboxValues.накит}
            onChange={() => handleAccessoriesCheckboxChange("накит")}
            label="Накит"
          />
          <Checkbox
            id="purses"
            name="purses"
            checked={accessoriesCheckboxValues.ташни}
            onChange={() => handleAccessoriesCheckboxChange("ташни")}
            label="Ташни"
          />
          <FilterHeader
            filerHeaderText="Величина"
            goldenLineStyle={{ width: "97.329px" }}
          />
          {sizes.map((size, index) => (
            <Checkbox
              key={index}
              id={size}
              name={size}
              checked={sizeCheckboxValues[size]}
              onChange={() => handleSizeCheckboxChange(size)}
              label={size}
            />
          ))}
          <FilterHeader
            filerHeaderText="Боја"
            goldenLineStyle={{ width: "46.147px" }}
          />
          <div className="color-filter">
            {colors.map((color) => (
              <ColorRectangle
                key={color.id}
                className={color.name}
                id={color.id}
                name={color.name}
                checked={colorsCheckboxValues[color.name]}
                onClick={() => handleColorsCheckboxChange(color.name)}
              />
            ))}
          </div>
          <FilterHeader
            filerHeaderText="Цена"
            goldenLineStyle={{ width: "55.377px" }}
          />
          <Checkbox
            id="on-sale"
            name="on-sale"
            checked={priceCheckboxValues.on_sale}
            onChange={() => handlePriceCheckboxChange("on_sale")}
            label="На попуст*"
          />
          <Checkbox
            id="cheapest"
            name="cheapest"
            checked={priceCheckboxValues.cheapest}
            onChange={() => handlePriceCheckboxChange("cheapest")}
            label="500 - 1000 ден."
          />
          <Checkbox
            id="normal"
            name="normal"
            checked={priceCheckboxValues.normal}
            onChange={() => handlePriceCheckboxChange("normal")}
            label="1500 - 2000 ден."
          />
          <Checkbox
            id="expensive"
            name="expensive"
            checked={priceCheckboxValues.expensive}
            onChange={() => handlePriceCheckboxChange("expensive")}
            label="2000 - 2500 ден."
          />
          <Checkbox
            id="most-expensive"
            name="most-expensive"
            checked={priceCheckboxValues.most_expensive}
            onChange={() => handlePriceCheckboxChange("most_expensive")}
            label="Над 2500 ден."
          />
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
