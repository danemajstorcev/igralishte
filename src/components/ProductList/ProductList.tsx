import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import scrollToTop from "../../utils/ScrollToTop";
import { Product } from "../../types/types";
import "./ProductList.scss";

interface ProductListProps {
  productsPerPage?: number;
  productListHeader?: string;
  type?: string | null;
  products?: Product[];
}

const ProductList = ({
  productsPerPage = 6,
  productListHeader,
  products,
}: ProductListProps) => {
  const productPerPageClass =
    productsPerPage === 10
      ? "pagination-container"
      : "pagination-container-eight";

  const { loading } = useContext(ProductsContext);
  const [activePage, setActivePage] = useState<number>(1);

  const handleClick = () => {
    scrollToTop();
  };

  const startIndex: number = (activePage - 1) * productsPerPage;
  const endIndex: number = startIndex + productsPerPage;
  const displayedProducts: Product[] | undefined = products?.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (page: number): void => {
    setActivePage(page);
  };

  return (
    <div className={productPerPageClass}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {products && products.length > 0 && (
            <>
              <div className="pagination-header">{productListHeader}</div>
              <div className="product-images-container">
                {displayedProducts?.map((product, index) => (
                  <Link
                    to={`/product-detail/${product.id}`}
                    key={index}
                    className="product-image-container"
                    onClick={handleClick}
                  >
                    <ProductCard key={index} product={product} />
                  </Link>
                ))}
              </div>
              <div className="pagination-controls">
                <span
                  className="pagination-arrow"
                  onClick={() =>
                    handlePageChange(activePage > 1 ? activePage - 1 : 1)
                  }
                >
                  &lt;
                </span>
                {Array.from(
                  { length: Math.ceil(products.length / productsPerPage) },
                  (_, index) => index + 1
                ).map((page) => (
                  <span
                    key={page}
                    className={`pagination-number ${
                      activePage === page ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </span>
                ))}
                <span
                  className="pagination-arrow"
                  onClick={() =>
                    handlePageChange(
                      activePage < Math.ceil(products.length / productsPerPage)
                        ? activePage + 1
                        : activePage
                    )
                  }
                >
                  &gt;
                </span>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
