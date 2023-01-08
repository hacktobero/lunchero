import '../styles/globals.css'
import ContextProvider from "../src/Context/Context";
import AuthContextProvider from '../src/Context/AuthContext';
import CartProvider from '../src/Context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CartProvider>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </CartProvider>
    </AuthContextProvider>
  )
}

export default MyApp

