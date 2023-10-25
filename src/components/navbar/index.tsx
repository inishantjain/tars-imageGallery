import IconMenu from "../../assets/icons/IconMenu";
import IconSearch from "../../assets/icons/IconSearch";
import DarkModeButton from "../darkModeButton";
import SearchBar from "../searchBar";
import { useState } from "react";
import LinksMobile from "./LinksMobile";

function Navbar(/* props */) {
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white sticky top-0 z-20 dark:bg-neutral-800">
      <div className="mx-auto w-11/12 flex max-w-screen-xl items-center gap-5 py-4 md:py-6 max-md:max-w-full max-md:flex-wrap">
        <h1 className="text-zinc-800 font-pacifico grow lg:grow-0 dark:text-slate-300 text-2xl md:text-3xl whitespace-nowrap">
          Image Gallery
        </h1>
        {/* large screens buttons*/}
        <div className="hidden lg:flex flex-1">
          <SearchBar />
          <li className="dark:text-white flex ml-8 mr-4 gap-6 items-center text-sm font-semibold">
            <a href="#">Explore</a>
            <a href="#">Collection</a>
            <a href="#">Community</a>
          </li>
          <DarkModeButton />
        </div>
        {/* mobile screen buttons*/}
        <div className="lg:hidden flex gap-2">
          <button className="w-7" onClick={() => setSearchBarOpen(!searchBarOpen)}>
            <IconSearch />
          </button>
          <DarkModeButton />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <IconMenu />
          </button>
        </div>
      </div>

      {/* mobile collapsible */}
      <div className={`${!searchBarOpen && "hidden"} lg:hidden w-11/12 mx-auto py-2`}>
        <SearchBar />
      </div>
      <div className={`${!mobileMenuOpen && "hidden"} lg:hidden w-11/12 mx-auto`}>
        <LinksMobile />
      </div>
    </nav>
  );
}

export default Navbar;
