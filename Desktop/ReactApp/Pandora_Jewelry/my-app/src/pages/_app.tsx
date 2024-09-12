import type { AppProps } from "next/app";
import "../pages/style.scss";
import "../components/header-section/header.scss";
import "../components/main-section/main.scss";
import "../components/footer-section/footer.scss";
import "../components/main-section/carousel-component/carousel.scss";
import "../components/main-section/trending-component/trending.scss";
import "../components/main-section/drag-carousel/dragcarousel.scss";
import "../components/filtering-section/halloween.scss";
import "../components/filtering-section/filter-nav/filternav.scss";
import "../components/filtering-section/products/products.scss";
import "../components/filtering-section/sidebar/category/category.scss";
import "../components/filtering-section/sidebar/color/color.scss";
import "../components/filtering-section/sidebar/price/price.scss";
import "../components/filtering-section/sidebar/sidebar.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
