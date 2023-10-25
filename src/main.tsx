import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ImagesProvider } from "./context/imagesContext.tsx";
import { ImageModalProvider } from "./context/modalContext.tsx";
import { ThemeContextProvider } from "./context/themeContext.tsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ImageModalProvider>
          <ImagesProvider>
            <App />
          </ImagesProvider>
        </ImageModalProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
