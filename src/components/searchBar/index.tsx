import React, { useState } from "react";
// import { useImagesContext } from "../../context/imagesContext";
import IconSearch from "../../assets/icons/IconSearch";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  const [_, setSearchParams] = useSearchParams();

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchText) setSearchParams({ query: searchText });
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex-1 border shadow-[0px_4px_19px_0px_rgba(0,0,0,0.05)_inset] bg-neutral-50 self-stretch max-w-full px-3 py-2 md:py-3 rounded-md border-solid border-gray-200"
    >
      <div className="flex max-w-full items-center gap-2">
        <button type="submit">
          <IconSearch />
        </button>

        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="text-zinc-700 bg-transparent font-medium grow outline-none my-auto"
          placeholder="search images here"
        />
      </div>
    </form>
  );
}

export default SearchBar;
