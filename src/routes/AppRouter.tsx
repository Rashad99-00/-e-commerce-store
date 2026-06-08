import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "../pages/store/Home";
import ProductDetail from "../pages/store/ProductDetail";
import ProductsPage from "../pages/store/ProductsPage";
import StoreLayout from "../pages/store/components/StoreLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<StoreLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<ProductsPage />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;