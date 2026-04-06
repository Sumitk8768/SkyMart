import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import 'remixicon/fonts/remixicon.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <ProductProvider>
 <AppRoutes/>
    <ToastContainer />
</ProductProvider>
    </CartProvider>
  </AuthProvider>
)
