import React from "react";
import "./FilterHeader.scss";

interface FilterHeaderProps {
  filerHeaderText: string;
  goldenLineStyle?: React.CSSProperties;
}
const FilterHeader = ({
  filerHeaderText,
  goldenLineStyle,
}: FilterHeaderProps) => {
  return (
    <div className="filter-header">
      <div className="filter-header-text">{filerHeaderText}</div>
      <div className="golden-line" style={goldenLineStyle}></div>
    </div>
  );
};

export default FilterHeader;
