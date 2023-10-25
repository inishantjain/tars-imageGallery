import url from "./raw/icon-menu.png";
export default ({ className = "" }: { className?: string }) => {
  return <img loading="lazy" src={url} className={`${className} dark:invert`} alt="close" width={32} />;
};
