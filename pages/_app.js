import { useRouter } from "next/router";
import Header from "@/components/layout/landing/Header/Header";
import Footer from "@/components/layout/landing/Header/Footer";
import { Inter, Montserrat } from 'next/font/google';
import { AppointmentsProvider } from "@/context/AppointmentsContext";

import "@/pages/styles/globals.css";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Routes without header/footer
  const noLayoutRoutes = ['/dashboard'];
  const hideLayout = noLayoutRoutes.some((path) =>
    router.pathname.startsWith(path)
  );

  return (
    <main className={`${inter.className} ${montserrat.variable}`}>
      <AppointmentsProvider>
        {!hideLayout && <Header />}

        <Component {...pageProps} />

        {!hideLayout && <Footer />}
      </AppointmentsProvider>
    </main>
  );
}
