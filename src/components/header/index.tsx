import { useSearchParams } from "react-router-dom";
import HeaderSearch from "./headerSearch";
import HeaderHome from "./headerHome";

export default function Header() {
  const query = useSearchParams()[0].get("query");
  if (query) return <HeaderSearch query={query} />;
  else return <HeaderHome />;
}
