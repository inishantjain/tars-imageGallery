import axios from "axios";

axios.defaults.headers.get.Authorization = `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`;

const UNSPLASH_URL = "https://api.unsplash.com/photos";
const UNSPLASH_SEARCH_URL = "https://api.unsplash.com/search/photos";

export const getImagesApi = async ({ page = 1, query }: { page?: number; query: string }) => {
  let response: Card[] = [];
  console.log(page);
  try {
    let url;
    if (query) {
      url = new URL(UNSPLASH_SEARCH_URL);
      url.searchParams.set("query", query);
    } else url = new URL(UNSPLASH_URL);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("per_page", "16");
    const res = await axios.get(url.toString());

    response = query ? res?.data?.results : res?.data || [];
    // console.log(res.data);
  } catch (error: any) {
    console.error(error);
  }

  return response;
};

export const getImageByIdApi = async (id: string) => {
  let response: Modal | undefined;
  try {
    let url = new URL(UNSPLASH_URL);
    url.pathname = "photos/" + id;
    const res = await axios.get(url.toString());

    response = res?.data;
    console.log(res.data);
  } catch (error: any) {
    console.error(error);
  }

  return response;
};
