import url from "./raw/icon-twitter.gif";
export default ({ className = "" }: { className?: string }) => {
  return <img loading="lazy" src={url} className={`${className} dark:invert-[85%]`} alt="close" width={32} />;
};
