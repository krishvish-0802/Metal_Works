import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./app.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider
      theme={extendTheme({ config: { initialColorMode: "dark" } })}
    >
      <App />
    </ChakraProvider>
  </StrictMode>
);
