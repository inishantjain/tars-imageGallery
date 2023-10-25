import ImageCard from "./ImageCard";
import { useImagesContext } from "../../context/imagesContext";
import Spinner from "./Spinner";

function Gallery() {
  const { images, loading, loadMore } = useImagesContext()!;
  return (
    <section className="pb-10 dark:bg-neutral-800">
      <div className="mx-auto w-11/12 max-w-screen-xl md:grid-cols-3 p-5 grid gap-5">
        <div className="space-y-5">
          {images.slice(0, images.length / 3).map((item) => (
            <ImageCard {...item} key={item.id} />
          ))}
        </div>
        <div className="space-y-5">
          {images.slice(images.length / 3, (2 * images.length) / 3).map((item) => (
            <ImageCard {...item} key={item.id} />
          ))}
        </div>
        <div className="space-y-5">
          {images.slice((2 * images.length) / 3, images.length).map((item) => (
            <ImageCard {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        {loading ? (
          <Spinner />
        ) : (
          <button
            className="outline dark:outline-neutral-300 outline-1 rounded px-3 py-2 dark:text-white text-neutral-800"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}

export default Gallery;
