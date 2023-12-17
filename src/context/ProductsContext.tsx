import React, { createContext, useEffect, useState } from "react";
import { Brand, Product } from "../types/types";

export interface ProductContextType {
  brands: Brand[];
  products: Product[];
  loading: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductContextType);

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (endpoint: string) => {
      try {
        const response = await fetch(
          `https://poised-robe-yak.cyclic.app/${endpoint}`
        );
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    const fetchLocalData = async () => {
      setLoading(true);

      const brandsData = await fetchData("/brands");
      const productsData = await fetchData("/products");

      setBrands(brandsData);
      setProducts(productsData);
      setLoading(false);
    };

    fetchLocalData();
  }, []);

  return (
    <ProductsContext.Provider
      value={
        {
          brands,
          products,
          loading,
        } as ProductContextType
      }
    >
      {children}
    </ProductsContext.Provider>
  );
};
