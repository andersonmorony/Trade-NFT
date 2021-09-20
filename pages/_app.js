import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <DAppProvider>
      <Menu />
        <div className="container float-none">
          <Component {...pageProps} />
        </div>
      <Footer />
    </DAppProvider>
    </>
  );
}

export default MyApp;
