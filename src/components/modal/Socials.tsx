import IconInstagram from "../../assets/icons/IconInstagram";
import IconTwitter from "../../assets/icons/IconTwitter";

type Socials = {
  instagram_username: string;
  twitter_username: string;
};

function Socials({ instagram_username, twitter_username }: Socials) {
  return (
    <div className="flex text-sm items-start gap-0.5 mt-1.5 max-md:justify-center">
      <IconInstagram className="w-5" />
      <a
        target="_blank"
        href={"https://www.instagram.com/" + instagram_username}
        className="text-neutral-400 italic font-semibold self-stretch"
      >
        /{instagram_username}
      </a>
      <IconTwitter className="ml-3 w-5" />
      <a
        href={"https://twitter.com/" + twitter_username}
        className="text-neutral-400 italic font-semibold self-stretch"
      >
        /{twitter_username}
      </a>
    </div>
  );
}

export default Socials;
