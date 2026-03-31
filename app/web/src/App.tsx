import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreLayout from "./components/layout/StoreLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShippingPolicyPage from "./pages/policies/ShippingPolicyPage";
import ReturnPolicyPage from "./pages/policies/ReturnPolicyPage";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import TermsPage from "./pages/policies/TermsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:slug", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      {
        path: "order-confirmation/:orderId",
        element: <OrderConfirmationPage />,
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "policies/shipping", element: <ShippingPolicyPage /> },
      { path: "policies/returns", element: <ReturnPolicyPage /> },
      { path: "policies/privacy", element: <PrivacyPolicyPage /> },
      { path: "policies/terms", element: <TermsPage /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
