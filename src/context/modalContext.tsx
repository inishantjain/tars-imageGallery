import { ReactNode, createContext, useContext, useState } from "react";
import { ModalContent } from "../components/modal/ModalContent";
import { getImageByIdApi } from "../api/api";

interface ImageModalContextType {
  setModal: (id: string) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function ImageModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Modal | null>(null);

  async function setModal(id: string) {
    const response = await getImageByIdApi(id);
    if (response) setContent(response);
  }

  function closeModal() {
    setContent(null);
  }

  return (
    <ImageModalContext.Provider value={{ isModalOpen: !setContent, setModal, closeModal }}>
      {children}
      {content && <ModalContent {...content} />}
    </ImageModalContext.Provider>
  );
}

export function useImageModalContext() {
  return useContext(ImageModalContext);
}
