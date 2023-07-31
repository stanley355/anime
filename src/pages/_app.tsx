import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import "@/styles/globals.scss";

function App({Component, pageProps}: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), [render]);
  return render ? <Component {...pageProps} /> : null;
}
export default App;