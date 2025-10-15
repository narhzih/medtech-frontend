import Header from "@/components/layout/landing/Header/Header";
import "./styles/globals.css";
import Footer from "@/components/layout/landing/Header/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  )
}
