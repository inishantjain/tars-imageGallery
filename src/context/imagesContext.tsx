import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getImagesApi } from "../api/api";

interface ImagesContextType {
  images: Card[];
  fetchImages: (query: string) => Promise<void>;
  loading: boolean;
  loadMore: () => Promise<void>;
}

//context
const CardContext = createContext<ImagesContextType | undefined>(undefined);

//context provider
export function ImagesProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const query = useSearchParams()[0].get("query") || "";

  const fetchImages = async (query?: string, page: number = 1) => {
    setLoading(true);
    const response = await getImagesApi({ query: query || "", page });
    setImages((prev) => [...prev, ...response]);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setImages([]);
      setLoading(true);
      const response = await getImagesApi({ query: query || "", page: 1 });
      setImages(response);
      setLoading(false);
      setPage(1);
    })();
  }, [query]);

  async function loadMore() {
    fetchImages(query, page + 1);
    setPage(page + 1);
  }

  return <CardContext.Provider children={children} value={{ loadMore, images, fetchImages, loading }} />;
}

//custom hook for consuming this context
export function useImagesContext() {
  return useContext(CardContext);
}
