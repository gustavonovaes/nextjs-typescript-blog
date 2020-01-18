
import "../assets/css/reset.css";
import "../assets/css/style.css";

import { AppContext, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppContext & AppProps) {
  return <Component {...pageProps} />;
};