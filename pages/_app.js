import { useRouter } from "next/router";
import Header from "@/components/layout/landing/Header/Header";
import "./styles/globals.css";
import Footer from "@/components/layout/landing/Header/Footer";

export default function App({ Component, pageProps }) {
const router = useRouter();
// I defined routes i want to hide the header and footer from. it's actually reusable 
const noLayoutRoutes = ['/dashboard']

// I now check all the routes that starts with the routes in the array
const hideLayout = noLayoutRoutes.some((path)=> router.pathname.startsWith(path))
  return (
    <>
      {!hideLayout && <Header />}
      <Component {...pageProps} />;
      {!hideLayout && <Footer />}
    </>
  )
}
