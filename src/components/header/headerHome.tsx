import HeaderBackground from "../../assets/images/header-bg.jpg";
import SearchBar from "../searchBar/";

export default function HeaderHome() {
  const style = {
    backgroundImage: `url("${HeaderBackground}")`,
    backgroundSize: "cover",
    backgroundPosition: "left center",
  };

  return (
    <section style={style}>
      <div className="mx-auto max-w-screen-xl w-11/12 py-12 md:py-16 lg:py-24 xl:py-32 flex flex-col items-center">
        <h2 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Download High Quality Images By Creators
        </h2>
        <h4 className="text-[#c4c4c4] text-center text-sm sm:text-base md:text-lg mt-3 md:mt-5 mb-4">
          Over 2.4 million+ stock images by our talented community.
        </h4>
        {/* search bar */}
        <SearchBar />
      </div>
    </section>
  );
}
