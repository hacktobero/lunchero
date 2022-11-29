import '../styles/globals.css'
import ContextProvider from "../src/Context/Context";
import AuthContextProvider from '../src/Context/AuthContext';


function MyApp({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  </AuthContextProvider>
)}

export default MyApp
