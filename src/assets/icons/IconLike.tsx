import url from "./raw/icon-like.png";
export default ({ className = "" }: { className?: string }) => {
  return <img loading="lazy" src={url} className={`${className} dark:invert-[50]`} alt="close" width={32} />;
};
