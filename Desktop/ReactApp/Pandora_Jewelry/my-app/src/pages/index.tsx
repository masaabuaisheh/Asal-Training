import Head from "next/head";
import Header from "../components/header-section/header";
import MainPage from "../components/main-section/main";
import Footer from "../components/footer-section/footer";

function App() {
  return (
    <div className="main">
      <Head>
        <title>Official Pandora™ Jewelry US | Free Bracelet Offer</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <MainPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
