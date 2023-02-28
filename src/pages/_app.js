import "@/styles/globals.css";
import { Archivo } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={archivo.className}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </div>
  );
}
