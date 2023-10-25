import url from "./raw/icon-close.png";
export default ({ className = "" }: { className?: string }) => {
  return <img loading="lazy" src={url} className={`${className}`} alt="close" width={32} />;
};
