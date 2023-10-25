import { MouseEvent } from "react";
import IconClose from "../../assets/icons/IconClose";
import IconLike from "../../assets/icons/IconLike";
import { useImageModalContext } from "../../context/modalContext";
import { useSearchParams } from "react-router-dom";
import { nFormatter } from "../../utils/numberFromatter";
import Socials from "./Socials";

export const ModalContent = ({ urls, user, tags, likes, downloads }: Modal) => {
  const { closeModal } = useImageModalContext()!;
  const setSearchParams = useSearchParams()[1];

  //closes modal if clicked outside of it
  const handleModalClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleModalClose}
      className="z-50 fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll w-full min-w-full backdrop-blur-sm"
    >
      <div className="z-10 mx-auto rounded-lg relative m-2 my-5 bg-white dark:bg-neutral-800 flex w-11/12 max-w-lg flex-col shadow-lg">
        {/* image */}
        <img
          loading="lazy"
          src={urls.regular}
          className="rounded-t-lg object-cover min-h-[250px] max-h-80 xl:max-h-96 overflow-hidden"
        />
        {/* content */}
        <div className="p-5">
          <div className="flex my-4 items-center">
            <div className="flex flex-1 gap-2">
              <img
                loading="lazy"
                srcSet={user.profile_image.large}
                className="aspect-[1.02] object-cover object-center w-[47px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                alt="profile_image"
              />
              <div className="self-center flex-1 flex-col my-auto">
                <div className="text-neutral-600 dark:text-neutral-200 text-xs font-bold">{user.name}</div>
                <div className="text-neutral-400 dark:text-neutral-400 text-xs italic font-semibold mt-2.5">
                  {user.username}
                </div>
              </div>
            </div>
            <a
              href={urls.regular}
              download={urls.regular}
              className="bg-[#3CB46E] text-center p-2 rounded text-white flex-1"
            >
              Download
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between mx-2">
            <Socials {...user} />
            <div className="flex items-center gap-0.5 max-md:justify-center">
              <div className="text-zinc-500 text-xs font-bold tracking-normal mt-1">
                {nFormatter(downloads)} downloads
              </div>
              <IconLike className="ml-3 w-4" />
              <div className="text-zinc-500 text-xs font-bold my-auto">{nFormatter(likes)}</div>
            </div>
          </div>
          {/* tags */}
          <div className="text-neutral-600 dark:text-neutral-200 text-sm font-bold my-5">Related Tags</div>
          <li className="self-center items-center flex flex-wrap w-full gap-2">
            {tags.map((tag) => (
              <a
                key={tag.title}
                onClick={() => {
                  setSearchParams({ query: tag.title });
                  closeModal();
                }}
                href="#"
                className="text-neutral-600 dark:bg-gray-200 text-center text-xs font-medium self-stretch justify-center items-center bg-gray-200 max-w-full px-2.5 py-2 rounded"
              >
                {tag.title}
              </a>
            ))}
          </li>
        </div>

        {/* close button */}
        <button
          className="absolute -left-4 -top-1 bg-white rounded-full aspect-square p-2 ring-1 ring-neutral-600"
          onClick={() => closeModal()}
        >
          <IconClose className="w-5" />
        </button>
      </div>
    </div>
  );
};
