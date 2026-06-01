import Layout from "../components/layout";
import { useEffect } from "react";

// Bootstrap initialize
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap initialize

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";
// Animate on Scroll

// FontAwesone Icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// FontAwesone Icons

import "../styles/globals.css";

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
