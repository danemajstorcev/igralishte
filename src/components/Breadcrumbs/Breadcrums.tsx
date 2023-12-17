import { Link } from "react-router-dom";
import "./Breadcrumbs.scss";

interface Breadcrumb {
  path: string;
  breadcrumbName: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav className="main-links">
      <ul className="breadcrumb-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="breadcrumb-link" key={index}>
            <Link className="link-to-breadcrumb" to={breadcrumb.path}>
              {breadcrumb.breadcrumbName}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <img
                className="breadcrum-arrow"
                src="/pictures/material-symbols_arrow-back-ios-rounded-right.png"
                alt=""
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
