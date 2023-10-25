import IconLike from "../../assets/icons/IconLike";
import { useImageModalContext } from "../../context/modalContext";
import { memo } from "react";
import { nFormatter } from "../../utils/numberFromatter";

function ImageCard({ width, height, urls, user, likes, id }: Card) {
  const { setModal } = useImageModalContext()!;

  return (
    <figure
      onClick={() => setModal(id)}
      className="group items-start flex flex-col rounded-lg overflow-clip  transition-transform"
    >
      <img
        style={{ aspectRatio: `${width}/${height}` }}
        loading="lazy"
        src={urls.small}
        className="w-full overflow-hidden group-hover:scale-110 transition-transform"
        alt="Description of the image"
      />
      <figcaption
        className="z-0 justify-between items-start self-stretch border border-neutral-200 dark:border-none bg-white dark:bg-neutral-900 flex w-full gap-5 pl-2.5 pr-4 py-3.5 rounded-none border-solid"
        role="region"
        aria-label="Component details"
      >
        <div className="items-start self-stretch flex justify-between gap-2.5">
          <img
            loading="lazy"
            src={user.profile_image.large}
            className="aspect-square object-cover object-center w-[39px] overflow-hidden self-stretch max-w-full rounded-[50%]"
            alt="Profile picture"
          />
          <div className="justify-between items-start self-center flex flex-col my-auto">
            <div className="text-neutral-600 dark:text-neutral-200 text-xs font-bold">{user.first_name}</div>
            <div className="text-neutral-400 text-xs italic font-semibold">{user.username}</div>
          </div>
        </div>
        <div className="justify-between items-center self-center flex gap-1 my-auto">
          <IconLike className="w-4" />
          <div className="text-neutral-600 dark:text-neutral-200 text-sm font-bold self-stretch">
            {nFormatter(likes)}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default memo(ImageCard);
