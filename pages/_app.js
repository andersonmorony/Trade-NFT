import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import Menu from "../components/Menu";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
        <div className="container float-none">
          <Component {...pageProps} />
        </div>
      <Footer />
    </>
  );
}

export default MyApp;
