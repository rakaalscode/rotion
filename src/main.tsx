import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/components/providers/theme-provider.tsx";
import { ConvexClientProvider } from "@/components/providers/convex-provider.tsx";
import { ModalProvider } from "./components/providers/modal.providers.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexClientProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster position="bottom-center" />
        <ModalProvider />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ConvexClientProvider>
  </React.StrictMode>
);
