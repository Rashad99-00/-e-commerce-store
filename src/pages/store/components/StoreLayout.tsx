import {Outlet,} from "react-router-dom";
import StoreFooter from "./StoreFooter";
import StoreHeader from "./StoreHeader";
import "../styles/base.css";
import "../styles/home.css";
import "../styles/catalog.css";
import "../styles/detail.css";
import "../styles/responsive.css";

function StoreLayout() {
  return (
    <div className="market">
      <StoreHeader />
      <main className="market-main">
        <Outlet />
      </main>
      <StoreFooter />
    </div>
  );
}

export default StoreLayout;
