interface Card {
  id: string;
  created_at: string;
  description: string;
  height: number;
  width: number;
  likes: number;
  urls: { regular: string; small: string };
  slug: string;
  thumb: string;
  user: User;
}

interface User {
  first_name: string;
  name: string;
  profile_image: { small: string; large: string };
  id: string;
  username: string;
  instagram_username: string;
  twitter_username: string;
}

interface Modal {
  tags: { title: string }[];
  urls: { regular: string; small: string };
  links: {
    self: string;
    // html: string;
    download: string;
    // download_location: string;
  };
  likes: number;
  downloads: number;
  views: string;
  user: User;
}

// interface searchSuggestions {
//   //   fuzzy: { query: string }[];
//   //   autocomplete: { query: string }[];
//   //   did_you_mean: { query: string }[];
// }
