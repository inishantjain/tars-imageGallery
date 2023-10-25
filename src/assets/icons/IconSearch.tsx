import url from "./raw/icon-search.png";
export default ({ className = "" }: { className?: string }) => {
  return <img loading="lazy" src={url} className={`${className}`} width={32} alt="Search Icon" />;
};
