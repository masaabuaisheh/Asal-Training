import type { AppProps } from "next/app";
import "../pages/home/main.scss";
import "./movielist/main.scss";
import "./searchable-dropdown/main.scss";
import "../pages/style.scss";
import "./color-guessing/main.scss";
import { StoreProvider } from "./context-api/context/store";

function App({ Component, pageProps }: AppProps) {
  return (
    // This makes the state and dispatch function accessible in all components inside App
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;
