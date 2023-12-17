import "./SparksHeading.scss";

interface SparksHeadingProps {
  textHeading: string;
  className?: string;
}

const SparksHeading = ({ textHeading, className }: SparksHeadingProps) => {
  return (
    <div className={`sparks-heading ${className}`}>
      <img
        src="/pictures/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2pink.png"
        alt=""
      />
      <div className="text-heading">{textHeading}</div>
    </div>
  );
};

export default SparksHeading;
